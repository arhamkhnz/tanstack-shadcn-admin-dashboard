import { createFileRoute } from "@tanstack/react-router";

import { CalendarPanel } from "./-components/calendar-panel";
import { FocusCard } from "./-components/focus-card";
import { ProjectsSection } from "./-components/projects-section";
import { QuickActions } from "./-components/quick-actions";
import { QuoteCard } from "./-components/quote-card";
import { RecentNotesCard } from "./-components/recent-notes-card";
import { SummaryCards } from "./-components/summary-cards";
import { TasksSection } from "./-components/tasks-section";
import { WeeklySummaryCard } from "./-components/weekly-summary-card";

export const Route = createFileRoute("/(main)/dashboard/productivity")({
  component: Page,
});

function Page() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <section className="lg:col-span-9">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-foreground leading-none tracking-tight">Good morning, Arham.</h1>
            <p className="text-lg text-muted-foreground leading-none">
              Let&apos;s make today productive and meaningful.
            </p>
          </div>
          <SummaryCards />
          <TasksSection />
          <ProjectsSection />
          <QuickActions />
          <QuoteCard />
        </div>
      </section>

      <section className="flex flex-col gap-6 lg:col-span-3">
        <CalendarPanel />
        <FocusCard />
        <RecentNotesCard />
        <WeeklySummaryCard />
      </section>
    </div>
  );
}
