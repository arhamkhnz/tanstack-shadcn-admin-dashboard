import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/finance")({
  component: Page,
});

function Page() {
  return null;
}
