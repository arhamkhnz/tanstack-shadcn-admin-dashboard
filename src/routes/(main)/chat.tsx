import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/chat")({
  component: Page,
});

function Page() {
  return null;
}
