"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function GrammarAnimeButton() {
    const pathname = usePathname();
    const pathParts = pathname.split("/").filter(Boolean);

    // Trang anime version (/grammar/anime/...) tự nó đã là trang anime, không cần link lại chính nó.
    if (pathParts[1] === "anime") {
        return null;
    }

    // Tìm "page1", "page2", etc. trong path như /grammar/n1/page1/flash-card
    const pageMatch = pathParts.find(part => part.match(/^page\d+$/));

    if (!pageMatch) {
        return null;
    }

    if (pathParts.at(-1) === "flash-card") {
        return null;
    }

    const level = pathParts[1] ?? "n1";
    const href = `/grammar/anime/${level}/${pageMatch}`;

    return (
        <Link href={href} className="text-xs text-muted-foreground">
            Anime version
        </Link>
    );
}
