"use server";

import { checkAuthenticated } from "@/shared/service/auth";
import { updateWordsContent } from "@/shared/service/dictionary";
import { AppError, ErrorCode } from "@/shared/types/models/error";
import { BaseItem } from "@/shared/types/models/word";

export async function submitUpdateContent(formData: FormData) {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    throw new AppError(ErrorCode.UNAUTHENTICATED);
  }

  const itemJson = formData.get("item");
  if (!itemJson || typeof itemJson !== "string") {
    throw new AppError(ErrorCode.VALIDATION);
  }

  const item: BaseItem = JSON.parse(itemJson);

  updateWordsContent(item);
}
