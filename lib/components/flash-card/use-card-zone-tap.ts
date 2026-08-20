import { useRef, type PointerEvent } from "react";

const EDGE_ZONE_PX = 40;
// Ngón tay hơi rê nhẹ vẫn tính là tap; rê nhiều hơn (đang cuộn trang) thì bỏ qua toàn bộ,
// tránh trường hợp cuộn trang xong nhấc tay đúng lúc rơi vào vùng trên/dưới card.
const DRAG_TOLERANCE_PX = 10;

interface UseCardZoneTapArgs {
  onNext: () => void;
  onPrev: () => void;
  onTap: () => void;
}

// Tap vào dải mỏng vô hình ở mép trên/dưới card = next/prev, tap vùng giữa = lật thẻ.
// Chỉ nên dùng cho nội dung đơn giản (mặt trước) - không hoạt động tốt nếu bên trong có
// element tương tác riêng (nút, list onClick...) nằm sát mép, dễ bấm nhầm.
export function useCardZoneTap({ onNext, onPrev, onTap }: UseCardZoneTapArgs) {
  const startRef = useRef<{ x: number; y: number } | null>(null);

  return {
    onPointerDown: (e: PointerEvent<HTMLElement>) => {
      startRef.current = { x: e.clientX, y: e.clientY };
    },
    onPointerUp: (e: PointerEvent<HTMLElement>) => {
      const start = startRef.current;
      startRef.current = null;
      if (!start) {
        return;
      }
      const dragDistance = Math.hypot(e.clientX - start.x, e.clientY - start.y);
      if (dragDistance > DRAG_TOLERANCE_PX) {
        return;
      }

      const rect = e.currentTarget.getBoundingClientRect();
      const y = e.clientY - rect.top;
      if (y < EDGE_ZONE_PX) {
        onNext();
      } else if (y > rect.height - EDGE_ZONE_PX) {
        onPrev();
      } else {
        onTap();
      }
    },
    onPointerCancel: () => {
      startRef.current = null;
    },
  };
}
