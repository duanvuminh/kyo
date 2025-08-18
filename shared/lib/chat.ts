import { ModelMessage } from "ai";

export const getTextFromModelMessage = (
  msg?: ModelMessage
): string | undefined => {
  if (!msg) return undefined;
  if (Array.isArray(msg.content)) {
    const t = msg.content.find((p) => p?.type === "text")?.text;
    return typeof t === "string" ? t : undefined;
  }
};
