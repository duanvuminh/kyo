"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import type { ComponentProps } from "react";

// remarkGfm/remarkBreaks phải là function reference đồng bộ nên không thể lazy riêng như
// LazyMarkdown — gộp chung với react-markdown vào 1 module, để cả 2 cùng nằm trong chunk
// lazy-load chung (xem lib/components/lazy-markdown-gfm.tsx). remarkBreaks cần vì nội dung AI
// sinh ra (xem instructionKanji trong lib/services/ai/instructions.ts) dùng single \n giữa các
// dòng liên quan (Kun/On, ①/→...), không có blank line, nên cần biến soft break thành <br/>.
export default function MarkdownGfm(props: ComponentProps<typeof Markdown>) {
  return <Markdown {...props} remarkPlugins={[remarkGfm, remarkBreaks]} />;
}
