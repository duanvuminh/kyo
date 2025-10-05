"use client";

import { Button } from "@/shared/component/ui/button";
import { useYouTubeSubtitleDisplay } from "@/shared/component/youtube-player/use-subtitle-display";
import { useYouTubePlayer } from "@/shared/component/youtube-player/use-youtube-player";
import { useSubtitleScroll } from "@/shared/hooks/use-subtitle-scroll";
import { Sub } from "@/shared/types/models/sub";
import { Fragment, useMemo } from "react";

type YouTubePlayerProps = {
  videoId: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  subs?: Sub[];
};

export default function YouTubePlayer({
  videoId,
  autoPlay = false,
  controls = true,
  muted = false,
  subs,
}: YouTubePlayerProps) {
  const options = useMemo(
    () => ({
      autoplay: autoPlay ? 1 : 0,
      controls: controls ? 1 : 0,
      mute: muted ? 1 : 0,
    }),
    [autoPlay, controls, muted]
  );

  const { playerRef, isReady, getPlayer } = useYouTubePlayer(videoId, options);
  const { currentTime, handleSubtitleClick } = useYouTubeSubtitleDisplay(
    getPlayer,
    isReady
  );
  console.log("currentTime", currentTime);
  const { containerRef, itemRefs } = useSubtitleScroll(subs ?? [], currentTime);

  return (
    <div className="flex flex-col gap-4">
      <div ref={playerRef} className="relative w-full aspect-video" />

      {subs && isReady && (
        <div
          ref={containerRef}
          className="p-4 max-h-[400px] overflow-y-auto space-y-2 relative"
        >
          {subs.map((sub, index) => {
            const nextStart = subs[index + 1]?.start ?? sub.end;
            const isCurrentSub =
              sub.start <= currentTime && currentTime < nextStart;

            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={
                  isCurrentSub ? "flex text-primary" : "flex text-muted"
                }
              >
                <Button
                  size="sm"
                  variant="ghost"
                  className="rounded-full transition hover:scale-110"
                  onClick={() => handleSubtitleClick(sub)}
                >
                  ▶
                </Button>
                <div>
                  {sub.content.split("\n").map((line, i) => (
                    <Fragment key={i}>
                      {line}
                      {i < sub.content.split("\n").length - 1 && <br />}
                    </Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
