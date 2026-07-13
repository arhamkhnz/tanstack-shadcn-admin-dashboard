import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/unauthorized")({
  component: Page,
});

function Page() {
  return null;
}
