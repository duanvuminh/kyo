"use server";

import { uploadMangaImage } from "@/app/manga/_lib/manga.service";
import {
  uploadMangaImageSchema,
  type UploadMangaImageInput,
} from "@/app/manga/_lib/manga.schema";
import { checkAuthenticated } from "@/lib/auth";
import { AppError, ErrorCode } from "@/lib/types";

export async function uploadMangaImageAction(
  input: UploadMangaImageInput
): Promise<string> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    throw new AppError(ErrorCode.UNAUTHENTICATED);
  }

  const parsed = uploadMangaImageSchema.safeParse(input);
  if (!parsed.success) {
    throw new AppError(ErrorCode.VALIDATION);
  }

  return uploadMangaImage(parsed.data.base64);
}
