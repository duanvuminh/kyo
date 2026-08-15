import { Sub } from "@/lib/types";
import { useEffect, useRef, useState } from "react";

const LOOP_LINES_COUNT = 5;

function playAudioFrom(audio: HTMLAudioElement, startTime: number, onReady: () => void) {
  const playFrom = () => {
    audio.currentTime = startTime;
    audio.play().catch(() => {});
    onReady();
  };
  // iOS Safari: set currentTime khi chưa có metadata (readyState 0) bị bỏ qua âm thầm.
  if (audio.readyState === 0) {
    audio.addEventListener("loadedmetadata", playFrom, { once: true });
    audio.load();
  } else {
    playFrom();
  }
}

// Long-press 1 dòng -> loop liên tục từ dòng đó tới hết LOOP_LINES_COUNT câu, cho đến khi
// long-press lại đúng dòng đang loop (dừng) hoặc long-press dòng khác (chuyển loop qua đó).
export function useLineLoop(audioRef: React.RefObject<HTMLAudioElement | null>, cues: Sub[]) {
  const [loopStartIndex, setLoopStartIndex] = useState<number | null>(null);
  const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearLoopTimeout = () => {
    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }
  };

  const playLoopRange = (startIndex: number) => {
    const audio = audioRef.current;
    const startCue = cues[startIndex];
    const endCue = cues[Math.min(startIndex + LOOP_LINES_COUNT - 1, cues.length - 1)];
    if (!audio || !startCue || !endCue) {
      return;
    }
    clearLoopTimeout();
    playAudioFrom(audio, startCue.start, () => {
      loopTimeoutRef.current = setTimeout(() => playLoopRange(startIndex), (endCue.end - startCue.start) * 1000);
    });
  };

  const stopLoop = () => {
    setLoopStartIndex(null);
    clearLoopTimeout();
  };

  const toggleLoop = (index: number) => {
    if (loopStartIndex === index) {
      stopLoop();
      return;
    }
    setLoopStartIndex(index);
    playLoopRange(index);
  };

  useEffect(() => clearLoopTimeout, []);

  return { loopStartIndex, toggleLoop, stopLoop };
}
