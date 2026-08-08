"use server";

import { updateMangaTitle } from "@/app/manga/_lib/manga.service";
import {
  updateMangaTitleSchema,
  type UpdateMangaTitleInput,
} from "@/app/manga/_lib/manga.schema";
import { checkAuthenticated } from "@/lib/auth";
import { ActionState, AppError, ErrorCode } from "@/lib/types";

export async function updateMangaTitleAction(
  _prevState: ActionState<string>,
  input: UpdateMangaTitleInput
): Promise<ActionState<string>> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    return { message: new AppError(ErrorCode.UNAUTHENTICATED).customMessage };
  }

  const parsed = updateMangaTitleSchema.safeParse(input);
  if (!parsed.success) {
    return { message: new AppError(ErrorCode.VALIDATION).customMessage };
  }

  const updated = await updateMangaTitle(parsed.data.entryId, parsed.data.title);
  if (!updated) {
    throw new AppError(ErrorCode.SLACK);
  }

  return { data: parsed.data.title };
}
