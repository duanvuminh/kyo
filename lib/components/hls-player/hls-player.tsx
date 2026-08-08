"use client";

import { cn } from "@/lib/utils/utils";
import { SubtitleList } from "@/lib/components/hls-player/subtitle-list";
import { useHlsPlayer } from "@/lib/components/hls-player/use-hls-player";
import { useSubtitleDisplay } from "@/lib/components/hls-player/use-subtitle-display";
import { useSubtitleScroll } from "@/lib/hooks/use-subtitle-scroll";
import { Sub } from "@/lib/types";

type HlsPlayerProps = {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  className?: string;
  subs?: Sub[];
  subVi?: Sub[];
  subJa?: Sub[];
  poster?: string;
};

export default function HlsPlayer({ src, autoPlay = false, controls = true, muted = false, className = "", subs, subVi, subJa, poster }: HlsPlayerProps) {
  const { videoRef } = useHlsPlayer(src, subVi, subJa, subs);
  const { currentTime, handleSubtitleClick } = useSubtitleDisplay(videoRef);
  const { containerRef, itemRefs } = useSubtitleScroll(subs ?? [], currentTime);

  return (
    <div className="flex flex-col gap-4">
      <video ref={videoRef} controls={controls} autoPlay={autoPlay} muted={muted} className={cn(className, "w-full aspect-video rounded-lg")} poster={poster} playsInline />
      {subs && <SubtitleList subs={subs} currentTime={currentTime} containerRef={containerRef} itemRefs={itemRefs} onSubtitleClick={(sub) => handleSubtitleClick(sub, videoRef.current!)} />}
    </div>
  );
}
