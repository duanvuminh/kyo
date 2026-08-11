import { z } from "zod";

export const uploadGrammarAnimeImageSchema = z.object({
  base64: z.string().min(1),
});

export type UploadGrammarAnimeImageInput = z.infer<typeof uploadGrammarAnimeImageSchema>;

export const grammarAnimeImageSchema = z.object({
  url: z.string().min(1),
  width: z.number().positive(),
  height: z.number().positive(),
});

export const saveGrammarAnimeSchema = z.object({
  level: z.string().trim().min(1),
  page: z.string().trim().min(1),
  title: z.string().trim().min(1),
  images: z.array(grammarAnimeImageSchema).min(1),
});

export type SaveGrammarAnimeInput = z.infer<typeof saveGrammarAnimeSchema>;
