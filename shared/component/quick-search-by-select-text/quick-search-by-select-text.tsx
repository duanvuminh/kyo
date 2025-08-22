"use client";

import { Chat } from "@/feature/chat/component/chat/chat";
import { MdxWrapperStyle } from "@/shared/component/mdx-wrapper-style";
import { KSheet } from "@/shared/component/sheet";
import { useCallback, useEffect, useState } from "react";

export function QuickSearchBySelectText() {
  const [selectedText, setSelectedText] = useState<string>("");
  const [open, setOpen] = useState(false);

  const handleMouseUp = useCallback(async () => {
    if (open) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const text = selection.toString().trim();

    if (text && text !== selectedText) {
      setSelectedText(text);
      setOpen(true);

      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(text);
        }
      } catch (error) {
        console.warn("Failed to copy to clipboard:", error);
      }
    }
  }, [open, selectedText]);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  const handleOpenChange = useCallback((newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
      }
      setSelectedText("");
    }
  }, []);

  return (
    <KSheet
      open={open}
      onOpenChange={handleOpenChange}
      title={selectedText || "Kyo"}
    >
      <MdxWrapperStyle>
        <Chat assistantText={selectedText} />
      </MdxWrapperStyle>
    </KSheet>
  );
}
