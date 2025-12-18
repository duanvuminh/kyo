import { useCallback, useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

/**
 * Detect text selection và trả về position để hiển thị menu
 */
export function useSelectionDetect(enabled: boolean) {
  const [selectedText, setSelectedText] = useState("");
  const [menuPos, setMenuPos] = useState<Position | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleSelect = () => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();

      if (!text || !selection || selection.rangeCount === 0) {
        setMenuPos(null);
        return;
      }

      const rect = selection.getRangeAt(0).getBoundingClientRect();
      const pos =
        rect.width === 0 || rect.height === 0
          ? { x: window.innerWidth / 2 - 24, y: window.innerHeight / 2 }
          : { x: rect.left, y: rect.bottom };

      setMenuPos(pos);
      setSelectedText(text);
    };

    document.addEventListener("mouseup", handleSelect);
    document.addEventListener("touchend", handleSelect);

    return () => {
      document.removeEventListener("mouseup", handleSelect);
      document.removeEventListener("touchend", handleSelect);
    };
  }, [enabled]);

  const clearSelection = useCallback(() => {
    setMenuPos(null);
    setSelectedText("");
  }, []);

  return { selectedText, menuPos, clearSelection };
}
