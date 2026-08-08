"use server";

import { parseCardText } from "@/app/update-content/_lib/update-content.service";
import type { EditableCard } from "@/app/update-content/_lib/update-content.types";
import { checkAuthenticated } from "@/lib/auth";
import { AppError, ErrorCode } from "@/lib/types";

export async function parseCardTextAction(text: string): Promise<EditableCard> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    throw new AppError(ErrorCode.UNAUTHENTICATED);
  }

  try {
    return parseCardText(text);
  } catch {
    throw new AppError(ErrorCode.VALIDATION);
  }
}
