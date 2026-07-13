import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/academy")({
  component: Page,
});

function Page() {
  return null;
}
