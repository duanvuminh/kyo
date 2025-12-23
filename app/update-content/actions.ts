"use server";

import { checkAuthenticated } from "@/shared/service/auth";
import { updateWordsContent } from "@/shared/service/dictionary";
import { BaseItem } from "@/shared/types/models/word";

export async function submitUpdateContent(formData: FormData) {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    throw new Error("Unauthenticated");
  }

  const itemJson = formData.get("item");
  if (!itemJson || typeof itemJson !== "string") {
    throw new Error("Invalid form data");
  }

  const item: BaseItem = JSON.parse(itemJson);

  await updateWordsContent(item);
}
