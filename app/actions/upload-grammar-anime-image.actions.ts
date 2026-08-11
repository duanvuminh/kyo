"use server";

import {
  uploadGrammarAnimeImageSchema,
  type UploadGrammarAnimeImageInput,
} from "@/app/grammar/anime/_lib/grammar-anime.schema";
import { uploadGrammarAnimeImage } from "@/app/grammar/anime/_lib/grammar-anime.repository";
import { checkAuthenticated } from "@/lib/auth";
import { AppError, ErrorCode } from "@/lib/types";

export async function uploadGrammarAnimeImageAction(
  input: UploadGrammarAnimeImageInput
): Promise<string> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    throw new AppError(ErrorCode.UNAUTHENTICATED);
  }

  const parsed = uploadGrammarAnimeImageSchema.safeParse(input);
  if (!parsed.success) {
    throw new AppError(ErrorCode.VALIDATION);
  }

  return uploadGrammarAnimeImage(parsed.data.base64);
}
