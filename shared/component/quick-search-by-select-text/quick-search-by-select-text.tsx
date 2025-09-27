"use client";

import { Chat } from "@/feature/chat/component/chat/chat";
import { MdxWrapperStyle } from "@/shared/component/mdx-wrapper-style";
import { useTextSelection } from "@/shared/component/quick-search-by-select-text/use-text-selection";
import { KSheet } from "@/shared/component/sheet";
import { Search } from "lucide-react";

export function QuickSearchBySelectText() {
  const { selectedText, menuPos, open, handleMenuClick, onOpenChange } =
    useTextSelection();

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
        onOpenChange={onOpenChange}
        title={selectedText || "Kyo"}
      >
        <MdxWrapperStyle>
          <Chat assistantText={selectedText} />
        </MdxWrapperStyle>
      </KSheet>
    </>
  );
}
