import { useEffect, useState } from "react";

export function useTextSelection() {
  const [selectedText, setSelectedText] = useState("");
  const [menuPos, setMenuPos] = useState<{ x: number; y: number } | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleSelect = () => {
      if (open) return;
      const selection = window.getSelection();
      const text = selection?.toString().trim();
      if (text && selection && selection.rangeCount > 0) {
        const rect = selection.getRangeAt(0).getBoundingClientRect();
        if (
          (rect.width === 0 || rect.height === 0) &&
          window.innerWidth < 768
        ) {
          setMenuPos({
            x: window.innerWidth / 2 - 24,
            y: window.innerHeight / 2,
          });
        } else {
          setMenuPos({
            x: rect.left + window.scrollX,
            y: rect.bottom + window.scrollY,
          });
        }
        setSelectedText(text);
      } else {
        setMenuPos(null);
      }
    };
    document.addEventListener("mouseup", handleSelect);
    document.addEventListener("touchend", handleSelect);
    return () => {
      document.removeEventListener("mouseup", handleSelect);
      document.removeEventListener("touchend", handleSelect);
    };
  }, [open]);

  const handleMenuClick = () => {
    setOpen(true);
    setMenuPos(null);
  };

  const onOpenChange = () => {
    setOpen(!open);
    setSelectedText("");
  };

  return {
    selectedText,
    menuPos,
    open,
    handleMenuClick,
    onOpenChange,
  };
}
