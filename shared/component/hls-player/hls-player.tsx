"use client";

import { useHlsPlayer } from "@/shared/component/hls-player/use-hls-player";
import { useSubtitleDisplay } from "@/shared/component/hls-player/use-subtitle-display";
import { useSubtitleScroll } from "@/shared/component/hls-player/use-subtitle-scroll";
import { Button } from "@/shared/component/ui/button";
import { Sub } from "@/shared/types/models/sub";
import { Fragment } from "react";

type HlsPlayerProps = {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  className?: string;
  subs?: Sub[];
  subVi?: string;
  subJa?: string;
  poster?: string;
};

export default function HlsPlayer({
  src,
  autoPlay = false,
  controls = true,
  muted = false,
  className = "",
  subs,
  subVi,
  subJa,
  poster,
}: HlsPlayerProps) {
  const { videoRef, subtitleViUrl, subtitleJaUrl } = useHlsPlayer(
    src,
    subVi,
    subJa
  );
  const { currentTime, handleSubtitleClick } = useSubtitleDisplay(videoRef);
  const { containerRef, itemRefs } = useSubtitleScroll(subs ?? [], currentTime);
  return (
    <div className="flex flex-col gap-4">
      <video
        ref={videoRef}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        className={className + " w-full spect-video rounded-lg"}
        poster={poster}
        playsInline
      >
        {subtitleViUrl && (
          <track
            label="vi"
            kind="subtitles"
            srcLang="vi"
            src={subtitleViUrl}
            default
          />
        )}
        {subtitleJaUrl && (
          <track
            label="ja"
            kind="subtitles"
            srcLang="ja"
            src={subtitleJaUrl}
            default
          />
        )}
      </video>
      {subs && (
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
                  onClick={() => handleSubtitleClick(sub, videoRef.current!)}
                  variant="ghost"
                  className="rounded-full transition hover:scale-110"
                >
                  ▶
                </Button>{" "}
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
