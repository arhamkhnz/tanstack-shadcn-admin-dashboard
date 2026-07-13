import { createFileRoute, Link } from "@tanstack/react-router";

import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/(main)/dashboard/chat")({
  component: Page,
});

function Page() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <h1 className="font-medium text-sm leading-none">Chat preview</h1>
          <p className="text-muted-foreground text-sm">
            This iframe shows the standalone chat screen. Open it in full screen for a better view.
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          nativeButton={false}
          render={<Link to="/chat" target="_blank" rel="noreferrer" aria-label="Open chat in new tab" />}
        >
          <ExternalLink />
        </Button>
      </div>

      <iframe src="/chat" title="Chat preview" className="min-h-0 flex-1 rounded-lg border bg-background" />
    </div>
  );
}
