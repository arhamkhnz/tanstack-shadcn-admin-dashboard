import { applyFont } from "@/lib/fonts/font-runtime";

import { PREFERENCE_REGISTRY, type PreferenceKey, type PreferenceValueMap } from "./preferences-config";
import type { ResolvedThemeMode } from "./theme";
import { applyThemeMode } from "./theme-utils";

export function applyPreference<K extends PreferenceKey>(
  key: K,
  value: PreferenceValueMap[K],
): ResolvedThemeMode | undefined {
  if (key === "theme_mode") {
    return applyThemeMode(value as PreferenceValueMap["theme_mode"]);
  }

  if (key === "font") {
    applyFont(value as PreferenceValueMap["font"]);
    return undefined;
  }

  document.documentElement.setAttribute(PREFERENCE_REGISTRY[key].attribute, value);
  return undefined;
}
