import { createFileRoute } from "@tanstack/react-router";

import { MetricCards } from "./-components/metric-cards";
import { PerformanceOverview } from "./-components/performance-overview";
import { SubscriberOverview } from "./-components/subscriber-overview";

export const Route = createFileRoute("/(main)/dashboard/default")({
  component: Page,
});

function Page() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <MetricCards />
      <PerformanceOverview />
      <SubscriberOverview />
    </div>
  );
}
