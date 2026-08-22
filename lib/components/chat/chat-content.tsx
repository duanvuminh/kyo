"use client";

import { AssistantMenu } from "@/lib/components/chat/assistant-menu/assistant-menu";
import type { AppendFn } from "@/lib/components/chat/assistant-menu/use-assistant-menu";
import { CachedMessage } from "@/lib/components/chat/cached-message";
import { ChatContainer } from "@/lib/components/chat/chat-container";
import { MessageList } from "@/lib/components/chat/message-list";
import { WordHistoryItem } from "@/lib/components/chat/word-history";
import { TypingIndicator } from "@/lib/components/typing-indicator";
import { UIMessage } from "ai";

interface ChatContentProps {
  cached: WordHistoryItem | null;
  messages: UIMessage[];
  assistantText?: string;
  isWaitingForResponse: boolean;
  sendMessage: AppendFn;
}

export function ChatContent({
  cached,
  messages,
  assistantText,
  isWaitingForResponse,
  sendMessage,
}: ChatContentProps) {
  if (cached) {
    return <CachedMessage cached={cached} />;
  }

  return (
    <>
      {/* Kích hoạt auto-send cho lượt tra cứu đầu tiên (từ quick-search); sau khi message
          thật xuất hiện, MessageList bên dưới tự render AssistantMenu riêng cho turn đó. */}
      {assistantText && messages.length === 0 && (
        <AssistantMenu command={assistantText} append={sendMessage} />
      )}
      <MessageList
        messages={messages}
        sendMessage={sendMessage}
        isWaitingForResponse={isWaitingForResponse}
      />
      {isWaitingForResponse && (
        <div className="p-2">
          <ChatContainer isUser={false}>
            <TypingIndicator />
          </ChatContainer>
        </div>
      )}
    </>
  );
}
