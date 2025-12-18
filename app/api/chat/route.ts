import { protectApi } from "@/core/utils/api-protection";
import { handleChatMessages } from "@/shared/service/ai/chat-handler";
import { aiService } from "@/shared/service/ai/factory";
import { createTextStreamResponse } from "@/core/utils/stream-response";
import { ApiResponse } from "@/shared/types/dto/api-responses";
import { AppError, ErrorCode } from "@/shared/types/models/error";
import { convertToModelMessages, UIMessage } from "ai";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export async function POST(req: Request) {
  const protection = protectApi(req, { maxRequests: 20, windowMs: 60000 });
  if (!protection.success) {
    return protection.response;
  }

  try {
    const { messages }: { messages: UIMessage[] } = await req.json();
    if (!messages) {
      return NextResponse.json<ApiResponse>(
        { error: ErrorCode.AI_MODEL_ERROR },
        { status: 400 }
      );
    }

    const result = await handleChatMessages(
      aiService(),
      convertToModelMessages(messages)
    );

    if (typeof result === "string") {
      return createTextStreamResponse(result);
    }

    return result?.toUIMessageStreamResponse();
  } catch (error) {
    const errorCode =
      error instanceof AppError ? error.code : ErrorCode.AI_MODEL_ERROR;
    return NextResponse.json<ApiResponse>(
      { error: errorCode },
      { status: 500 }
    );
  }
}
