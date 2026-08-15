import { useRef } from "react";

const LONG_PRESS_DELAY_MS = 500;

// Phân biệt tap thường (onClick) và nhấn giữ (onLongPress) trên cùng 1 nút, dùng chung
// Pointer Events nên hoạt động cả chuột lẫn cảm ứng, không cần code riêng cho từng loại.
export function useLongPress(onLongPress: () => void, onClick: () => void) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const firedRef = useRef(false);

  const start = () => {
    firedRef.current = false;
    timerRef.current = setTimeout(() => {
      firedRef.current = true;
      onLongPress();
    }, LONG_PRESS_DELAY_MS);
  };

  const clear = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return {
    onPointerDown: start,
    onPointerUp: clear,
    onPointerLeave: clear,
    onClick: () => {
      if (!firedRef.current) {
        onClick();
      }
    },
  };
}
