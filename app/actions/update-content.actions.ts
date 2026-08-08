"use server";

import { checkAuthenticated } from "@/lib/auth";
import { updateWordsContent } from "@/lib/services/dictionary";
import { updateGrammarViaGithub } from "@/lib/services/github";
import { ActionState, AppError, ErrorCode, BaseItem } from "@/lib/types";

export async function submitUpdateContent(
    _prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const isAuth = await checkAuthenticated();
    if (!isAuth) {
        return { message: new AppError(ErrorCode.UNAUTHENTICATED).customMessage };
    }

    const itemJson = formData.get("item");
    if (!itemJson || typeof itemJson !== "string") {
        return { message: new AppError(ErrorCode.VALIDATION).customMessage };
    }

    const item: BaseItem = JSON.parse(itemJson);
    await updateWordsContent(item);
    return { data: undefined };
}

export async function submitUpdateGrammar(
    _prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const isAuth = await checkAuthenticated();
    if (!isAuth) {
        return { message: new AppError(ErrorCode.UNAUTHENTICATED).customMessage };
    }

    const itemJson = formData.get("item");
    if (!itemJson || typeof itemJson !== "string") {
        return { message: new AppError(ErrorCode.VALIDATION).customMessage };
    }

    const item: BaseItem = JSON.parse(itemJson);

    if (!item.documentId || !item.content) {
        return { message: new AppError(ErrorCode.VALIDATION).customMessage };
    }

    try {
        await updateGrammarViaGithub(item.documentId, item.content);
    } catch (error) {
        throw new AppError(ErrorCode.GITHUB, { cause: error as Error });
    }

    return { data: undefined };
}
