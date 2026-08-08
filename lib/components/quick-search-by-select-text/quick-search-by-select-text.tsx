"use client";

import { Chat } from "@/lib/components/chat/chat";
import { MdxWrapperStyle } from "@/lib/components/mdx-wrapper-style";
import { useTextSelection } from "@/lib/components/quick-search-by-select-text/use-text-selection";
import { KSheet } from "@/lib/components/sheet";

export function QuickSearchBySelectText() {
  const { selectedText, open, onOpenChange } = useTextSelection();

  return (
    <KSheet
      open={open}
      onOpenChange={onOpenChange}
      title={selectedText || "Kyo"}
    >
      <MdxWrapperStyle>
        <Chat assistantText={selectedText} />
      </MdxWrapperStyle>
    </KSheet>
  );
}
