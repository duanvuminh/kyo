import { stripPageWrapper } from "@/app/update-content/_lib/page-wrapper.service";
import { sectionToSource, type ContentSection } from "@/lib/content-section";
import { BaseItem } from "@/lib/types";
import fs from "node:fs/promises";
import path from "node:path";

export async function getCardsEditItem(
    section: ContentSection,
    level: string,
    slugParam: string,
): Promise<BaseItem | null> {
    const slug = slugParam.trim();
    const tsPath = path.join(process.cwd(), "app", section, level, slug, "flash-card", "cards.ts");

    try {
        const content = await fs.readFile(tsPath, "utf8");

        return {
            source: sectionToSource(section),
            documentId: slug,
            words: slug,
            content,
        };
    } catch {
        return null;
    }
}

export async function getPageEditItem(
    section: ContentSection,
    level: string,
    slugParam: string,
): Promise<BaseItem | null> {
    const slug = slugParam.trim();
    const mdxPath = path.join(process.cwd(), "app", section, level, slug, "page.mdx");

    try {
        const content = await fs.readFile(mdxPath, "utf8");

        return {
            source: sectionToSource(section),
            documentId: slug,
            words: slug,
            content: stripPageWrapper(content),
        };
    } catch {
        return null;
    }
}
