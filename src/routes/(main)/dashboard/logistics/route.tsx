import { createFileRoute } from "@tanstack/react-router";

import { Logistics } from "./-components/logistics";

// Import this stylesheet in any page or component that renders country flag classes.
import "@/styles/flag-icons/flags.css";

export const Route = createFileRoute("/(main)/dashboard/logistics")({
  component: Page,
});

function Page() {
  return <Logistics />;
}
