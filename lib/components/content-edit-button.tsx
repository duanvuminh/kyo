"use client";

import { isContentSection } from "@/lib/content-section";
import { UpdateContentLink } from "@/lib/components/update-content-link";
import { usePathname } from "next/navigation";

export function ContentEditButton() {
    const pathname = usePathname();
    const pathParts = pathname.split("/").filter(Boolean);
    const section = pathParts[0];

    if (!isContentSection(section)) {
        return null;
    }

    // Trang anime version (/{section}/anime/...) có link "Sửa"/"Tạo mới" riêng, không cần nút này.
    if (pathParts[1] === "anime") {
        return null;
    }

    // Tìm "page1", "page2", etc. trong path như /{section}/n1/page1/flash-card
    const pageMatch = pathParts.find(part => part.match(/^page\d+$/));

    if (!pageMatch) {
        return null;
    }

    // Ở trang flash-card: flash-card.tsx đã tự có link sửa đúng 1 thẻ đang xem, nên ẩn nút này.
    if (pathParts.at(-1) === "flash-card") {
        return null;
    }

    const href = `/update-content?kind=page&section=${section}&slug=${encodeURIComponent(pageMatch)}`;

    return <UpdateContentLink href={href} />;
}
