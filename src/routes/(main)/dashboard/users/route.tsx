import { createFileRoute } from "@tanstack/react-router";

import { users } from "./-components/data";
import { Users } from "./-components/users";

export const Route = createFileRoute("/(main)/dashboard/users")({
  component: Page,
});

function Page() {
  return <Users users={users} />;
}
