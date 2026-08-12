import { Sub } from "@/lib/types";
import { useRef } from "react";

export function useSeekWithAutoPause(audioRef: React.RefObject<HTMLAudioElement | null>) {
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (cue: Sub) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    const playFrom = () => {
      audio.currentTime = cue.start;
      // play() trả về Promise, có thể bị pause() ở dưới hoặc lượt click kế tiếp huỷ ngang
      // -> browser reject với AbortError, cần catch để không văng unhandledRejection.
      audio.play().catch(() => {});
      pauseTimeoutRef.current = setTimeout(() => audio.pause(), (cue.end - cue.start) * 1000);
    };

    // iOS Safari: set currentTime khi chưa có metadata (readyState 0, preload chưa kịp tải) bị bỏ qua
    // âm thầm -> seek/play sai vị trí hoặc không phát. Phải chờ loadedmetadata rồi mới seek.
    if (audio.readyState === 0) {
      audio.addEventListener("loadedmetadata", playFrom, { once: true });
      audio.load();
    } else {
      playFrom();
    }
  };
}
