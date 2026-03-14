import { useAppDispatch } from "@/shared/stores/hook";
import { updateEditMessage } from "@/shared/stores/slice-message";
import { Source } from "@/shared/types/models/word";
import { UIMessage } from "ai";
import { useEffect } from "react";

export function useSyncEditMessageFromChat(messages: UIMessage[]) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (messages.length < 2) {
      return;
    }

    const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");
    const lastUser = [...messages].reverse().find((m) => m.role === "user");

    const words = lastUser?.parts.find((item) => item.type === "text")?.text;
    const content = lastAssistant?.parts.find((item) => item.type === "text")?.text;
    if (!words) {
      return;
    }
    dispatch(
      updateEditMessage({
        words,
        documentId: words,
        content,
        source: Source.FIREBASE,
      })
    );
  }, [messages, dispatch]);
}
