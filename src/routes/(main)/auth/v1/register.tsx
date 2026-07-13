import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/auth/v1/register")({
  component: Page,
});

function Page() {
  return null;
}
