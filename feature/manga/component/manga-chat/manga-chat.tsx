"use client";
import { ChatInput } from "@/feature/manga/component/manga-chat/chat-input";
import { ChatMessages } from "@/feature/manga/component/manga-chat/chat-messages";
import { useAblyChat } from "@/feature/manga/component/manga-chat/use-ably-chat";
import { QuickSearchBySelectText } from "@/shared/component/quick-search-by-select-text/quick-search-by-select-text";
import { Button } from "@/shared/component/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/component/ui/sheet";
import { MessageCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";

export function MangaChat() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const { messages, sendMessage, isConnected, isLoadingHistory } = useAblyChat();

  const email = session?.user?.email;
  if (!email) {
    return <QuickSearchBySelectText />;
  }

  const handleSend = (text: string, image?: string) => {
    sendMessage(text, email, image);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="fixed bottom-2 right-2" size="icon">
          <MessageCircle />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[70vh] flex flex-col">
        <SheetDescription />
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            Chat
            <span
              className={`w-2 h-2 rounded-full ${
                isConnected ? "bg-green-500" : "bg-red-500"
              }`}
            />
          </SheetTitle>
        </SheetHeader>
        <ChatMessages messages={messages} isLoading={isLoadingHistory} />
        <ChatInput onSend={handleSend} disabled={!isConnected} />
      </SheetContent>
    </Sheet>
  );
}
