"use client";

import { MdxWrapperStyle } from "@/component/mdx-wrapper-style";
import { KSheet } from "@/component/sheet";
import { Chat } from "@/feature/chat/component/chat/chat";
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
        <Chat assistantText={selectedText} />
      </MdxWrapperStyle>
    </KSheet>
  );
}
