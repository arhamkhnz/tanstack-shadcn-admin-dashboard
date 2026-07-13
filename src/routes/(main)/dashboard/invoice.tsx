import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/invoice")({
  component: Page,
});

function Page() {
  return null;
}
