import { Sub } from "@/shared/types/models/sub";
import Hls from "hls.js";
import { useEffect, useRef } from "react";

function setupHlsSource(video: HTMLVideoElement, src: string) {
  const isHls = src.includes(".m3u8");
  if (!isHls) { video.src = src; return; }
  if (video.canPlayType("application/vnd.apple.mpegurl")) { video.src = src; return; }
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);
    return () => { hls.destroy(); };
  }
}

function addSubtitleTracks(video: HTMLVideoElement, subs?: Sub[], subVi?: Sub[], subJa?: Sub[]) {
  if (video.textTracks.length >= 3) { return; }
  const track = video.addTextTrack("subtitles", "Song ngữ", "vj");
  track.mode = "showing";
  const trackVi = video.addTextTrack("subtitles", "vi", "vi");
  trackVi.mode = "hidden";
  const trackJa = video.addTextTrack("subtitles", "ja", "ja");
  trackJa.mode = "hidden";
  subs?.forEach((sub) => { track.addCue(new VTTCue(sub.start, sub.end, sub.content)); });
  subVi?.forEach((sub) => { trackVi.addCue(new VTTCue(sub.start, sub.end, sub.content)); });
  subJa?.forEach((sub) => { trackJa.addCue(new VTTCue(sub.start, sub.end, sub.content)); });
}

export function useHlsPlayer(src: string, subVi?: Sub[], subJa?: Sub[], subs?: Sub[]) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) { return setupHlsSource(video, src); }
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (video && (subVi || subJa || subs)) { addSubtitleTracks(video, subs, subVi, subJa); }
  }, [subJa, subVi, subs, videoRef]);

  return { videoRef };
}
