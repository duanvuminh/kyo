"use server";

import { parseCardText } from "@/feature/update-content/mapper/cards-parser";
import type { EditableCard } from "@/feature/update-content/types/cards";
import { checkAuthenticated } from "@/shared/service/auth";
import { AppError, ErrorCode } from "@/shared/type/models/error";

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
