"use client";

import { YouTubeSubtitleList } from "@/shared/component/youtube-player/subtitle-list";
import { useYouTubeSubtitleDisplay } from "@/shared/component/youtube-player/use-subtitle-display";
import { useYouTubePlayer } from "@/shared/component/youtube-player/use-youtube-player";
import { useSubtitleScroll } from "@/shared/hooks/use-subtitle-scroll";
import { Sub } from "@/shared/types/models/sub";
import { useMemo } from "react";

type YouTubePlayerProps = {
  videoId: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  subs?: Sub[];
};

export default function YouTubePlayer({ videoId, autoPlay = false, controls = true, muted = false, subs }: YouTubePlayerProps) {
  const options = useMemo(() => ({ autoplay: autoPlay ? 1 : 0, controls: controls ? 1 : 0, mute: muted ? 1 : 0 }), [autoPlay, controls, muted]);
  const { playerRef, isReady, getPlayer } = useYouTubePlayer(videoId, options);
  const { currentTime, handleSubtitleClick } = useYouTubeSubtitleDisplay(getPlayer, isReady);
  const { containerRef, itemRefs } = useSubtitleScroll(subs ?? [], currentTime);

  return (
    <div className="flex flex-col gap-4">
      <div ref={playerRef} className="relative w-full aspect-video" />
      {subs && isReady && <YouTubeSubtitleList subs={subs} currentTime={currentTime} containerRef={containerRef} itemRefs={itemRefs} onSubtitleClick={handleSubtitleClick} />}
    </div>
  );
}
