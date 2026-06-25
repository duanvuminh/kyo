import { protectApi } from "@/core/utils/api-protection";
import { createTextStreamResponse } from "@/core/utils/stream-response";
import { handleChatMessages } from "@/shared/service/ai/chat-handler";
import { aiService } from "@/shared/service/ai/factory";
import { AppError, ErrorCode } from "@/shared/type/models/error";
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
    aiService(),
    await convertToModelMessages(messages)
  );

  if (typeof result === "string") {
    return createTextStreamResponse(result);
  }

  return result ? createUIMessageStreamResponse({ stream: toUIMessageStream({ stream: result.stream }) }) : undefined;
}
