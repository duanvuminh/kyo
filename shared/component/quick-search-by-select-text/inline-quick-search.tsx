"use client";

import { Chat } from "@/feature/chat/component/chat/chat";
import { MdxWrapperStyle } from "@/shared/component/mdx-wrapper-style";
import { useTextSelection } from "@/shared/component/quick-search-by-select-text/use-text-selection";
import { Button } from "@/shared/component/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/component/ui/sheet";
import { Search } from "lucide-react";

interface InlineQuickSearchProps {
  hideButton?: boolean;
}

export function InlineQuickSearch({ hideButton = false }: InlineQuickSearchProps) {
  const { selectedText, menuPos, open, handleMenuClick, onOpenChange } = useTextSelection();

  return (
    <>
      {menuPos && (
        <div
          className="fixed"
          style={{ left: menuPos.x, top: menuPos.y + 8 }}
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleMenuClick}
        >
          <Search />
        </div>
      )}

      <Sheet open={open} onOpenChange={onOpenChange}>
        {!hideButton && (
          <SheetTrigger asChild>
            <Button type="button" variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </SheetTrigger>
        )}
        <SheetContent side="bottom" className="h-dvh overflow-auto">
          <SheetDescription />
          <SheetHeader>
            <SheetTitle>{selectedText || "Kyo"}</SheetTitle>
          </SheetHeader>
          <MdxWrapperStyle>
            <Chat assistantText={selectedText} />
          </MdxWrapperStyle>
        </SheetContent>
      </Sheet>
    </>
  );
}
