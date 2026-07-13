import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/crm")({
  component: Page,
});

function Page() {
  return null;
}
