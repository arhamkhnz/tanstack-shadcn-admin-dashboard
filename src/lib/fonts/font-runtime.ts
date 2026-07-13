import { type FontKey, fontRegistry } from "./registry";

export function applyFont(fontKey: FontKey): void {
  const font = fontRegistry[fontKey];
  const root = document.documentElement;
  const family = `"${font.family}", ${font.fallback}`;

  root.setAttribute("data-font", fontKey);
  root.style.setProperty("--app-font-sans", family);
  root.style.setProperty(
    "--app-font-variation-settings",
    "variationSettings" in font ? font.variationSettings : "normal",
  );
}
