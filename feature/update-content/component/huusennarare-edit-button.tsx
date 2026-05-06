"use client";

import { UpdateContentLink } from "@/shared/component/update-content-link";
import { usePathname } from "next/navigation";

export function HuusennarareEditButton() {
    const pathname = usePathname();
    const slug = pathname
        .split("/")
        .filter(Boolean)
        .at(-1);

    if (!slug || slug === "huusennarare") {
        return null;
    }

    const href = `/update-content?kind=huusennarare&slug=${encodeURIComponent(slug)}`;

    return (
        <UpdateContentLink href={href} />
    );
}
