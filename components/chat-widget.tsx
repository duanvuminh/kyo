"use client";

import { AssistantMenu } from "@/components/assistant-menu";
import { ChartContainer } from "@/components/chard-container";
import { ChatInput } from "@/components/chat-input";
import { useSyncEditMessageFromChat } from "@/hooks/use-sync-edit-message-from-chat.ts";
import { useChat } from "@ai-sdk/react";
import { Fragment } from "react";
import Markdown from "react-markdown";

export function ChatWidget({ assistantText }: { assistantText?: string }) {
  const { messages, input, handleInputChange, handleSubmit, append } =
    useChat();
  useSyncEditMessageFromChat(messages);
  return (
    <Fragment>
      {assistantText && (
        <AssistantMenu command={assistantText} append={append} />
      )}
      {messages.map((message) => (
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
      <ChatInput
        input={input}
        messages={messages}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </Fragment>
  );
}
