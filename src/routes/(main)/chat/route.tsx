import { createFileRoute } from "@tanstack/react-router";

import { SidebarProvider } from "@/components/ui/sidebar";

import { Chat } from "./-components/chat";
import { ChatHeader } from "./-components/chat-header";
import { ChatSidebar } from "./-components/chat-sidebar";
import { conversations } from "./-components/data";

export const Route = createFileRoute("/(main)/chat")({
  component: Page,
});

function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <ChatHeader />
        <div className="flex flex-1">
          <ChatSidebar />
          <Chat conversations={conversations} />
        </div>
      </SidebarProvider>
    </div>
  );
}
