import { createFileRoute } from "@tanstack/react-router";

import { KpiCards } from "./-components/kpi-cards";
import { OpportunitiesSection } from "./-components/opportunities-section";
import { PipelineActivity } from "./-components/pipeline-activity";
import { TaskReminders } from "./-components/task-reminders";

export const Route = createFileRoute("/(main)/dashboard/crm")({
  component: Page,
});

function Page() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <KpiCards />
      <PipelineActivity />
      <TaskReminders />
      <OpportunitiesSection />
    </div>
  );
}
