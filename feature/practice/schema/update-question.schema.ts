import { z } from "zod";

export const updateQuestionSchema = z.object({
  threadId: z.string().min(1),
  messageId: z.string().min(1),
  content: z.string().trim().min(1),
  answers: z.tuple([
    z.string().trim().min(1),
    z.string().trim().min(1),
    z.string().trim().min(1),
    z.string().trim().min(1),
  ]),
  correctAnswer: z.number().int().min(0).max(3),
  yomi: z.string().trim().optional(),
});

export type UpdateQuestionInput = z.infer<typeof updateQuestionSchema>;
