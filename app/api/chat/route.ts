import { protectApi } from "@/lib/utils/api-protection";
import { handleChatMessages } from "@/lib/services/ai/chat-handler";
import { freeAiService } from "@/lib/services/ai/factory";
import { AppError, ErrorCode } from "@/lib/types";
import { convertToModelMessages, createUIMessageStreamResponse, toUIMessageStream, UIMessage } from "ai";
import { NextResponse } from "next/server";

export const maxDuration = 30;

function createTextStreamResponse(text: string): NextResponse {
  const stringify = JSON.stringify(text);
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(`data: {"type":"start"}\n\n`);
      controller.enqueue(`data: {"type":"start-step"}\n\n`);
      controller.enqueue(`data: {"type":"text-start","id":"0"}\n\n`);
      controller.enqueue(
        `data: {"type":"text-delta","id":"0","delta":${stringify}}\n\n`
      );
      controller.enqueue(`data: {"type":"text-end","id":"0"}\n\n`);
      controller.enqueue(`data: {"type":"finish-step"}\n\n`);
      controller.enqueue(`data: {"type":"finish"}\n\n`);
      controller.enqueue(`data: [DONE]\n\n`);
      controller.close();
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

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
