import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/coming-soon")({
  component: Page,
});

function Page() {
  return null;
}
