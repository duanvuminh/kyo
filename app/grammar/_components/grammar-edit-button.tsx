"use client";

import { UpdateContentLink } from "@/lib/components/update-content-link";
import { usePathname } from "next/navigation";

export function GrammarEditButton() {
    const pathname = usePathname();
    const pathParts = pathname.split("/").filter(Boolean);

    // Tìm "page1", "page2", etc. trong path như /grammar/n1/page1/flash-card
    const pageMatch = pathParts.find(part => part.match(/^page\d+$/));

    if (!pageMatch) {
        return null;
    }

    // Ở trang flash-card: flash-card.tsx đã tự có link sửa đúng 1 thẻ đang xem, nên ẩn nút này.
    if (pathParts.at(-1) === "flash-card") {
        return null;
    }

    const href = `/update-content?kind=grammar-page&slug=${encodeURIComponent(pageMatch)}`;

    return <UpdateContentLink href={href} />;
}
