import { useSelectionDetect } from "@/shared/component/quick-search-by-select-text/use-selection-detect";
import { useSheetHistory } from "@/shared/hooks/use-sheet-history";
import { useCallback, useState } from "react";

/**
 * Hook chính - kết hợp selection detect + sheet history
 */
export function useTextSelection() {
  const [open, setOpen] = useState(false);
  const [savedText, setSavedText] = useState("");

  const { selectedText, menuPos, clearSelection } = useSelectionDetect(!open);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSavedText("");
    clearSelection();
  }, [clearSelection]);

  const { cleanupHistory } = useSheetHistory(open, handleClose);

  const handleMenuClick = useCallback(() => {
    setSavedText(selectedText);
    setOpen(true);
    clearSelection();
  }, [selectedText, clearSelection]);

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (!newOpen) {
        cleanupHistory();
        handleClose();
      } else {
        setOpen(true);
      }
    },
    [cleanupHistory, handleClose]
  );

  return {
    selectedText: open ? savedText : selectedText,
    menuPos,
    open,
    handleMenuClick,
    onOpenChange: handleOpenChange,
  };
}
