import { useAppDispatch } from "@/stores/hook";
import { updateEditMessage } from "@/stores/slice-message";
import { UIMessage } from "ai";
import { useEffect } from "react";

export function useSyncEditMessageFromChat(messages: UIMessage[]) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (messages.length < 2) return;

    const words = messages
      .at(-2)
      ?.parts.find((item) => item.type === "text")?.text;
    const content = messages
      .at(-1)
      ?.parts.find((item) => item.type === "text")?.text;

    dispatch(updateEditMessage({ words, content }));
  }, [messages, dispatch]);
}
