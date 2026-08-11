"use server";

import {
  saveGrammarAnimeSchema,
  type SaveGrammarAnimeInput,
} from "@/app/grammar/anime/_lib/grammar-anime.schema";
import { saveGrammarAnime } from "@/app/grammar/anime/_lib/grammar-anime.repository";
import type { GrammarAnime } from "@/app/grammar/anime/_lib/grammar-anime.types";
import { checkAuthenticated } from "@/lib/auth";
import { ActionState, AppError, ErrorCode } from "@/lib/types";
import { revalidatePath } from "next/cache";

export async function saveGrammarAnimeAction(
  _prevState: ActionState<GrammarAnime>,
  input: SaveGrammarAnimeInput
): Promise<ActionState<GrammarAnime>> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    return { message: new AppError(ErrorCode.UNAUTHENTICATED).message };
  }

  const parsed = saveGrammarAnimeSchema.safeParse(input);
  if (!parsed.success) {
    return { message: new AppError(ErrorCode.VALIDATION).message };
  }

  const saved = await saveGrammarAnime(parsed.data);
  revalidatePath(`/grammar/anime/${parsed.data.level}/${parsed.data.page}`);
  return { data: saved };
}
