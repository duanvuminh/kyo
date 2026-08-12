"use client";

import { MiniPlayer } from "@/app/podcast/_components/mini-player";
import { TranscriptLine } from "@/app/podcast/_components/transcript-line";
import { useActiveCueIndex } from "@/app/podcast/_components/use-active-cue-index";
import { usePictureInPictureBubble } from "@/app/podcast/_components/use-picture-in-picture-bubble";
import { useSeekWithAutoPause } from "@/app/podcast/_components/use-seek-with-auto-pause";
import { useTranscript } from "@/app/podcast/_components/use-transcript";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function TranscriptPlayer({
  audioUrl,
  transcriptUrl,
  title,
}: {
  audioUrl: string;
  transcriptUrl?: string;
  title?: string;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);
  const cues = useTranscript(transcriptUrl);
  const activeIndex = useActiveCueIndex(audioRef, cues);
  const proxiedAudioUrl = `/api/podcast-audio?url=${encodeURIComponent(audioUrl)}`;
  const { isPlaying, pipWindow, pipSupported, openPip } = usePictureInPictureBubble(audioRef, title);

  useEffect(() => {
    activeLineRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [activeIndex]);

  const seekTo = useSeekWithAutoPause(audioRef);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  const recentLines =
    activeIndex >= 0 ? cues.slice(Math.max(0, activeIndex - 2), activeIndex + 1).map((cue) => cue.content) : [];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <audio ref={audioRef} controls preload="metadata" src={proxiedAudioUrl} className="w-full" />
        {pipSupported && (
          <Button
            type="button"
            size="sm"
            variant="ghost"
            title="Nổi bong bóng khi chuyển tab"
            onClick={openPip}
            className="shrink-0"
          >
            🫧
          </Button>
        )}
      </div>
      {cues.length > 0 && (
        <div className="max-h-64 overflow-y-auto flex flex-col gap-1 border rounded p-2">
          {cues.map((cue, index) => (
            <TranscriptLine
              key={index}
              content={cue.content}
              isActive={index === activeIndex}
              onSeek={() => seekTo(cue)}
              lineRef={index === activeIndex ? activeLineRef : undefined}
            />
          ))}
        </div>
      )}
      {pipWindow &&
        createPortal(
          <MiniPlayer
            title={title ?? "Đang phát"}
            recentLines={recentLines}
            isPlaying={isPlaying}
            onTogglePlay={togglePlay}
          />,
          pipWindow.document.body,
        )}
    </div>
  );
}
