/**
 * Boot script that reads user preference values from cookies or localStorage
 * based on the configured persistence mode.
 *
 * Runs early in <head> to apply the correct data attributes before hydration,
 * preventing layout or theme flicker and keeping the root document fully static.
 */
import { fontBootRegistry } from "@/lib/fonts/registry";
import { PREFERENCE_REGISTRY } from "@/lib/preferences/preferences-config";

export function ThemeBootScript() {
  const registry = JSON.stringify(PREFERENCE_REGISTRY);
  const fonts = JSON.stringify(fontBootRegistry);

  const code = `
    (function () {
      try {
        var root = document.documentElement;
        var REGISTRY = ${registry};
        var FONTS = ${fonts};

        function readCookie(name) {
          var match = document.cookie.split("; ").find(function(c) {
            return c.startsWith(name + "=");
          });
          return match ? decodeURIComponent(match.split("=")[1]) : null;
        }

        function readLocal(name) {
          try {
            return window.localStorage.getItem(name);
          } catch (e) {
            return null;
          }
        }

        function readPreference(key, definition) {
          var mode = definition.persistence;
          var value = null;

          if (mode === "localStorage") {
            value = readLocal(key);
          }

          if (!value && (mode === "client-cookie" || mode === "server-cookie")) {
            value = readCookie(key);
          }

          return definition.values.indexOf(value) >= 0 ? value : definition.defaultValue;
        }

        var preferences = {};

        Object.keys(REGISTRY).forEach(function(key) {
          var definition = REGISTRY[key];
          var value = readPreference(key, definition);

          preferences[key] = value;
          root.setAttribute(definition.attribute, value);
        });

        var mode = preferences.theme_mode;
        var resolvedMode =
          mode === "system" && window.matchMedia
            ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
            : mode === "dark"
              ? "dark"
              : "light";

        root.classList.toggle("dark", resolvedMode === "dark");
        root.style.colorScheme = resolvedMode;

        function applyFont(font) {
          root.style.setProperty("--app-font-sans", '"' + font.family + '", ' + font.fallback);
          root.style.setProperty("--app-font-variation-settings", font.variationSettings || "normal");
        }

        function loadFont(key, font, onLoaded) {
          var id = "app-font-stylesheet-" + key;
          var existingStylesheet = document.getElementById(id);

          if (existingStylesheet) {
            onLoaded();
            return;
          }

          var stylesheet = document.createElement("link");
          stylesheet.id = id;
          stylesheet.rel = "stylesheet";
          stylesheet.href = font.stylesheet;
          stylesheet.onerror = onLoaded;
          stylesheet.onload = function() {
            if (!document.fonts || !document.fonts.load) {
              onLoaded();
              return;
            }

            document.fonts.load('400 1rem "' + font.family + '"', "BESbswy").then(onLoaded, onLoaded);
          };
          document.head.appendChild(stylesheet);
        }

        var defaultFontKey = REGISTRY.font.defaultValue;
        var defaultFont = FONTS[defaultFontKey];
        var selectedFontKey = preferences.font;
        var selectedFont = FONTS[selectedFontKey];

        if (defaultFont) {
          applyFont(defaultFont);
        }

        if (selectedFont && selectedFontKey !== defaultFontKey) {
          var selectedFontReady = false;

          function activateSelectedFont() {
            if (selectedFontReady) return;

            selectedFontReady = true;
            applyFont(selectedFont);
          }

          loadFont(selectedFontKey, selectedFont, activateSelectedFont);
          window.setTimeout(activateSelectedFont, 2000);
        }

        function loadFontsInBackground() {
          Object.keys(FONTS).forEach(function(key) {
            if (key === defaultFontKey || key === selectedFontKey) return;

            loadFont(key, FONTS[key], function() {});
          });
        }

        function scheduleBackgroundFontLoading() {
          if (window.requestIdleCallback) {
            window.requestIdleCallback(loadFontsInBackground, { timeout: 2000 });
            return;
          }

          window.setTimeout(loadFontsInBackground, 0);
        }

        if (document.readyState === "complete") {
          scheduleBackgroundFontLoading();
        } else {
          window.addEventListener("load", scheduleBackgroundFontLoading, { once: true });
        }
      } catch (e) {
        console.warn("ThemeBootScript error:", e);
      }
    })();
  `;

  /* biome-ignore lint/security/noDangerouslySetInnerHtml: required for pre-hydration boot script */
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
