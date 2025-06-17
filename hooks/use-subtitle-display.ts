import { Sub } from "@/types/models/sub";
import { timeStringToSeconds } from "@/utils/utils";
import { RefObject, useEffect, useState } from "react";

export function useSubtitleDisplay(
  sub?: string,
  videoRef?: RefObject<HTMLVideoElement | null>
) {
  const [currentTime, setCurrentTime] = useState(0);
  const [subtitles, setSubtitles] = useState<Sub[]>([]);

  useEffect(() => {
    if (!sub) return;
    setSubtitles(parseVTT(sub));
  }, [sub]);

  useEffect(() => {
    const video = videoRef?.current;
    if (!video) return;

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [videoRef]);

  const parseVTT = (vtt: string): Sub[] => {
    const lines = vtt.split("\n").map((line) => line.trim());
    const subs: Sub[] = [];

    let i = 0;
    while (i < lines.length) {
      if (!lines[i] || lines[i] === "WEBVTT") {
        i++;
        continue;
      }

      const indexLine = lines[i];
      const isIndex = /^\d+$/.test(indexLine);
      if (isIndex) i++;

      const timeLine = lines[i];
      const match = timeLine.match(
        /^(\d{2}:\d{2}:\d{2}\.\d{3})\s-->\s(\d{2}:\d{2}:\d{2}\.\d{3})$/
      );
      if (!match) {
        i++;
        continue;
      }

      const start = timeStringToSeconds(match[1]);
      const end = timeStringToSeconds(match[2]);
      i++;

      const contentLines: string[] = [];
      while (i < lines.length && lines[i]) {
        contentLines.push(lines[i]);
        i++;
      }

      subs.push({
        start,
        end,
        content: contentLines.join(" "),
      });

      i++;
    }

    return subs;
  };

  const handleSubtitleClick = (sub: Sub, videoElement: HTMLVideoElement) => {
    videoElement.currentTime = sub.start;
    videoElement.play();
    setTimeout(() => {
      videoElement.pause();
    }, (sub.end - sub.start) * 1000);
  };

  return {
    currentTime,
    subtitles,
    handleSubtitleClick,
  };
}
