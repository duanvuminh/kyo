"use server";

import { wrapPageContent } from "@/app/update-content/_lib/page-wrapper.service";
import { sourceToSection } from "@/lib/content-section";
import { checkAuthenticated } from "@/lib/auth";
import { updateWordsContent } from "@/lib/services/dictionary.service";
import { updateCardsFileViaGithub, updatePageFileViaGithub } from "@/lib/services/github.service";
import { ActionState, AppError, ErrorCode, Source } from "@/lib/types";
import { z } from "zod";

function parseItem<T extends z.ZodType>(schema: T, formData: FormData): z.infer<T> | null {
    const raw = formData.get("item");
    if (typeof raw !== "string") {
        return null;
    }
    try {
        const parsed = schema.safeParse(JSON.parse(raw));
        return parsed.success ? parsed.data : null;
    } catch {
        return null;
    }
}

const contentItemSchema = z.object({
    source: z.enum(Source),
    documentId: z.string().min(1),
    words: z.string().min(1),
    content: z.string().optional(),
});

const fileItemSchema = z
    .object({
        source: z.enum(Source),
        documentId: z.string().min(1),
        content: z.string().min(1),
    })
    .refine((item) => sourceToSection(item.source) !== null, { message: "invalid source" });

export async function submitUpdateContent(
    _prevState: ActionState,
    formData: FormData
): Promise<ActionState> {
    const isAuth = await checkAuthenticated();
    if (!isAuth) {
        return { message: new AppError(ErrorCode.UNAUTHENTICATED).message };
    }

    const item = parseItem(contentItemSchema, formData);
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

    const item = parseItem(fileItemSchema, formData);
    if (!item) {
        return { message: new AppError(ErrorCode.VALIDATION).message };
    }

    try {
        const section = sourceToSection(item.source)!;
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

    const item = parseItem(fileItemSchema, formData);
    if (!item) {
        return { message: new AppError(ErrorCode.VALIDATION).message };
    }

    try {
        const section = sourceToSection(item.source)!;
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
