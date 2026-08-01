"use server";

import { updateQuestion } from "@/feature/practice/service/practice";
import {
  updateQuestionSchema,
  type UpdateQuestionInput,
} from "@/feature/practice/schema/update-question.schema";
import { checkAuthenticated } from "@/shared/service/auth";
import { AppError, ErrorCode } from "@/shared/type/models/error";

export async function updateQuestionAction(
  input: UpdateQuestionInput
): Promise<void> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    throw new AppError(ErrorCode.UNAUTHENTICATED);
  }

  const parsed = updateQuestionSchema.safeParse(input);
  if (!parsed.success) {
    throw new AppError(ErrorCode.VALIDATION);
  }

  const updated = await updateQuestion(parsed.data);
  if (!updated) {
    throw new AppError(ErrorCode.DISCORD);
  }
}
