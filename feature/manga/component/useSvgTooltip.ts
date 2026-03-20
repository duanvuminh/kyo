"use client";

import { useState } from "react";

type Tooltip = { text: string; x: number; y: number };

export const useSvgTooltip = () => {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (e.target as Element).closest("a");
    if (!anchor) {
      setTooltip(null);
      return;
    }
    const title =
      anchor.getAttribute("xlink:title") ?? anchor.getAttribute("title");
    if (!title) {
      return;
    }
    e.preventDefault();
    setTooltip({ text: title, x: e.clientX, y: e.clientY });
  };

  return { tooltip, handleClick };
};
