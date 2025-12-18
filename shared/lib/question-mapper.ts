import { Question } from "@/shared/types/models/question";
import { z } from "zod";

export const questionSchema = z.object({
  questions: z.array(
    z.object({
      content: z.string().describe("Câu tiếng Nhật với chỗ trống ___"),
      answer1: z.string().describe("Đáp án 1"),
      answer2: z.string().describe("Đáp án 2"),
      answer3: z.string().describe("Đáp án 3"),
      answer4: z.string().describe("Đáp án 4"),
      correctAnswer: z
        .number()
        .describe(
          "Index của đáp án đúng (0=answer1, 1=answer2, 2=answer3, 3=answer4)"
        ),
      memo1: z.string().describe("Giải thích cho đáp án 1"),
      memo2: z.string().describe("Giải thích cho đáp án 2"),
      memo3: z.string().describe("Giải thích cho đáp án 3"),
      memo4: z.string().describe("Giải thích cho đáp án 4"),
    })
  ),
});

export type GeneratedQuestion = z.infer<typeof questionSchema>["questions"][number];

export function mapToQuestions(generated: GeneratedQuestion[]): Question[] {
  return generated.map((q, index) => ({
    id: `gen-${Date.now()}-${index}`,
    content: q.content,
    answers: [q.answer1, q.answer2, q.answer3, q.answer4] as [string, string, string, string],
    correctAnswer: q.correctAnswer as 0 | 1 | 2 | 3,
    memo: [q.memo1, q.memo2, q.memo3, q.memo4],
  }));
}
