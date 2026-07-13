import { createFileRoute } from "@tanstack/react-router";

import { ActionsManagerQueue } from "./-components/analytics-actions-manager-queue";
import { ActionsRiskLedger } from "./-components/analytics-actions-risk-ledger";
import { DriversCoverageTriage } from "./-components/analytics-drivers-coverage-triage";
import { DriversForecastTarget } from "./-components/analytics-drivers-forecast-target";
import { AnalyticsOverview } from "./-components/analytics-overview";

export const Route = createFileRoute("/(main)/dashboard/(legacy)/analytics-v1")({
  component: Page,
});

function Page() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <AnalyticsOverview />

      <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <DriversForecastTarget />
          <DriversCoverageTriage />
        </div>
        <ActionsManagerQueue />
      </div>

      <ActionsRiskLedger />
    </div>
  );
}
