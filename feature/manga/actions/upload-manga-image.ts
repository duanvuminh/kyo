"use server";

import { uploadMangaImage } from "@/feature/manga/service/manga";
import {
  uploadMangaImageSchema,
  type UploadMangaImageInput,
} from "@/feature/manga/schema/manga.schema";
import { checkAuthenticated } from "@/shared/service/auth";
import { AppError, ErrorCode } from "@/shared/type/models/error";

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
