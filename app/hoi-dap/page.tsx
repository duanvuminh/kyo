"use client";

import { ChatInput } from "@/feature/manga/component/manga-chat/chat-input";
import { ChatMessages } from "@/feature/manga/component/manga-chat/chat-messages";
import { useAblyChat } from "@/feature/manga/component/manga-chat/use-ably-chat";
import { QuickSearchBySelectText } from "@/shared/component/quick-search-by-select-text/quick-search-by-select-text";
import { useSession } from "next-auth/react";

export default function HoiDapPage() {
  const { data: session } = useSession();
  const { messages, sendMessage, isConnected, isLoadingHistory } = useAblyChat();

  const email = session?.user?.email;
  if (!email) {
    return <QuickSearchBySelectText />;
  }

  const handleSend = (text: string, image?: string) => {
    sendMessage(text, email, image);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex items-center gap-2 p-4 border-b">
        <h1 className="font-semibold">Hỏi đáp</h1>
        <span
          className={`w-2 h-2 rounded-full ${
            isConnected ? "bg-green-500" : "bg-red-500"
          }`}
        />
      </div>
      <ChatMessages messages={messages} isLoading={isLoadingHistory} />
      <ChatInput onSend={handleSend} disabled={!isConnected} />
    </div>
  );
}
