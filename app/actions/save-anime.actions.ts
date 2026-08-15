"use server";

import { saveAnime } from "@/lib/repositories/anime.repository";
import { checkAuthenticated } from "@/lib/auth";
import { CONTENT_SECTIONS } from "@/lib/content-section";
import { ActionState, Anime, AppError, ErrorCode } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const animeImageSchema = z.object({
  url: z.string().min(1),
  width: z.number().positive(),
  height: z.number().positive(),
});

const saveAnimeSchema = z.object({
  section: z.enum(CONTENT_SECTIONS),
  level: z.string().trim().min(1),
  page: z.string().trim().min(1),
  title: z.string().trim().min(1),
  images: z.array(animeImageSchema).min(1),
});

export type SaveAnimeInput = z.infer<typeof saveAnimeSchema>;

export async function saveAnimeAction(
  _prevState: ActionState<Anime>,
  input: SaveAnimeInput
): Promise<ActionState<Anime>> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    return { message: new AppError(ErrorCode.UNAUTHENTICATED).message };
  }

  const parsed = saveAnimeSchema.safeParse(input);
  if (!parsed.success) {
    return { message: new AppError(ErrorCode.VALIDATION).message };
  }

  const { section, ...rest } = parsed.data;
  const saved = await saveAnime(section, rest);
  revalidatePath(`/${section}/anime/${parsed.data.level}/${parsed.data.page}`);
  return { data: saved };
}
