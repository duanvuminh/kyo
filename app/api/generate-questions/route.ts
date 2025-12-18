import { protectApi } from "@/core/utils/api-protection";
import { mapToQuestions, questionSchema } from "@/shared/lib/question-mapper";
import { aiService } from "@/shared/service/ai/factory";
import {
  instructionGenerateQuestions,
  promptGenerateQuestions,
} from "@/shared/service/ai/instructions";
import { ApiResponse } from "@/shared/types/dto/api-responses";
import { AppError, ErrorCode } from "@/shared/types/models/error";
import { Question } from "@/shared/types/models/question";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export async function POST(req: Request) {
  const protection = protectApi(req, { maxRequests: 5, windowMs: 60000 });
  if (!protection.success) {
    return protection.response;
  }

  try {
    const { grammarPoint, front }: { grammarPoint: string; front: string } = await req.json();

    if (!grammarPoint) {
      return NextResponse.json<ApiResponse>({ error: ErrorCode.AI_MODEL_ERROR }, { status: 400 });
    }

    const result = await aiService().generateObject({
      schema: questionSchema,
      prompt: promptGenerateQuestions(front, grammarPoint),
      system: instructionGenerateQuestions,
    });

    const questions: Question[] = mapToQuestions(result.questions);
    return NextResponse.json<ApiResponse<Question[]>>({ data: questions });
  } catch (error) {
    const errorCode = error instanceof AppError ? error.code : ErrorCode.AI_MODEL_ERROR;
    return NextResponse.json<ApiResponse>({ error: errorCode }, { status: 500 });
  }
}
