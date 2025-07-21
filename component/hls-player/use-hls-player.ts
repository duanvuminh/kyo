import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";

export function useHlsPlayer(src: string, sub?: string) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [subtitleUrl, setSubtitleUrl] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (sub) {
      const blob = new Blob([sub], { type: "text/vtt" });
      const url = URL.createObjectURL(blob);
      setSubtitleUrl(url);
      video.src = src;
      return () => {
        URL.revokeObjectURL(url);
      };
    }

    const isHls = src.includes(".m3u8");
    if (isHls) {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        return () => {
          hls.destroy();
        };
      }
    } else {
      video.src = src;
    }
  }, [src, sub]);

  return { videoRef, subtitleUrl };
} 