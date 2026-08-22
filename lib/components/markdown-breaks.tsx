"use client";

import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import type { ComponentProps } from "react";

// remarkBreaks phải là function reference đồng bộ nên không thể lazy riêng như LazyMarkdown —
// gộp chung với react-markdown vào 1 module, để cả 2 cùng nằm trong chunk lazy-load chung
// (xem lib/components/lazy-markdown.tsx). Nội dung từ vựng/flashcard chỉ xuống dòng đơn (single \n),
// không có blank line giữa các câu, nên cần remark-breaks để hiển thị đúng thay vì gộp thành 1 dòng.
export default function MarkdownBreaks(props: ComponentProps<typeof Markdown>) {
  return <Markdown {...props} remarkPlugins={[remarkBreaks]} />;
}
