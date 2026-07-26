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

export const mangaImageSchema = z.object({
  url: z.string().min(1),
  width: z.number().positive(),
  height: z.number().positive(),
});

export const createMangaSchema = z.object({
  title: z.string().trim().min(1),
  images: z.array(mangaImageSchema).min(1),
});

export type CreateMangaInput = z.infer<typeof createMangaSchema>;

export const uploadMangaImageSchema = z.object({
  base64: z.string().min(1),
});

export type UploadMangaImageInput = z.infer<typeof uploadMangaImageSchema>;
