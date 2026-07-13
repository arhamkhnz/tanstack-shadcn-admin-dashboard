import { createClientOnlyFn } from "@tanstack/react-start";

// Client-side cookie utilities.
// These functions manage cookies in the browser only.
// Server functions handle cookie updates on the server side.

function writeClientCookie(serializedCookie: string) {
  // biome-ignore lint/suspicious/noDocumentCookie: Preferences intentionally use browser-readable cookies.
  document.cookie = serializedCookie;
}

export const setClientCookie = createClientOnlyFn((key: string, value: string, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  writeClientCookie(`${key}=${value}; expires=${expires}; path=/`);
});

export const getClientCookie = createClientOnlyFn((key: string) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`))
    ?.split("=")[1];
});

export const deleteClientCookie = createClientOnlyFn((key: string) => {
  writeClientCookie(`${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`);
});
