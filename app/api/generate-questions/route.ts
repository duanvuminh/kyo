import { aiService } from "@/shared/service/ai/factory";
import {
  instructionGenerateQuestions,
  promptGenerateQuestions,
} from "@/shared/service/ai/instructions";
import { protectApi } from "@/shared/utils/api-protection";
import { NextResponse } from "next/server";
import { z } from "zod";

export const maxDuration = 30;

const questionSchema = z.object({
  questions: z.array(
    z.object({
      content: z.string().describe("Câu tiếng Nhật với chỗ trống ___"),
      answer1: z.string().describe("Đáp án 1"),
      answer2: z.string().describe("Đáp án 2"),
      answer3: z.string().describe("Đáp án 3"),
      answer4: z.string().describe("Đáp án 4"),
      correctAnswer: z
        .number()
        .describe("Index của đáp án đúng (0=answer1, 1=answer2, 2=answer3, 3=answer4)"),
      memo1: z.string().describe("Giải thích cho đáp án 1"),
      memo2: z.string().describe("Giải thích cho đáp án 2"),
      memo3: z.string().describe("Giải thích cho đáp án 3"),
      memo4: z.string().describe("Giải thích cho đáp án 4"),
    })
  ),
});

export async function POST(req: Request) {
  const protection = protectApi(req, { maxRequests: 5, windowMs: 60000 });
  if (!protection.success) {
    return protection.response;
  }

  try {
    const { grammarPoint, front }: { grammarPoint: string; front: string } =
      await req.json();

    if (!grammarPoint) {
      return NextResponse.json(
        { error: "grammarPoint is required" },
        { status: 400 }
      );
    }

    const result = await aiService().generateObject({
      schema: questionSchema,
      prompt: promptGenerateQuestions(front, grammarPoint),
      system: instructionGenerateQuestions,
    });

    const questions = result.questions.map((q, index) => ({
      id: `gen-${Date.now()}-${index}`,
      content: q.content,
      answers: [q.answer1, q.answer2, q.answer3, q.answer4] as [
        string,
        string,
        string,
        string,
      ],
      correctAnswer: q.correctAnswer as 0 | 1 | 2 | 3,
      memo: [q.memo1, q.memo2, q.memo3, q.memo4],
    }));

    return NextResponse.json({ questions });
  } catch (error) {
    console.error("Generate questions error:", error);
    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
}
