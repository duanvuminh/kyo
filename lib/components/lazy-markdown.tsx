"use client";

import dynamic from "next/dynamic";

// react-markdown kéo theo cả engine parse markdown (micromark/mdast, khá nặng) — tách thành
// chunk riêng, chỉ tải khi thực sự render nội dung, thay vì nằm chung trong bundle ban đầu.
// Phải là component "use client" riêng vì next/dynamic({ssr:false}) không dùng được thẳng
// trong Server Component.
export const LazyMarkdown = dynamic(() => import("@/lib/components/markdown-breaks"), { ssr: false });
