"use server";

import { createNewManga, type CreatedManga } from "@/app/manga/_lib/manga.service";
import {
  createMangaSchema,
  type CreateMangaInput,
} from "@/app/manga/_lib/manga.schema";
import { checkAuthenticated } from "@/lib/auth";
import { ActionState, AppError, ErrorCode } from "@/lib/types";

export async function createManga(
  _prevState: ActionState<CreatedManga>,
  input: CreateMangaInput
): Promise<ActionState<CreatedManga>> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    return { message: new AppError(ErrorCode.UNAUTHENTICATED).customMessage };
  }

  const parsed = createMangaSchema.safeParse(input);
  if (!parsed.success) {
    return { message: new AppError(ErrorCode.VALIDATION).customMessage };
  }

  const created = await createNewManga(parsed.data);
  return { data: created };
}
