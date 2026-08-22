"use client";

import { ChatContainer } from "@/lib/components/chat/chat-container";
import { LazyMarkdownGfm } from "@/lib/components/lazy-markdown-gfm";
import { UpdateContentLink } from "@/lib/components/update-content-link";
import { UIMessage } from "ai";
import Link from "next/link";

interface MessageBubbleProps {
  message: UIMessage;
  referenceUrl?: string;
  canEdit?: boolean;
  onEditClick?: () => void;
}

export function MessageBubble({ message, referenceUrl, canEdit, onEditClick }: MessageBubbleProps) {
  const showLinks = message.role === "assistant" && (referenceUrl || canEdit);
  const isUser = message.role === "user";
  return (
    <div className="p-2">
      <ChatContainer isUser={isUser}>
        {message.parts.map((part, i) =>
          part.type === "text" ? (
            <div key={i} className={isUser ? "whitespace-pre-wrap" : undefined}>
              {/* User tự gõ text thường, không cần parse markdown — tránh chờ lazy-load chunk
                  markdown-gfm mới hiện được bubble của chính mình. */}
              {isUser ? part.text : <LazyMarkdownGfm>{part.text}</LazyMarkdownGfm>}
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
              Xem thêm
            </Link>
          )}
          {canEdit && <UpdateContentLink onClick={onEditClick} />}
        </div>
      )}
    </div>
  );
}
