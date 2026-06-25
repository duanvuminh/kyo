"use client";

import { cn } from "@/core/utils/utils";
import { AssistantMenu } from "@/feature/chat/component/assistant-menu/assistant-menu";
import { ChatContainer } from "@/feature/chat/component/chat-container";
import { ChatInput } from "@/feature/chat/component/chat-input";
import { useSyncEditMessageFromChat } from "@/feature/chat/component/chat/use-sync-edit-message-from-chat";
import { TypingIndicator } from "@/feature/chat/component/typing-indicator";
import { WordHistoryItem } from "@/feature/chat/component/word-history";
import { findHuusennarareSlug } from "@/shared/lib/huusennarare-index";
import { useChat } from "@ai-sdk/react";
import { UIMessage } from "ai";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

export function Chat({ assistantText }: { assistantText?: string }) {
  const { messages, sendMessage } = useChat();
  const [cached, setCached] = useState<WordHistoryItem | null>(null);
  useSyncEditMessageFromChat(messages);

  const hasContent = messages.length > 0 || cached !== null;
  const isWaitingForResponse = messages.length > 0 && messages.at(-1)?.role === "user";

  function handleSend(args: { text: string }) {
    setCached(null);
    sendMessage(args);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className={cn("pb-48", hasContent && "flex-1")}>
        {assistantText && (
          <AssistantMenu command={assistantText} append={sendMessage} />
        )}
        {cached ? (
          <CachedMessage cached={cached} />
        ) : (
          <>
            <MessageList messages={messages} />
            {isWaitingForResponse && (
              <div className="p-2">
                <ChatContainer isUser={false}>
                  <TypingIndicator />
                </ChatContainer>
              </div>
            )}
          </>
        )}
      </div>
      <ChatInput
        messages={messages}
        sendMessage={handleSend}
        onSelectHistory={setCached}
      />
    </div>
  );
}

function CachedMessage({ cached }: { cached: WordHistoryItem }) {
  const slug = findHuusennarareSlug(cached.words);
  return (
    <div className="p-2">
      <ChatContainer isUser={false}>
        <Markdown>{cached.content ?? ""}</Markdown>
      </ChatContainer>
      {slug && (
        <Link href={`/huusennarare/${slug}`} className="mt-1 text-sm text-secondary">
          Xem thêm →
        </Link>
      )}
    </div>
  );
}

function MessageList({ messages }: { messages: UIMessage[] }) {
  const lastUserText = [...messages]
    .reverse()
    .find((m) => m.role === "user")
    ?.parts.find((p) => p.type === "text")
    ?.text.trim() ?? "";
  const referenceSlug = lastUserText ? findHuusennarareSlug(lastUserText) : undefined;

  return (
    <>
      {messages.map((message, index) => (
        <MessageBubble
          key={message.id}
          message={message}
          referenceSlug={index === messages.length - 1 ? referenceSlug : undefined}
        />
      ))}
    </>
  );
}

interface MessageBubbleProps {
  message: UIMessage;
  referenceSlug?: string;
}

function MessageBubble({ message, referenceSlug }: MessageBubbleProps) {
  return (
    <div className="p-2">
      <ChatContainer isUser={message.role === "user"}>
        {message.parts.map((part, i) =>
          part.type === "text" ? (
            <div key={i}>
              <Markdown>{part.text}</Markdown>
            </div>
          ) : null
        )}
      </ChatContainer>
      {message.role === "assistant" && referenceSlug && (
        <Link href={`/huusennarare/${referenceSlug}`} className="mt-1 text-sm text-secondary">
          Xem thêm →
        </Link>
      )}
    </div>
  );
}
