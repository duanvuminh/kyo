"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ComponentProps } from "react";

// remarkGfm phải là function reference đồng bộ nên không thể lazy riêng như LazyMarkdown —
// gộp chung với react-markdown vào 1 module, để cả 2 cùng nằm trong chunk lazy-load chung
// (xem lib/components/lazy-markdown-gfm.tsx).
export default function MarkdownGfm(props: ComponentProps<typeof Markdown>) {
  return <Markdown {...props} remarkPlugins={[remarkGfm]} />;
}
