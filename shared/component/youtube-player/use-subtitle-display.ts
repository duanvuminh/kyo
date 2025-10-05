import { Sub } from "@/shared/types/models/sub";
import { useEffect, useRef, useState } from "react";

export function useYouTubeSubtitleDisplay(
  getPlayer: () => YT.Player | null,
  isReady: boolean
) {
  const [currentTime, setCurrentTime] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoPause = true;

  const handleSubtitleClick = (sub: Sub) => {
    const player = getPlayer();
    if (!player) return;

    try {
      player.seekTo(sub.start, true);
      player.playVideo();

      if (autoPause) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          try {
            player.pauseVideo();
          } catch (error) {
            console.warn("Failed to pause video:", error);
          }
        }, (sub.end - sub.start) * 1000);
      }
    } catch (error) {
      console.error("Failed to handle subtitle click:", error);
    }
  };

  useEffect(() => {
    if (!isReady) return;

    const interval = setInterval(() => {
      const player = getPlayer();
      const time = player?.getCurrentTime?.();
      if (typeof time === "number") setCurrentTime(time);
    }, 300);

    return () => clearInterval(interval);
  }, [getPlayer, isReady]);

  return { currentTime, handleSubtitleClick };
}
