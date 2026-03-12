import { useSelectionDetect } from "@/shared/component/quick-search-by-select-text/use-selection-detect";
import { useSheetHistory } from "@/shared/hooks/use-sheet-history";
import { useCallback, useEffect, useState } from "react";

/**
 * Hook chính - kết hợp selection detect + sheet history
 */
export function useTextSelection() {
  const [open, setOpen] = useState(false);
  const [savedText, setSavedText] = useState("");

  const { clearSelection, onOpenRef } = useSelectionDetect(!open);

  const handleClose = useCallback(() => {
    setOpen(false);
    setSavedText("");
    clearSelection();
  }, [clearSelection]);

  const { cleanupHistory } = useSheetHistory(open, handleClose);

  useEffect(() => {
    onOpenRef.current = (text: string) => {
      setSavedText(text);
      setOpen(true);
      clearSelection();
    };
  });

  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (!newOpen) {
        cleanupHistory();
        handleClose();
      } else {
        setOpen(true);
      }
    },
    [cleanupHistory, handleClose],
  );

  return {
    selectedText: savedText,
    open,
    onOpenChange: handleOpenChange,
  };
}
