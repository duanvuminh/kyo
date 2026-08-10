"use client";

import { wordExists } from "@/app/actions/check.actions";
import { AssistantMenu } from "@/lib/components/chat/assistant-menu/assistant-menu";
import type { AppendFn } from "@/lib/components/chat/assistant-menu/use-assistant-menu";
import { ChatContainer } from "@/lib/components/chat/chat-container";
import { ChatInput } from "@/lib/components/chat/chat-input";
import { useIsWordCommand } from "@/lib/components/chat/use-is-word-command";
import { useSyncEditMessageFromChat } from "@/lib/components/chat/use-sync-edit-message-from-chat";
import { WordHistoryItem } from "@/lib/components/chat/word-history";
import { TypingIndicator } from "@/lib/components/typing-indicator";
import { UpdateContentLink } from "@/lib/components/update-content-link";
import { useAppDispatch } from "@/lib/stores/hook";
import { updateEditMessage } from "@/lib/stores/slice-message";
import { Source } from "@/lib/types";
import { findHuusennarareUrl } from "@/lib/utils/huusennarare";
import { cn } from "@/lib/utils/utils";
import { useChat } from "@ai-sdk/react";
import { UIMessage } from "ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function getMessageText(message?: UIMessage): string {
  return message?.parts.find((p) => p.type === "text")?.text.trim() ?? "";
}

function getLastUserText(messages: UIMessage[]): string {
  return getMessageText([...messages].reverse().find((m) => m.role === "user"));
}

function useCanEdit(command: string): boolean {
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    if (!command) {
      return;
    }
    let cancelled = false;
    wordExists(command).then((exists) => {
      if (!cancelled) {
        setCanEdit(exists);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [command]);

  return canEdit;
}

export function Chat({ assistantText }: { assistantText?: string }) {
  const { messages, sendMessage, status } = useChat();
  const [cached, setCached] = useState<WordHistoryItem | null>(null);
  useSyncEditMessageFromChat(messages);

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

interface ChatContentProps {
  cached: WordHistoryItem | null;
  messages: UIMessage[];
  assistantText?: string;
  isWaitingForResponse: boolean;
  sendMessage: AppendFn;
}

function ChatContent({
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

interface ChatTurn {
  user: UIMessage;
  assistant?: UIMessage;
}

function groupIntoTurns(messages: UIMessage[]): ChatTurn[] {
  const turns: ChatTurn[] = [];
  for (const message of messages) {
    if (message.role === "user") {
      turns.push({ user: message });
    } else if (message.role === "assistant" && turns.length > 0) {
      turns[turns.length - 1].assistant = message;
    }
  }
  return turns;
}

function MessageList({
  messages,
  sendMessage,
  isWaitingForResponse,
}: {
  messages: UIMessage[];
  sendMessage: AppendFn;
  isWaitingForResponse: boolean;
}) {
  const turns = groupIntoTurns(messages);
  const lastUserText = getLastUserText(messages);
  const referenceUrl = lastUserText ? findHuusennarareUrl(lastUserText) : undefined;

  return (
    <>
      {turns.map((turn, index) => (
        <ChatTurnView
          key={turn.user.id}
          turn={turn}
          referenceUrl={index === turns.length - 1 ? referenceUrl : undefined}
          sendMessage={sendMessage}
          isPending={index === turns.length - 1 && isWaitingForResponse}
        />
      ))}
    </>
  );
}

interface ChatTurnViewProps {
  turn: ChatTurn;
  referenceUrl?: string;
  sendMessage: AppendFn;
  isPending: boolean;
}

function ChatTurnView({ turn, referenceUrl, sendMessage, isPending }: ChatTurnViewProps) {
  const userText = getMessageText(turn.user);
  // Chờ AI trả lời xong hẳn (kể cả onFinish server-side ghi Firestore) mới check + hiện AssistantMenu/Đóng góp
  const isReady = Boolean(turn.assistant) && !isPending;
  const isWordCommand = useIsWordCommand(isReady ? userText : "");
  const canEdit = useCanEdit(isReady ? userText : "");
  const dispatch = useAppDispatch();

  return (
    <>
      <MessageBubble message={turn.user} />
      {isReady && isWordCommand && (
        <AssistantMenu command={userText} append={sendMessage} autoSend={false} />
      )}
      {turn.assistant && (
        <MessageBubble
          message={turn.assistant}
          referenceUrl={referenceUrl}
          canEdit={canEdit}
          onEditClick={() =>
            dispatch(
              updateEditMessage({
                source: Source.FIREBASE,
                documentId: userText,
                words: userText,
                content: getMessageText(turn.assistant),
              })
            )
          }
        />
      )}
    </>
  );
}

interface MessageBubbleProps {
  message: UIMessage;
  referenceUrl?: string;
  canEdit?: boolean;
  onEditClick?: () => void;
}

function MessageBubble({ message, referenceUrl, canEdit, onEditClick }: MessageBubbleProps) {
  const showLinks = message.role === "assistant" && (referenceUrl || canEdit);
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
      {showLinks && (
        <div className="mt-1 flex items-center gap-3">
          {referenceUrl && (
            <Link
              href={referenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground"
            >
              Xem thêm →
            </Link>
          )}
          {canEdit && <UpdateContentLink onClick={onEditClick} />}
        </div>
      )}
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
          className="mt-1 text-xs text-muted-foreground"
        >
          Xem thêm →
        </Link>
      )}
    </div>
  );
}
