import { createClientOnlyFn } from "@tanstack/react-start";

export const setLocalStorageValue = createClientOnlyFn((key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("[localStorage] Failed to write value:", error);
    }
  }
});

export const getLocalStorageValue = createClientOnlyFn((key: string): string | null => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
});
