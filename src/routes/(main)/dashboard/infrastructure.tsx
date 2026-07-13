import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/infrastructure")({
  component: Page,
});

function Page() {
  return null;
}
