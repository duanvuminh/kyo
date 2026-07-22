import { z } from "zod";

export const mangaAreaSchema = z.object({
  title: z.string().trim().min(1),
  x: z.number().nonnegative(),
  y: z.number().nonnegative(),
  width: z.number().positive(),
  height: z.number().positive(),
});

export const addClickableAreaSchema = z.object({
  threadId: z.string().min(1),
  messageId: z.string().min(1),
  index: z.number().int().nonnegative(),
  imageUrl: z.string().min(1),
  viewBoxWidth: z.number().positive(),
  viewBoxHeight: z.number().positive(),
  areas: z.array(mangaAreaSchema),
  newArea: mangaAreaSchema,
});

export type AddClickableAreaInput = z.infer<typeof addClickableAreaSchema>;
