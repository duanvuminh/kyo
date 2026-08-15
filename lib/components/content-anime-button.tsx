"use client";

import { isContentSection } from "@/lib/content-section";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ContentAnimeButton() {
    const pathname = usePathname();
    const pathParts = pathname.split("/").filter(Boolean);
    const section = pathParts[0];

    if (!isContentSection(section)) {
        return null;
    }

    // Trang anime version (/{section}/anime/...) tự nó đã là trang anime, không cần link lại chính nó.
    if (pathParts[1] === "anime") {
        return null;
    }

    // Tìm "page1", "page2", etc. trong path như /{section}/n1/page1/flash-card
    const pageMatch = pathParts.find(part => part.match(/^page\d+$/));

    if (!pageMatch) {
        return null;
    }

    if (pathParts.at(-1) === "flash-card") {
        return null;
    }

    const level = pathParts[1] ?? "n1";
    const href = `/${section}/anime/${level}/${pageMatch}`;

    return (
        <Link href={href} className="text-xs text-muted-foreground">
            Anime version
        </Link>
    );
}
