"use client";

import { Chat } from "@/feature/chat/component/chat/chat";
import { MdxWrapperStyle } from "@/shared/component/mdx-wrapper-style";
import { KSheet } from "@/shared/component/sheet";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export function QuickSearchBySelectText() {
  const [selectedText, setSelectedText] = useState("");
  const [menuPos, setMenuPos] = useState<{ x: number; y: number } | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => {
      if (open) return;
      const selection = window.getSelection();
      const text = selection?.toString().trim();
      if (text && selection) {
        const rect = selection.getRangeAt(0).getBoundingClientRect();
        setSelectedText(text);
        setMenuPos({
          x: rect.left + window.scrollX,
          y: rect.bottom + window.scrollY,
        });
      } else {
        setMenuPos(null);
      }
    };
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [open]);

  const handleMenuClick = () => {
    setOpen(true);
    setMenuPos(null);
  };

  const handleSheetClose = () => {
    setOpen(false);
    setSelectedText("");
  };

  return (
    <>
      {menuPos && (
        <div
          className="fixed z-[9999]"
          style={{ left: menuPos.x, top: menuPos.y + 8 }}
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleMenuClick}
        >
          <Search />
        </div>
      )}

      <KSheet
        open={open}
        onOpenChange={handleSheetClose}
        title={selectedText || "Kyo"}
      >
        <MdxWrapperStyle>
          <Chat assistantText={selectedText} />
        </MdxWrapperStyle>
      </KSheet>
    </>
  );
}
