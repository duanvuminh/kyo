"use server";

import { serializeCardsToSource } from "@/app/update-content/_lib/update-content.service";
import {
  submitGrammarCardsSchema,
  type SubmitGrammarCardsInput,
} from "@/app/update-content/_lib/update-content.types";
import { checkAuthenticated } from "@/lib/auth";
import { updateGrammarViaGithub } from "@/lib/services/github.service";
import { ActionState, AppError, ErrorCode } from "@/lib/types";

export async function submitGrammarCardsAction(
  _prevState: ActionState<boolean>,
  input: SubmitGrammarCardsInput
): Promise<ActionState<boolean>> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    return { message: new AppError(ErrorCode.UNAUTHENTICATED).message };
  }

  const parsed = submitGrammarCardsSchema.safeParse(input);
  if (!parsed.success) {
    return { message: new AppError(ErrorCode.VALIDATION).message };
  }

  try {
    const content = serializeCardsToSource(parsed.data.cards);
    await updateGrammarViaGithub(parsed.data.documentId, content);
  } catch (error) {
    throw new AppError(ErrorCode.GITHUB, { cause: error as Error });
  }

  return { data: true };
}
