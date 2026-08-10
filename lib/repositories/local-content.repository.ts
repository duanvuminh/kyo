import { BaseItem, Source } from "@/lib/types";
import fs from "node:fs/promises";
import path from "node:path";

export async function getGrammarEditItem(
    slugParam: string,
): Promise<BaseItem | null> {
    const slug = slugParam.trim();
    const tsPath = path.join(process.cwd(), "app", "grammar", "n1", slug, "flash-card", "cards.ts");

    try {
        const content = await fs.readFile(tsPath, "utf8");

        return {
            source: Source.GRAMMAR,
            documentId: slug,
            words: slug,
            content,
        };
    } catch {
        return null;
    }
}

export async function getGrammarPageEditItem(
    slugParam: string,
): Promise<BaseItem | null> {
    const slug = slugParam.trim();
    const mdxPath = path.join(process.cwd(), "app", "grammar", "n1", slug, "page.mdx");

    try {
        const content = await fs.readFile(mdxPath, "utf8");

        return {
            source: Source.GRAMMAR,
            documentId: slug,
            words: slug,
            content,
        };
    } catch {
        return null;
    }
}