"use client";

import { ChartContainer } from "@/components/chard-container";
import { ChatInput } from "@/components/chat-input";
import { useSyncEditMessageFromChat } from "@/hooks/use-sync-edit-message-from-chat.ts";
import { useChat } from "@ai-sdk/react";
import { Fragment } from "react";
import Markdown from "react-markdown";

export function ChatWidget({
  showOnlyLastMessage = false,
}: {
  showOnlyLastMessage: boolean;
}) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  useSyncEditMessageFromChat(messages);
  const displayMessage = showOnlyLastMessage ? messages.slice(-2) : messages;
  return (
    <Fragment>
      <div className="w-full prose py-24 mx-auto">
        {displayMessage.map((message) => (
          <div key={message.id} className="p-2">
            <ChartContainer isUser={message.role === "user"}>
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
            </ChartContainer>
          </div>
        ))}
      </div>
      <ChatInput
        input={input}
        messages={messages}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </Fragment>
  );
}
