"use client";
import { ChatMessage } from "@/feature/manga/component/manga-chat/use-ably-chat";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ChatMessagesProps {
  messages: ChatMessage[];
  isLoading?: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.length === 0 ? (
        <p className="text-center text-muted-foreground">Chưa có tin nhắn nào</p>
      ) : (
        messages.map((msg) => (
          <div key={msg.id} className="p-2 rounded-lg bg-muted">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>{msg.sender}</span>
              <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
            </div>
            {msg.image && (
              <Image src={msg.image} alt="Chat image" width={200} height={200} className="rounded-md object-cover mb-1" />
            )}
            {msg.text && <p>{msg.text}</p>}
          </div>
        ))
      )}
      <div ref={bottomRef} />
    </div>
  );
}
