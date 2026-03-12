"use client";

import { Chat } from "@/feature/chat/component/chat/chat";
import { MdxWrapperStyle } from "@/shared/component/mdx-wrapper-style";
import { useTextSelection } from "@/shared/component/quick-search-by-select-text/use-text-selection";
import { KSheet } from "@/shared/component/sheet";

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
