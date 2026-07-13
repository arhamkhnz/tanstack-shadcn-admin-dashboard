import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/mail")({
  component: Page,
});

function Page() {
  return null;
}
