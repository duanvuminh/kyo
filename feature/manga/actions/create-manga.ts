"use server";

import { createNewManga, type CreatedManga } from "@/feature/manga/service/manga";
import {
  createMangaSchema,
  type CreateMangaInput,
} from "@/feature/manga/schema/manga.schema";
import { checkAuthenticated } from "@/shared/service/auth";
import { AppError, ErrorCode } from "@/shared/type/models/error";

export async function createManga(
  input: CreateMangaInput
): Promise<CreatedManga> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    throw new AppError(ErrorCode.UNAUTHENTICATED);
  }

  const parsed = createMangaSchema.safeParse(input);
  if (!parsed.success) {
    throw new AppError(ErrorCode.VALIDATION);
  }

  return createNewManga(parsed.data);
}
