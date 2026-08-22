import { UIMessage } from "ai";

export function getMessageText(message?: UIMessage): string {
  return message?.parts.find((p) => p.type === "text")?.text.trim() ?? "";
}

export function getLastUserText(messages: UIMessage[]): string {
  return getMessageText([...messages].reverse().find((m) => m.role === "user"));
}
