"use client";

import { ChatContent } from "@/lib/components/chat/chat-content";
import { ChatInput } from "@/lib/components/chat/chat-input";
import { useSyncEditMessageFromChat } from "@/lib/components/chat/use-sync-edit-message-from-chat";
import { WordHistoryItem } from "@/lib/components/chat/word-history";
import { cn } from "@/lib/utils/utils";
import { useChat } from "@ai-sdk/react";
import { useEffect, useState } from "react";

export function Chat({ assistantText }: { assistantText?: string }) {
  const { messages, sendMessage, status } = useChat();
  const [cached, setCached] = useState<WordHistoryItem | null>(null);
  useSyncEditMessageFromChat(messages);

  // Preload chunk markdown-gfm ngay khi vào trang chat, tránh khung chat hiện rỗng rồi mới
  // hiện chữ (do LazyMarkdownGfm mới tải chunk khi bubble đầu tiên mount).
  useEffect(() => {
    void import("@/lib/components/markdown-gfm");
  }, []);

  const hasContent = messages.length > 0 || cached !== null;
  const isWaitingForResponse = status === "submitted" || status === "streaming";

  function handleSend(args: { text: string }) {
    setCached(null);
    sendMessage(args);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className={cn("pb-48", hasContent && "flex-1")}>
        <ChatContent
          cached={cached}
          messages={messages}
          assistantText={assistantText}
          isWaitingForResponse={isWaitingForResponse}
          sendMessage={sendMessage}
        />
      </div>
      <ChatInput
        sendMessage={handleSend}
        onSelectHistory={setCached}
      />
    </div>
  );
}
