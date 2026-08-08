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
    return { message: new AppError(ErrorCode.UNAUTHENTICATED).message };
  }

  const parsed = updateQuestionSchema.safeParse(input);
  if (!parsed.success) {
    return { message: new AppError(ErrorCode.VALIDATION).message };
  }

  await updateQuestion(parsed.data);

  return { data: true };
}
