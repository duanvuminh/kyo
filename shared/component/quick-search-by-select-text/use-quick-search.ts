// shared/hooks/use-quick-search.ts
import { useClipboard } from "@/shared/component/quick-search-by-select-text/use-clipboard";
import { useTextSelection } from "@/shared/component/quick-search-by-select-text/use-text-selection";
import { useCallback, useState } from "react";

export function useQuickSearch() {
  const [open, setOpen] = useState(false);
  const { selectedText, clearSelection, setSelectedText } = useTextSelection();
  const { copyToClipboard } = useClipboard();

  const handleTextSelect = useCallback(
    async (text: string) => {
      if (open) return;

      if (text && text !== selectedText) {
        setSelectedText(text);
        setOpen(true);
        await copyToClipboard(text);
      }
    },
    [open, selectedText, setSelectedText, copyToClipboard]
  );

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      setOpen(newOpen);
      if (!newOpen) {
        clearSelection();
      }
    },
    [clearSelection]
  );

  // Auto-trigger khi có text selection
  const { selectedText: currentSelection } = useTextSelection();
  useCallback(() => {
    if (currentSelection) {
      handleTextSelect(currentSelection);
    }
  }, [currentSelection, handleTextSelect])();

  return {
    open,
    selectedText,
    handleOpenChange,
  };
}
