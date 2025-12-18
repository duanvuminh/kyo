"use client";

import { cn } from "@/core/utils/utils";
import { useHlsPlayer } from "@/shared/component/hls-player/use-hls-player";
import { SubtitleList } from "@/shared/component/hls-player/subtitle-list";
import { useSubtitleDisplay } from "@/shared/component/hls-player/use-subtitle-display";
import { useSubtitleScroll } from "@/shared/hooks/use-subtitle-scroll";
import { Sub } from "@/shared/types/models/sub";

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
