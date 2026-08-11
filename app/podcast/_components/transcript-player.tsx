"use client";

import { useTranscript } from "@/app/podcast/_components/use-transcript";
import { Button } from "@/components/ui/button";
import { copyText } from "@/lib/utils/clipboard";
import { cn } from "@/lib/utils/utils";
import { useEffect, useRef, useState } from "react";

function useActiveCueIndex(audioRef: React.RefObject<HTMLAudioElement | null>, cues: { start: number }[]) {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || cues.length === 0) {
      return;
    }

    const handleTimeUpdate = () => {
      const time = audio.currentTime;
      let index = -1;
      for (let i = 0; i < cues.length; i++) {
        if (cues[i].start <= time) {
          index = i;
        } else {
          break;
        }
      }
      setActiveIndex(index);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
  }, [audioRef, cues]);

  return activeIndex;
}

function useSeekWithAutoPause(audioRef: React.RefObject<HTMLAudioElement | null>) {
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (cue: { start: number; end: number }) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    const playFrom = () => {
      audio.currentTime = cue.start;
      // play() trả về Promise, có thể bị pause() ở dưới hoặc lượt click kế tiếp huỷ ngang
      // -> browser reject với AbortError, cần catch để không văng unhandledRejection.
      audio.play().catch(() => {});
      pauseTimeoutRef.current = setTimeout(() => audio.pause(), (cue.end - cue.start) * 1000);
    };

    // iOS Safari: set currentTime khi chưa có metadata (readyState 0, preload chưa kịp tải) bị bỏ qua
    // âm thầm -> seek/play sai vị trí hoặc không phát. Phải chờ loadedmetadata rồi mới seek.
    if (audio.readyState === 0) {
      audio.addEventListener("loadedmetadata", playFrom, { once: true });
      audio.load();
    } else {
      playFrom();
    }
  };
}

interface TranscriptLineProps {
  content: string;
  isActive: boolean;
  onSeek: () => void;
  lineRef?: React.RefObject<HTMLDivElement | null>;
}

function TranscriptLine({ content, isActive, onSeek, lineRef }: TranscriptLineProps) {
  return (
    <div
      ref={lineRef}
      className={cn("flex items-start gap-1 rounded px-1", isActive ? "bg-primary/10" : "")}
    >
      <Button
        type="button"
        size="sm"
        variant="ghost"
        className="rounded-full transition hover:scale-110 shrink-0"
        onClick={onSeek}
      >
        ▶
      </Button>
      <p
        onClick={() => copyText(content)}
        className={cn(
          "cursor-pointer text-sm whitespace-pre-line py-1",
          isActive ? "font-medium" : "text-muted-foreground",
        )}
      >
        {content}
      </p>
    </div>
  );
}

export function TranscriptPlayer({ audioUrl, transcriptUrl }: { audioUrl: string; transcriptUrl?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const activeLineRef = useRef<HTMLDivElement>(null);
  const cues = useTranscript(transcriptUrl);
  const activeIndex = useActiveCueIndex(audioRef, cues);
  const proxiedAudioUrl = `/api/podcast-audio?url=${encodeURIComponent(audioUrl)}`;

  useEffect(() => {
    activeLineRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [activeIndex]);

  const seekTo = useSeekWithAutoPause(audioRef);

  return (
    <div className="flex flex-col gap-2">
      <audio ref={audioRef} controls preload="metadata" src={proxiedAudioUrl} className="w-full" />
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
    </div>
  );
}
