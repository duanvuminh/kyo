"use client";

import { cn } from "@/lib/utils/utils";
import { AssistantMenu } from "@/lib/components/chat/assistant-menu/assistant-menu";
import type { AppendFn } from "@/lib/components/chat/assistant-menu/use-assistant-menu";
import { ChatContainer } from "@/lib/components/chat/chat-container";
import { ChatInput } from "@/lib/components/chat/chat-input";
import { TypingIndicator } from "@/lib/components/typing-indicator";
import { useIsWordCommand } from "@/lib/components/chat/use-is-word-command";
import { useSyncEditMessageFromChat } from "@/lib/components/chat/use-sync-edit-message-from-chat";
import { WordHistoryItem } from "@/lib/components/chat/word-history";
import huusennarareIndex from "@/lib/data/huusennarare-index.json";
import { useChat } from "@ai-sdk/react";
import { UIMessage } from "ai";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const kanjiIndex: Record<string, string> = huusennarareIndex;

function findHuusennarareUrl(kanji: string): string | undefined {
  return kanjiIndex[kanji];
}

function getLastUserText(messages: UIMessage[]): string {
  return (
    [...messages]
      .reverse()
      .find((m) => m.role === "user")
      ?.parts.find((p) => p.type === "text")
      ?.text.trim() ?? ""
  );
}

interface ChatContentProps {
  cached: WordHistoryItem | null;
  messages: UIMessage[];
  assistantText?: string;
  lastUserText: string;
  isWordCommand: boolean;
  isWaitingForResponse: boolean;
  sendMessage: AppendFn;
}

function ChatContent({
  cached,
  messages,
  assistantText,
  lastUserText,
  isWordCommand,
  isWaitingForResponse,
  sendMessage,
}: ChatContentProps) {
  if (cached) {
    return <CachedMessage cached={cached} />;
  }

  return (
    <>
      <MessageList messages={messages} />
      {assistantText && (
        <AssistantMenu command={assistantText} append={sendMessage} />
      )}
      {!assistantText && isWordCommand && (
        <AssistantMenu
          key={lastUserText}
          command={lastUserText}
          append={sendMessage}
          autoSend={false}
        />
      )}
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

export function Chat({ assistantText }: { assistantText?: string }) {
  const { messages, sendMessage } = useChat();
  const [cached, setCached] = useState<WordHistoryItem | null>(null);
  useSyncEditMessageFromChat(messages);

  const hasContent = messages.length > 0 || cached !== null;
  const isWaitingForResponse = messages.length > 0 && messages.at(-1)?.role === "user";

  const lastUserText = !assistantText && !isWaitingForResponse ? getLastUserText(messages) : "";
  const isWordCommand = useIsWordCommand(lastUserText);

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
          lastUserText={lastUserText}
          isWordCommand={isWordCommand}
          isWaitingForResponse={isWaitingForResponse}
          sendMessage={sendMessage}
        />
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
  const url = findHuusennarareUrl(cached.words);
  return (
    <div className="p-2">
      <ChatContainer isUser={false}>
        <Markdown remarkPlugins={[remarkGfm]}>{cached.content ?? ""}</Markdown>
      </ChatContainer>
      {url && (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-sm text-secondary"
        >
          Xem thêm →
        </Link>
      )}
    </div>
  );
}

function MessageList({ messages }: { messages: UIMessage[] }) {
  const lastUserText = getLastUserText(messages);
  const referenceUrl = lastUserText ? findHuusennarareUrl(lastUserText) : undefined;

  return (
    <>
      {messages.map((message, index) => (
        <MessageBubble
          key={message.id}
          message={message}
          referenceUrl={index === messages.length - 1 ? referenceUrl : undefined}
        />
      ))}
    </>
  );
}

interface MessageBubbleProps {
  message: UIMessage;
  referenceUrl?: string;
}

function MessageBubble({ message, referenceUrl }: MessageBubbleProps) {
  return (
    <div className="p-2">
      <ChatContainer isUser={message.role === "user"}>
        {message.parts.map((part, i) =>
          part.type === "text" ? (
            <div key={i}>
              <Markdown remarkPlugins={[remarkGfm]}>{part.text}</Markdown>
            </div>
          ) : null
        )}
      </ChatContainer>
      {message.role === "assistant" && referenceUrl && (
        <Link
          href={referenceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-sm text-secondary"
        >
          Xem thêm →
        </Link>
      )}
    </div>
  );
}
