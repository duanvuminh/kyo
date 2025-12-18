import { Sub } from "@/shared/types/models/sub";
import { RefObject, useEffect, useState } from "react";

export function useSubtitleDisplay(
  videoRef?: RefObject<HTMLVideoElement | null>
) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef?.current;
    if (!video) {
      return;
    }

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [videoRef]);

  const handleSubtitleClick = (sub: Sub, videoElement: HTMLVideoElement) => {
    videoElement.currentTime = sub.start;
    videoElement.play();
    setTimeout(() => {
      videoElement.pause();
    }, (sub.end - sub.start) * 1000);
  };

  return {
    currentTime,
    handleSubtitleClick,
  };
}
