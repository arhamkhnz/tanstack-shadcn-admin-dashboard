import { createFileRoute } from "@tanstack/react-router";

import { infrastructureGroups } from "./-components/infrastructure-data";
import { InfrastructureHeader } from "./-components/infrastructure-header";
import { ProjectEnvironments } from "./-components/project-environments";

// Import this stylesheet in any page or component that renders country flag classes.
import "@/styles/flag-icons/flags.css";

export const Route = createFileRoute("/(main)/dashboard/infrastructure")({
  component: Page,
});

function Page() {
  return (
    <div className="flex flex-col gap-4">
      <InfrastructureHeader />

      <div className="flex flex-col gap-4">
        {infrastructureGroups.map((group) => (
          <ProjectEnvironments key={group.name} group={group} />
        ))}
      </div>
    </div>
  );
}
