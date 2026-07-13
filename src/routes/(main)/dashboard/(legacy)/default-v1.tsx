import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/dashboard/(legacy)/default-v1")({
  component: Page,
});

function Page() {
  return null;
}
