"use client";

import { UpdateContentLink } from "@/shared/component/update-content-link";
import { usePathname } from "next/navigation";

export function GrammarEditButton() {
    const pathname = usePathname();
    const pathParts = pathname.split("/").filter(Boolean);

    // Tìm "page1", "page2", etc. trong path như /grammar/n1/page1/flash-card
    const pageMatch = pathParts.find(part => part.match(/^page\d+$/));

    if (!pageMatch) {
        return null;
    }

    const href = `/update-content?kind=grammar&slug=${encodeURIComponent(pageMatch)}`;

    return <UpdateContentLink href={href} />;
}
