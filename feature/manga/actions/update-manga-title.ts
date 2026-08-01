"use server";

import { updateMangaTitle } from "@/feature/manga/service/manga";
import {
  updateMangaTitleSchema,
  type UpdateMangaTitleInput,
} from "@/feature/manga/schema/manga.schema";
import { checkAuthenticated } from "@/shared/service/auth";
import { AppError, ErrorCode } from "@/shared/type/models/error";

export async function updateMangaTitleAction(
  input: UpdateMangaTitleInput
): Promise<void> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    throw new AppError(ErrorCode.UNAUTHENTICATED);
  }

  const parsed = updateMangaTitleSchema.safeParse(input);
  if (!parsed.success) {
    throw new AppError(ErrorCode.VALIDATION);
  }

  const updated = await updateMangaTitle(parsed.data.entryId, parsed.data.title);
  if (!updated) {
    throw new AppError(ErrorCode.SLACK);
  }
}
