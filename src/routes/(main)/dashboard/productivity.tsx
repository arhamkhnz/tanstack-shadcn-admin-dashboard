import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/productivity")({
  component: Page,
});

function Page() {
  return null;
}
