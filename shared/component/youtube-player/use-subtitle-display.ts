import { Sub } from "@/shared/types/models/sub";
import { useEffect, useRef, useState } from "react";

type YouTubePlayer = {
  getCurrentTime?: () => number;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  playVideo(): void;
  pauseVideo(): void;
};

function createHandleSubtitleClick(
  getPlayer: () => YouTubePlayer | null,
  timeoutRef: { current: NodeJS.Timeout | null },
) {
  const autoPause = true;

  return (sub: Sub) => {
    const player = getPlayer();
    if (!player) {
      return;
    }

    player.seekTo(sub.start, true);
    player.playVideo();

    if (!autoPause) {
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(
      () => {
        player.pauseVideo();
      },
      (sub.end - sub.start) * 1000,
    );
  };
}

export function useYouTubeSubtitleDisplay(
  getPlayer: () => YouTubePlayer | null,
  isReady: boolean,
) {
  const [currentTime, setCurrentTime] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleSubtitleClick = createHandleSubtitleClick(getPlayer, timeoutRef);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const interval = setInterval(() => {
      const player = getPlayer();
      const time = player?.getCurrentTime?.();
      if (typeof time === "number") {
        setCurrentTime(time);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [getPlayer, isReady]);

  return { currentTime, handleSubtitleClick };
}
