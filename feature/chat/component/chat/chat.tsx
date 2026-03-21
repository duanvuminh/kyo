"use client";

import { cn } from "@/core/utils/utils";
import { AssistantMenu } from "@/feature/chat/component/assistant-menu/assistant-menu";
import { ChatContainer } from "@/feature/chat/component/chat-container";
import { ChatInput } from "@/feature/chat/component/chat-input";
import { useSyncEditMessageFromChat } from "@/feature/chat/component/chat/use-sync-edit-message-from-chat";
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

  return (
    <div className="flex min-h-screen flex-col">
      <div className={cn(messages.length > 0 || cached ? "flex-1" : "")}>
        {assistantText && (
          <AssistantMenu command={assistantText} append={sendMessage} />
        )}
        {cached ? (
          <CachedMessage cached={cached} />
        ) : (
          <MessageList messages={messages} />
        )}
      </div>
      <ChatInput
        messages={messages}
        sendMessage={(args) => {
          setCached(null);
          sendMessage(args);
        }}
        onSelectHistory={(item) => setCached(item)}
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
  const lastUserMessage = [...messages]
    .reverse()
    .find((m) => m.role === "user");
  const referenceSlug = lastUserMessage
    ? findHuusennarareSlug(
        lastUserMessage.parts.find((p) => p.type === "text")?.text.trim() ?? "",
      )
    : undefined;

  return (
    <>
      {messages.map((message, index) => (
        <div key={message.id} className="p-2">
          <ChatContainer isUser={message.role === "user"}>
            {message.parts.map((part, i) => {
              switch (part.type) {
                case "text":
                  return (
                    <div key={`${message.id}-${i}`}>
                      <Markdown>{part.text}</Markdown>
                    </div>
                  );
              }
            })}
          </ChatContainer>
          {message.role === "assistant" &&
            index === messages.length - 1 &&
            referenceSlug && (
              <Link
                href={`/huusennarare/${referenceSlug}`}
                className="mt-1 text-sm text-secondary"
              >
                Xem thêm →
              </Link>
            )}
        </div>
      ))}
    </>
  );
}
