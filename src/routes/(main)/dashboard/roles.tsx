import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/roles")({
  component: Page,
});

function Page() {
  return null;
}
