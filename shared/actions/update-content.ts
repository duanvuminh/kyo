"use server";

import { checkAuthenticated } from "@/shared/service/auth";
import { updateWordsContent } from "@/shared/service/dictionary";
import { updateGrammarViaGithub } from "@/shared/service/github";
import { AppError, ErrorCode } from "@/shared/type/models/error";
import { BaseItem } from "@/shared/type/models/word";

export async function submitUpdateContent(formData: FormData) {
    const isAuth = await checkAuthenticated();
    if (!isAuth) {
        throw new AppError(ErrorCode.UNAUTHENTICATED);
    }

    const itemJson = formData.get("item");
    if (!itemJson || typeof itemJson !== "string") {
        throw new AppError(ErrorCode.VALIDATION);
    }

    const item: BaseItem = JSON.parse(itemJson);
    await updateWordsContent(item);
}

export async function submitUpdateGrammar(formData: FormData) {
    const isAuth = await checkAuthenticated();
    if (!isAuth) {
        throw new AppError(ErrorCode.UNAUTHENTICATED);
    }

    const itemJson = formData.get("item");
    if (!itemJson || typeof itemJson !== "string") {
        throw new AppError(ErrorCode.VALIDATION);
    }

    const item: BaseItem = JSON.parse(itemJson);

    if (!item.documentId || !item.content) {
        throw new AppError(ErrorCode.VALIDATION);
    }

    try {
        await updateGrammarViaGithub(item.documentId, item.content);
    } catch (error) {
        throw new AppError(ErrorCode.GITHUB, { cause: error as Error });
    }
}
