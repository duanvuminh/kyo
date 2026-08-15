"use server";

import { wrapPageContent } from "@/app/update-content/_lib/page-wrapper.service";
import { sourceToSection } from "@/lib/content-section";
import { checkAuthenticated } from "@/lib/auth";
import { updateWordsContent } from "@/lib/services/dictionary.service";
import { updateCardsFileViaGithub, updatePageFileViaGithub } from "@/lib/services/github.service";
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

export async function submitUpdateCards(
    _prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const isAuth = await checkAuthenticated();
    if (!isAuth) {
        return { message: new AppError(ErrorCode.UNAUTHENTICATED).message };
    }

    const item = parseItemJson(formData.get("item"));
    const section = item ? sourceToSection(item.source) : null;
    if (!item?.documentId || !item?.content || !section) {
        return { message: new AppError(ErrorCode.VALIDATION).message };
    }

    try {
        await updateCardsFileViaGithub(section, "n1", item.documentId, item.content);
    } catch (error) {
        throw new AppError(ErrorCode.GITHUB, { cause: error as Error });
    }

    return { data: undefined };
}

export async function submitUpdatePage(
    _prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const isAuth = await checkAuthenticated();
    if (!isAuth) {
        return { message: new AppError(ErrorCode.UNAUTHENTICATED).message };
    }

    const item = parseItemJson(formData.get("item"));
    const section = item ? sourceToSection(item.source) : null;
    if (!item?.documentId || !item?.content || !section) {
        return { message: new AppError(ErrorCode.VALIDATION).message };
    }

    try {
        await updatePageFileViaGithub(
            section,
            "n1",
            item.documentId,
            wrapPageContent(section, "n1", item.documentId, item.content)
        );
    } catch (error) {
        throw new AppError(ErrorCode.GITHUB, { cause: error as Error });
    }

    return { data: undefined };
}
