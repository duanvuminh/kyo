"use client";

import type { AppendFn } from "@/lib/components/chat/assistant-menu/use-assistant-menu";
import { ChatTurn, ChatTurnView } from "@/lib/components/chat/chat-turn-view";
import { getLastUserText } from "@/lib/components/chat/chat-message-utils";
import { findHuusennarareUrl } from "@/lib/utils/huusennarare";
import { UIMessage } from "ai";

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

export function MessageList({
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
