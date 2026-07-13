import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(external)/")({
  beforeLoad: () => {
    throw redirect({ href: "/dashboard/default", replace: true });
  },
});
