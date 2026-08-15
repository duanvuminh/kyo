import { CONTENT_SECTIONS } from "@/lib/content-section";
import { z } from "zod";

export interface EditableQuestion {
  id: string;
  content: string;
  answers: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  memo: string[];
}

export interface EditableCard {
  front: string;
  back: string[];
  more: string[];
  questions: EditableQuestion[];
}

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

export const submitCardsSchema = z.object({
  section: z.enum(CONTENT_SECTIONS),
  documentId: z.string().min(1),
  cards: z.array(cardSchema).min(1),
});

export type SubmitCardsInput = z.infer<typeof submitCardsSchema>;
