"use client";

import { AssistantMenu } from "@/feature/chat/component/assistant-menu/assistant-menu";
import { ChatContainer } from "@/feature/chat/component/chat-container";
import { ChatInput } from "@/feature/chat/component/chat-input";
import { useSyncEditMessageFromChat } from "@/feature/chat/component/chat/use-sync-edit-message-from-chat.ts";
import { useChat } from "@ai-sdk/react";
import Markdown from "react-markdown";

export function Chat({ assistantText }: { assistantText?: string }) {
  const { messages, input, handleInputChange, handleSubmit, append } =
    useChat();
  useSyncEditMessageFromChat(messages);
  return (
    <>
      {assistantText && (
        <AssistantMenu command={assistantText} append={append} />
      )}
      {messages.map((message) => (
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
        </div>
      ))}
      <ChatInput
        input={input}
        messages={messages}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </>
  );
}
