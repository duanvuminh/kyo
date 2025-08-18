"use client";

import { useHlsPlayer } from "@/shared/component/hls-player/use-hls-player";
import { useSubtitleDisplay } from "@/shared/component/hls-player/use-subtitle-display";
import { useSubtitleScroll } from "@/shared/component/hls-player/use-subtitle-scroll";
import { Button } from "@/shared/component/ui/button";

type HlsPlayerProps = {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  className?: string;
  sub?: string;
};

export default function HlsPlayer({
  src,
  autoPlay = false,
  controls = true,
  muted = false,
  className = "",
  sub,
}: HlsPlayerProps) {
  const { videoRef, subtitleUrl } = useHlsPlayer(src, sub);
  const { currentTime, subtitles, handleSubtitleClick } = useSubtitleDisplay(
    sub,
    videoRef
  );
  const { containerRef, itemRefs } = useSubtitleScroll(subtitles, currentTime);

  return (
    <div className="flex flex-col gap-4">
      <video
        ref={videoRef}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        className={className + " w-full max-h-[80vh] rounded-lg"}
      >
        {subtitleUrl && (
          <track
            label="vi"
            kind="subtitles"
            srcLang="vi"
            src={subtitleUrl}
            default
          />
        )}
      </video>
      {sub && (
        <div
          ref={containerRef}
          className="p-4 max-h-[400px] overflow-y-auto space-y-2 relative"
        >
          {subtitles.map((sub, index) => {
            const isCurrentSub =
              sub.start <= currentTime && currentTime <= sub.end;

            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={isCurrentSub ? "text-primary" : "text-muted"}
              >
                <Button
                  size="sm"
                  onClick={() => handleSubtitleClick(sub, videoRef.current!)}
                  variant="ghost"
                  className="rounded-full transition hover:scale-110"
                >
                  ▶
                </Button>{" "}
                {sub.content}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
