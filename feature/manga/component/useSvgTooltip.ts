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
    setTooltip({ text, x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return { tooltip, showTooltip, close: () => setTooltip(null) };
};
