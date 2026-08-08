"use server";

import { createWordsContent } from "@/lib/services/dictionary";
import { BaseItem } from "@/lib/types";

export async function saveWordContent(item: BaseItem) {
  await createWordsContent(item);
}
