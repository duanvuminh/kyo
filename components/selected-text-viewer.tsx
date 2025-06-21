"use client";

import { KSheet } from "@/components/chat-sheet";
import { ChatWidget } from "@/components/chat-widget";
import { MdxWrapperStyle } from "@/components/mdx-wrapper-style";
import { useEffect, useState } from "react";

export function SelectedTextViewer() {
  const [selectedText, setSelectedText] = useState<string | undefined>(
    undefined
  );
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleMouseUp = async () => {
      if (open) return;
      const selection = window.getSelection();
      if (selection) {
        const text = selection.toString().trim();
        setSelectedText(text);
        navigator.clipboard.writeText(text);
        setOpen(text != "");
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [open, selectedText]);

  return (
    <KSheet
      open={open}
      onOpenChange={setOpen}
      title={selectedText ? selectedText : "Kyo"}
    >
      <MdxWrapperStyle>
        <ChatWidget assistantText={selectedText} />
      </MdxWrapperStyle>
    </KSheet>
  );
}
