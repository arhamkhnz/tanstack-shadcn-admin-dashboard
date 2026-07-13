import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/ecommerce")({
  component: Page,
});

function Page() {
  return null;
}
