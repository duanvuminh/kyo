"use server";

import { createWordsContent } from "@/shared/service/dictionary";
import { BaseItem } from "@/shared/type/models/word";

export async function saveWordContent(item: BaseItem) {
  await createWordsContent(item);
}
