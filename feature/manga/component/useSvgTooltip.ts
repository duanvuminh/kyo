"use client";

import { useState } from "react";

type Tooltip = { text: string; x: number; y: number };

export const useSvgTooltip = () => {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);

  const showTooltip = (
    e: React.MouseEvent<Element>,
    container: Element,
    text: string
  ) => {
    const rect = container.getBoundingClientRect();
    // Ô nhập title là input 1 dòng nên không gõ Enter thật được — cho phép gõ chuỗi "\n"
    // (backslash + n) như 1 quy ước xuống dòng, chỉ diễn giải lúc hiển thị, không đụng lúc lưu.
    const formatted = text.replace(/\\n/g, "\n");
    setTooltip({ text: formatted, x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return { tooltip, showTooltip, close: () => setTooltip(null) };
};
