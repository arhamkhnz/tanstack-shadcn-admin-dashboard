import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/logistics")({
  component: Page,
});

function Page() {
  return null;
}
