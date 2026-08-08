import { useCallback, useEffect, useRef } from "react";

function getSelectionText() {
  return window.getSelection()?.toString().trim() ?? "";
}

function isPointInRect(x: number, y: number, rect: DOMRect) {
  return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
}

function useMouseSelectionTrigger(onOpen: (text: string) => void) {
  useEffect(() => {
    let selectionBeforeMouseDown = "";
    const handleMouseDown = () => { selectionBeforeMouseDown = getSelectionText(); };
    const handleDoubleClick = (e: MouseEvent) => {
      const text = getSelectionText();
      if (!text) { return; }
      e.preventDefault();
      onOpen(text);
    };
    const handleMouseUp = (e: MouseEvent) => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();
      if (!text || e.detail >= 2 || text !== selectionBeforeMouseDown) { return; }
      const rect = selection!.getRangeAt(0).getBoundingClientRect();
      if (isPointInRect(e.clientX, e.clientY, rect)) { onOpen(text); }
    };
    document.addEventListener("dblclick", handleDoubleClick);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("dblclick", handleDoubleClick);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [onOpen]);
}

function useTouchSelectionTrigger(onOpen: (text: string) => void) {
  useEffect(() => {
    let selectionBeforeTouch = "";
    const handleTouchStart = () => { selectionBeforeTouch = getSelectionText(); };
    const handleTouchEnd = (e: TouchEvent) => {
      setTimeout(() => {
        const selection = window.getSelection();
        const text = selection?.toString().trim();
        if (!text || selection!.rangeCount === 0 || text !== selectionBeforeTouch) { return; }
        const touch = e.changedTouches[0];
        const rect = selection!.getRangeAt(0).getBoundingClientRect();
        if (isPointInRect(touch.clientX, touch.clientY, rect)) { onOpen(text); }
      }, 300);
    };
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onOpen]);
}

export function useSelectionDetect(enabled: boolean) {
  const onOpenRef = useRef<((text: string) => void) | null>(null);
  const clearSelection = useCallback(() => {}, []);
  const onOpen = useCallback((text: string) => { onOpenRef.current?.(text); }, []);

  useMouseSelectionTrigger(enabled ? onOpen : () => {});
  useTouchSelectionTrigger(enabled ? onOpen : () => {});

  return { clearSelection, onOpenRef };
}
