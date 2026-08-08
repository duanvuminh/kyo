"use server";

import { updateQuestion } from "@/app/practice/_lib/practice.service";
import {
  updateQuestionSchema,
  type UpdateQuestionInput,
} from "@/app/practice/_lib/practice.types";
import { checkAuthenticated } from "@/lib/auth";
import { ActionState, AppError, ErrorCode } from "@/lib/types";

export async function updateQuestionAction(
  _prevState: ActionState<boolean>,
  input: UpdateQuestionInput
): Promise<ActionState<boolean>> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    return { message: new AppError(ErrorCode.UNAUTHENTICATED).customMessage };
  }

  const parsed = updateQuestionSchema.safeParse(input);
  if (!parsed.success) {
    return { message: new AppError(ErrorCode.VALIDATION).customMessage };
  }

  const updated = await updateQuestion(parsed.data);
  if (!updated) {
    throw new AppError(ErrorCode.DISCORD);
  }

  return { data: true };
}
