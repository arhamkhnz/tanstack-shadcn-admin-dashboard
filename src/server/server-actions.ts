import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "@tanstack/react-start/server";

import {
  getPreferencePersistence,
  PREFERENCE_REGISTRY,
  type PreferenceKey,
  type PreferenceValueMap,
  parsePreference,
} from "@/lib/preferences/preferences-config";

const getValueFromCookieServer = createServerFn({ method: "GET" })
  .validator((key: string) => key)
  .handler(({ data: key }) => getCookie(key));

export async function getValueFromCookie(key: string): Promise<string | undefined> {
  return getValueFromCookieServer({ data: key });
}

type SetCookieInput = {
  key: string;
  value: string;
  options: {
    path?: string;
    maxAge?: number;
  };
};

const setValueToCookieServer = createServerFn({ method: "POST" })
  .validator((data: SetCookieInput) => data)
  .handler(({ data }) => {
    setCookie(data.key, data.value, {
      path: data.options.path ?? "/",
      maxAge: data.options.maxAge ?? 60 * 60 * 24 * 7, // default: 7 days
      sameSite: "lax",
    });
  });

export async function setValueToCookie(
  key: string,
  value: string,
  options: { path?: string; maxAge?: number } = {},
): Promise<void> {
  await setValueToCookieServer({ data: { key, value, options } });
}

const getPreferenceServer = createServerFn({ method: "GET" })
  .validator((key: PreferenceKey) => key)
  .handler(({ data: key }) => {
    const definition = PREFERENCE_REGISTRY[key];
    const persistence = getPreferencePersistence(key);

    if (persistence !== "client-cookie" && persistence !== "server-cookie") {
      return definition.defaultValue;
    }

    return parsePreference(key, getCookie(key)?.trim());
  });

export async function getPreference<K extends PreferenceKey>(key: K): Promise<PreferenceValueMap[K]> {
  return getPreferenceServer({ data: key }) as Promise<PreferenceValueMap[K]>;
}

const getDashboardLayoutServer = createServerFn({ method: "GET" }).handler(() => ({
  defaultOpen: getCookie("sidebar_state") !== "false",
  variant: parsePreference("sidebar_variant", getCookie("sidebar_variant")?.trim()),
  collapsible: parsePreference("sidebar_collapsible", getCookie("sidebar_collapsible")?.trim()),
}));

export async function getDashboardLayout() {
  return getDashboardLayoutServer();
}
