import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/auth/v2/login")({
  component: Page,
});

function Page() {
  return null;
}
