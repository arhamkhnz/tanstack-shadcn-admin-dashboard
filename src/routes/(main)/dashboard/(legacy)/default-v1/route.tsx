import { createFileRoute } from "@tanstack/react-router";

import { ChartAreaInteractive } from "./-components/chart-area-interactive";
import data from "./-components/data.json";
import { ProposalSectionsTable } from "./-components/proposal-sections-table/table";
import { SectionCards } from "./-components/section-cards";

export const Route = createFileRoute("/(main)/dashboard/(legacy)/default-v1")({
  component: Page,
});

function Page() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <SectionCards />
      <ChartAreaInteractive />
      <ProposalSectionsTable data={data} />
    </div>
  );
}
