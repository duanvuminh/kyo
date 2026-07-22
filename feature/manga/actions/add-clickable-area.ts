"use server";

import {
  addClickableAreaToPanel,
  type UpdatedPanel,
} from "@/feature/manga/service/manga";
import {
  addClickableAreaSchema,
  type AddClickableAreaInput,
} from "@/feature/manga/schema/manga.schema";
import { checkAuthenticated } from "@/shared/service/auth";
import { AppError, ErrorCode } from "@/shared/type/models/error";

export async function addClickableArea(
  input: AddClickableAreaInput
): Promise<UpdatedPanel> {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    throw new AppError(ErrorCode.UNAUTHENTICATED);
  }

  const parsed = addClickableAreaSchema.safeParse(input);
  if (!parsed.success) {
    throw new AppError(ErrorCode.VALIDATION);
  }

  return addClickableAreaToPanel(parsed.data);
}
