import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";

export function useHlsPlayer(src: string, subVi?: string, subJa?: string) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [subtitleViUrl, setSubtitleViUrl] = useState<string | null>(null);
  const [subtitleJaUrl, setSubtitleJaUrl] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (subVi || subJa) {
      const blobVi = new Blob([subVi ?? ""], { type: "text/vtt" });
      const urlVi = URL.createObjectURL(blobVi);
      const blobJa = new Blob([subJa ?? ""], { type: "text/vtt" });
      const urlJa = URL.createObjectURL(blobJa);
      setSubtitleViUrl(urlVi);
      setSubtitleJaUrl(urlJa);
      video.src = src;
      return () => {
        URL.revokeObjectURL(urlVi);
        URL.revokeObjectURL(urlJa);
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
  }, [src, subJa, subVi]);

  return { videoRef, subtitleViUrl, subtitleJaUrl };
}
