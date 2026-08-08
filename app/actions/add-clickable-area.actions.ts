"use server";

import {
  addClickableAreaToPanel,
  type UpdatedPanel,
} from "@/app/manga/_lib/manga.service";
import {
  addClickableAreaSchema,
  type AddClickableAreaInput,
} from "@/app/manga/_lib/manga.schema";
import { checkAuthenticated } from "@/lib/auth";
import { ActionState, AppError, ErrorCode } from "@/lib/types";

export async function addClickableArea(
  _prevState: ActionState<UpdatedPanel>,
  input: AddClickableAreaInput
): Promise<ActionState<UpdatedPanel>> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    return { message: new AppError(ErrorCode.UNAUTHENTICATED).customMessage };
  }

  const parsed = addClickableAreaSchema.safeParse(input);
  if (!parsed.success) {
    return { message: new AppError(ErrorCode.VALIDATION).customMessage };
  }

  const updated = await addClickableAreaToPanel(parsed.data);
  return { data: updated };
}
