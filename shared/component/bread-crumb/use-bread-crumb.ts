"use client";

import { usePathname } from "next/navigation";

export function useBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, idx) => {
    return {
      label: decodeURIComponent(
        segment.charAt(0).toUpperCase() + segment.slice(1)
      ),
      href: _handleSegments(segments, segment, idx),
    };
  });

  return breadcrumbs;
}

function _handleSegments(segments: string[], segment: string, idx: number) {
  switch (segment) {
    case "huusennarare":
    case "practice":
      return undefined;
    case "short":
      return "/" + segments.slice(0, idx).join("/") + "short/newest";
    case "video":
      return "/" + segments.slice(0, idx).join("/") + "video/random";
    case "manga":
      return "/" + segments.slice(0, idx).join("/") + "manga/newest";
    default:
      return "/" + segments.slice(0, idx + 1).join("/");
  }
}
