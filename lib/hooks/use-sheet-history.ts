import { useCallback, useEffect, useRef } from "react";

export function useSheetHistory(open: boolean, onClose: () => void) {
  const historyPushed = useRef(false);

  useEffect(() => {
    if (!open) {
      historyPushed.current = false;
      return;
    }

    window.history.pushState({ sheet: true }, "");
    historyPushed.current = true;

    const handlePopState = () => {
      historyPushed.current = false;
      onClose();
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [open, onClose]);

  const cleanupHistory = useCallback(() => {
    if (historyPushed.current && window.history.state?.sheet) {
      window.history.back();
      historyPushed.current = false;
    }
  }, []);

  return { cleanupHistory };
}
