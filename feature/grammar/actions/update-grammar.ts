"use server";

import { updateGrammarViaGithub } from "@/shared/service/github";

export async function updateGrammarAction(slug: string, content: string) {
    if (!slug || !content) {
        throw new Error("Slug and content are required");
    }

    await updateGrammarViaGithub(slug, content);
}
