import { z } from "zod";

export const addClickableAreaSchema = z.object({
  threadId: z.string().min(1),
  messageId: z.string().min(1),
  index: z.number().int().nonnegative(),
  content: z.string().min(1),
  title: z.string().trim().min(1),
  x: z.number().nonnegative(),
  y: z.number().nonnegative(),
  width: z.number().positive(),
  height: z.number().positive(),
});

export type AddClickableAreaInput = z.infer<typeof addClickableAreaSchema>;
