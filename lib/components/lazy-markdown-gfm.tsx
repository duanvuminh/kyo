"use client";

import dynamic from "next/dynamic";

export const LazyMarkdownGfm = dynamic(() => import("@/lib/components/markdown-gfm"), { ssr: false });
