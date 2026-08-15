"use server";

import { serializeCardsToSource } from "@/app/update-content/_lib/update-content.serialize";
import {
  submitCardsSchema,
  type SubmitCardsInput,
} from "@/app/update-content/_lib/update-content.types";
import { checkAuthenticated } from "@/lib/auth";
import { updateCardsFileViaGithub } from "@/lib/services/github.service";
import { ActionState, AppError, ErrorCode } from "@/lib/types";

export async function submitCardsAction(
  _prevState: ActionState<boolean>,
  input: SubmitCardsInput
): Promise<ActionState<boolean>> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    return { message: new AppError(ErrorCode.UNAUTHENTICATED).message };
  }

  const parsed = submitCardsSchema.safeParse(input);
  if (!parsed.success) {
    return { message: new AppError(ErrorCode.VALIDATION).message };
  }

  try {
    const content = serializeCardsToSource(parsed.data.cards);
    await updateCardsFileViaGithub(parsed.data.section, "n1", parsed.data.documentId, content);
  } catch (error) {
    throw new AppError(ErrorCode.GITHUB, { cause: error as Error });
  }

  return { data: true };
}
