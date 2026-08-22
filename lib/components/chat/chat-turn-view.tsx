"use client";

import { AssistantMenu } from "@/lib/components/chat/assistant-menu/assistant-menu";
import type { AppendFn } from "@/lib/components/chat/assistant-menu/use-assistant-menu";
import { getMessageText } from "@/lib/components/chat/chat-message-utils";
import { MessageBubble } from "@/lib/components/chat/message-bubble";
import { useCanEdit } from "@/lib/components/chat/use-can-edit";
import { useIsWordCommand } from "@/lib/components/chat/use-is-word-command";
import { useAppDispatch } from "@/lib/stores/hook";
import { updateEditMessage } from "@/lib/stores/slice-message";
import { Source } from "@/lib/types";
import { UIMessage } from "ai";

export interface ChatTurn {
  user: UIMessage;
  assistant?: UIMessage;
}

interface ChatTurnViewProps {
  turn: ChatTurn;
  referenceUrl?: string;
  sendMessage: AppendFn;
  isPending: boolean;
}

export function ChatTurnView({ turn, referenceUrl, sendMessage, isPending }: ChatTurnViewProps) {
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
