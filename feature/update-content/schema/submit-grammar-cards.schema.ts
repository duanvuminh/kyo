import { z } from "zod";

const questionSchema = z.object({
  id: z.string(),
  content: z.string(),
  answers: z.tuple([z.string(), z.string(), z.string(), z.string()]),
  correctAnswer: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
  memo: z.array(z.string()),
});

const cardSchema = z.object({
  front: z.string().min(1),
  back: z.array(z.string()),
  more: z.array(z.string()),
  questions: z.array(questionSchema),
});

export const submitGrammarCardsSchema = z.object({
  documentId: z.string().min(1),
  cards: z.array(cardSchema).min(1),
});

export type SubmitGrammarCardsInput = z.infer<typeof submitGrammarCardsSchema>;
