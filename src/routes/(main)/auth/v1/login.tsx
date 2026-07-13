import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/auth/v1/login")({
  component: Page,
});

function Page() {
  return null;
}
