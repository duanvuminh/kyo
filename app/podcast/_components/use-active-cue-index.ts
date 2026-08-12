import { Sub } from "@/lib/types";
import { useEffect, useState } from "react";

export function useActiveCueIndex(audioRef: React.RefObject<HTMLAudioElement | null>, cues: Sub[]) {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || cues.length === 0) {
      return;
    }

    const handleTimeUpdate = () => {
      const time = audio.currentTime;
      let index = -1;
      for (let i = 0; i < cues.length; i++) {
        if (cues[i].start <= time) {
          index = i;
        } else {
          break;
        }
      }
      setActiveIndex(index);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, [audioRef, cues]);

  return activeIndex;
}
