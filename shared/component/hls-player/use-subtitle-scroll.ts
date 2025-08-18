import { Sub } from "@/shared/types/models/sub";
import { useEffect, useRef } from "react";

export function useSubtitleScroll(subtitles: Sub[], currentTime: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const index = subtitles.findIndex(
      (sub) => sub.start <= currentTime && currentTime <= sub.end
    );
    if (index === -1) {
      return;
    }

    const target = itemRefs.current[index];
    if (!target) {
      return;
    }

    const containerHeight = container.clientHeight;
    const targetOffsetTop = target.offsetTop;
    const targetHeight = target.offsetHeight;

    const scrollTop = targetOffsetTop - containerHeight / 2 + targetHeight / 2;

    container.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  }, [currentTime, subtitles]);

  return {
    containerRef,
    itemRefs,
  };
}
