"use server";

import { serializeCardsToSource } from "@/feature/update-content/mapper/cards-serializer";
import {
  submitGrammarCardsSchema,
  type SubmitGrammarCardsInput,
} from "@/feature/update-content/schema/submit-grammar-cards.schema";
import { checkAuthenticated } from "@/shared/service/auth";
import { updateGrammarViaGithub } from "@/shared/service/github";
import { AppError, ErrorCode } from "@/shared/type/models/error";

export async function submitGrammarCardsAction(input: SubmitGrammarCardsInput): Promise<void> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    throw new AppError(ErrorCode.UNAUTHENTICATED);
  }

  const parsed = submitGrammarCardsSchema.safeParse(input);
  if (!parsed.success) {
    throw new AppError(ErrorCode.VALIDATION);
  }

  try {
    const content = serializeCardsToSource(parsed.data.cards);
    await updateGrammarViaGithub(parsed.data.documentId, content);
  } catch (error) {
    throw new AppError(ErrorCode.GITHUB, { cause: error as Error });
  }
}
