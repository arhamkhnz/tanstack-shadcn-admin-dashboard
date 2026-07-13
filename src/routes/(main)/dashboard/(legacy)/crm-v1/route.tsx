import { createFileRoute } from "@tanstack/react-router";

import { recentLeadsData } from "./-components/crm.config";
import { InsightCards } from "./-components/insight-cards";
import { OperationalCards } from "./-components/operational-cards";
import { OverviewCards } from "./-components/overview-cards";
import { RecentLeadsTable } from "./-components/recent-leads-table/table";

export const Route = createFileRoute("/(main)/dashboard/(legacy)/crm-v1")({
  component: Page,
});

function Page() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <OverviewCards />
      <InsightCards />
      <OperationalCards />
      <RecentLeadsTable data={recentLeadsData} />
    </div>
  );
}
