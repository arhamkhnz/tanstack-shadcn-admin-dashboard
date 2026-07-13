import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/auth/v2/register")({
  component: Page,
});

function Page() {
  return null;
}
