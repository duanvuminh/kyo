import { Sub } from "@/shared/types/models/sub";
import Hls from "hls.js";
import { useEffect, useRef } from "react";

export function useHlsPlayer(
  src: string,
  subVi?: Sub[],
  subJa?: Sub[],
  subs?: Sub[]
) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
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
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || (!subVi && !subJa && !subs)) return;

    if (video.textTracks.length < 3) {
      const track = video.addTextTrack("subtitles", "Song ngữ", "vj");
      track.mode = "showing";
      const trackVi = video.addTextTrack("subtitles", "vi", "vi");
      trackVi.mode = "hidden";
      const trackJa = video.addTextTrack("subtitles", "ja", "ja");
      trackJa.mode = "hidden";
      subs?.forEach((sub) => {
        track.addCue(new VTTCue(sub.start, sub.end, sub.content));
      });
      subVi?.forEach((sub) => {
        trackVi.addCue(new VTTCue(sub.start, sub.end, sub.content));
      });
      subJa?.forEach((sub) => {
        trackJa.addCue(new VTTCue(sub.start, sub.end, sub.content));
      });
    }
  }, [videoRef]);

  return { videoRef };
}
