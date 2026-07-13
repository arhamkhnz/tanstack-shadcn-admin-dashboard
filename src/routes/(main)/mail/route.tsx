import { createFileRoute } from "@tanstack/react-router";

import { SidebarProvider } from "@/components/ui/sidebar";
import { getValueFromCookie } from "@/server/server-actions";

import { mails } from "./-components/data";
import { MailComponent } from "./-components/mail";
import { DEFAULT_MAIL_LAYOUT, MAIL_LAYOUT_COOKIE } from "./-components/mail-layout-config";
import { MailSidebar } from "./-components/mail-sidebar";

export const Route = createFileRoute("/(main)/mail")({
  loader: async () => {
    const layoutCookie = await getValueFromCookie(MAIL_LAYOUT_COOKIE);

    return {
      defaultLayout: layoutCookie ? JSON.parse(layoutCookie) : [...DEFAULT_MAIL_LAYOUT],
    };
  },
  component: Page,
});

function Page() {
  const { defaultLayout } = Route.useLoaderData();

  return (
    <div className="relative h-full">
      <SidebarProvider className="h-full min-h-0">
        <MailSidebar />
        <div className="size-full">
          <div className="h-dvh min-h-0 overflow-hidden">
            <MailComponent mails={mails} defaultLayout={defaultLayout} />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
