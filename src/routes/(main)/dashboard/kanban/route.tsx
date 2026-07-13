import { createFileRoute } from "@tanstack/react-router";

import { initialBoard } from "./-components/data";
import { Kanban } from "./-components/kanban";

export const Route = createFileRoute("/(main)/dashboard/kanban")({
  component: Page,
});

function Page() {
  return (
    <div data-content-padding="false">
      <Kanban initialBoard={initialBoard} />
    </div>
  );
}
