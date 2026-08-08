import { protectApi } from "@/lib/utils/api-protection";
import { createTextStreamResponse } from "@/lib/utils/stream-response";
import { handleChatMessages } from "@/lib/services/ai/chat-handler";
import { freeAiService } from "@/lib/services/ai/factory";
import { AppError, ErrorCode } from "@/lib/types";
import { convertToModelMessages, createUIMessageStreamResponse, toUIMessageStream, UIMessage } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const protection = protectApi(req, { maxRequests: 5, windowMs: 60000 });
  if (!protection.success) {
    return protection.response;
  }

  const { messages }: { messages: UIMessage[] } = await req.json();
  if (!messages) {
    throw new AppError(ErrorCode.AI_MODEL_ERROR);
  }

  const result = await handleChatMessages(
    freeAiService(),
    await convertToModelMessages(messages)
  );

  if (typeof result === "string") {
    return createTextStreamResponse(result);
  }

  return result ? createUIMessageStreamResponse({ stream: toUIMessageStream({ stream: result.stream }) }) : undefined;
}
