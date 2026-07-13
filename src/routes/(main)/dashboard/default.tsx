import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/default")({
  component: Page,
});

function Page() {
  return null;
}
