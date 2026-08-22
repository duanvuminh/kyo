"use client";

import { ChatContainer } from "@/lib/components/chat/chat-container";
import { WordHistoryItem } from "@/lib/components/chat/word-history";
import { LazyMarkdownGfm } from "@/lib/components/lazy-markdown-gfm";
import { findHuusennarareUrl } from "@/lib/utils/huusennarare";
import Link from "next/link";

export function CachedMessage({ cached }: { cached: WordHistoryItem }) {
  const url = findHuusennarareUrl(cached.words);
  return (
    <div className="p-2">
      <ChatContainer isUser={false}>
        <LazyMarkdownGfm>{cached.content ?? ""}</LazyMarkdownGfm>
      </ChatContainer>
      {url && (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-xs text-muted-foreground"
        >
          Xem thêm
        </Link>
      )}
    </div>
  );
}
