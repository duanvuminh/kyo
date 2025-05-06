"use client";

import { ChartContainer } from "@/components/chard-container";
import { ChatInput } from "@/components/chat-input";
import { useAppDispatch } from "@/stores/hook";
import { updateEditMessage } from "@/stores/slice-message";
import { useChat } from "@ai-sdk/react";
import { Fragment, useEffect } from "react";
import Markdown from "react-markdown";

export function ChatWidget() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (messages.length < 2) return;
    console.log("useEffect", messages);
    const words = messages
      .at(-2)
      ?.parts.find((item) => item.type == "text")?.text;
    const content = messages
      .at(-1)
      ?.parts.find((item) => item.type == "text")?.text;
    dispatch(updateEditMessage({ words, content }));
  }, [messages]);
  return (
    <Fragment>
      <div className="w-full prose py-24 mx-auto">
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
