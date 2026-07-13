import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/mail")({
  component: Page,
});

function Page() {
  return null;
}
