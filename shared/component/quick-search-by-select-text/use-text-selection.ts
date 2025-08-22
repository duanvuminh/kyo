import { useCallback, useEffect, useState } from "react";

export function useTextSelection() {
  const [selectedText, setSelectedText] = useState<string>("");

  const handleMouseUp = useCallback(async () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const text = selection.toString().trim();
    const range = selection.getRangeAt(0);

    if (text && text.length > 1 && !range.collapsed) {
      setSelectedText(text);
      return text;
    }
    return null;
  }, []);

  const clearSelection = useCallback(() => {
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
    setSelectedText("");
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  return {
    selectedText,
    clearSelection,
    setSelectedText,
  };
}
