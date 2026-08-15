"use server";

import { uploadAnimeImage } from "@/lib/repositories/anime.repository";
import { checkAuthenticated } from "@/lib/auth";
import { CONTENT_SECTIONS } from "@/lib/content-section";
import { AppError, ErrorCode } from "@/lib/types";
import { z } from "zod";

const uploadAnimeImageSchema = z.object({
  section: z.enum(CONTENT_SECTIONS),
  base64: z.string().min(1),
});

export type UploadAnimeImageInput = z.infer<typeof uploadAnimeImageSchema>;

export async function uploadAnimeImageAction(input: UploadAnimeImageInput): Promise<string> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    throw new AppError(ErrorCode.UNAUTHENTICATED);
  }

  const parsed = uploadAnimeImageSchema.safeParse(input);
  if (!parsed.success) {
    throw new AppError(ErrorCode.VALIDATION);
  }

  return uploadAnimeImage(parsed.data.section, parsed.data.base64);
}
