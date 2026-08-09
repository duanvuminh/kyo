import { z } from "zod";

export enum PracticeCardMode {
  PRACTICE = "practice",
  WRITE = "write",
  READ = "read",
  FLASH_CARD = "flash",
  DEFAULT = "default",
}

export const MODE_MAP = {
  practice: PracticeCardMode.PRACTICE,
  flash: PracticeCardMode.FLASH_CARD,
  write: PracticeCardMode.WRITE,
  read: PracticeCardMode.READ,
  default: PracticeCardMode.DEFAULT,
} as const;

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
  memo: z.array(z.string()).optional(),
});

export type UpdateQuestionInput = z.infer<typeof updateQuestionSchema>;
