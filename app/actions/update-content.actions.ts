"use server";

import { checkAuthenticated } from "@/lib/auth";
import { updateWordsContent } from "@/lib/services/dictionary.service";
import { updateGrammarPageViaGithub, updateGrammarViaGithub } from "@/lib/services/github.service";
import { ActionState, AppError, BaseItem, ErrorCode, KWordType, Source } from "@/lib/types";
import { z } from "zod";

const baseItemSchema = z.object({
    source: z.enum(Source),
    collection: z.string().optional(),
    documentId: z.string().min(1),
    words: z.string().min(1),
    content: z.string().optional(),
    type: z.enum(KWordType).optional(),
});

function parseItemJson(itemJson: FormDataEntryValue | null): BaseItem | null {
    if (typeof itemJson !== "string") {
        return null;
    }
    try {
        const parsed = baseItemSchema.safeParse(JSON.parse(itemJson));
        return parsed.success ? parsed.data : null;
    } catch {
        return null;
    }
}

export async function submitUpdateContent(
    _prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const isAuth = await checkAuthenticated();
    if (!isAuth) {
        return { message: new AppError(ErrorCode.UNAUTHENTICATED).message };
    }

    const item = parseItemJson(formData.get("item"));
    if (!item) {
        return { message: new AppError(ErrorCode.VALIDATION).message };
    }

    await updateWordsContent(item);
    return { data: undefined };
}

export async function submitUpdateGrammar(
    _prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const isAuth = await checkAuthenticated();
    if (!isAuth) {
        return { message: new AppError(ErrorCode.UNAUTHENTICATED).message };
    }

    const item = parseItemJson(formData.get("item"));
    if (!item?.documentId || !item?.content) {
        return { message: new AppError(ErrorCode.VALIDATION).message };
    }

    try {
        await updateGrammarViaGithub(item.documentId, item.content);
    } catch (error) {
        throw new AppError(ErrorCode.GITHUB, { cause: error as Error });
    }

    return { data: undefined };
}

export async function submitUpdateGrammarPage(
    _prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const isAuth = await checkAuthenticated();
    if (!isAuth) {
        return { message: new AppError(ErrorCode.UNAUTHENTICATED).message };
    }

    const item = parseItemJson(formData.get("item"));
    if (!item?.documentId || !item?.content) {
        return { message: new AppError(ErrorCode.VALIDATION).message };
    }

    try {
        await updateGrammarPageViaGithub(item.documentId, item.content);
    } catch (error) {
        throw new AppError(ErrorCode.GITHUB, { cause: error as Error });
    }

    return { data: undefined };
}
