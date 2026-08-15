"use client";

import { TranscriptCueList } from "@/app/podcast/_components/transcript-cue-list";
import { TranscriptMiniPlayerPortal } from "@/app/podcast/_components/transcript-mini-player-portal";
import { TranscriptPlayerHeader } from "@/app/podcast/_components/transcript-player-header";
import { useActiveCueIndex } from "@/app/podcast/_components/use-active-cue-index";
import { useLineLoop } from "@/app/podcast/_components/use-line-loop";
import { usePictureInPictureBubble } from "@/app/podcast/_components/use-picture-in-picture-bubble";
import { useSeekWithAutoPause } from "@/app/podcast/_components/use-seek-with-auto-pause";
import { useTranscript } from "@/app/podcast/_components/use-transcript";
import { Sub } from "@/lib/types";
import { useEffect, useRef } from "react";

function getRecentLines(cues: Sub[], activeIndex: number): string[] {
  if (activeIndex < 0) {
    return [];
  }
  return cues.slice(Math.max(0, activeIndex - 2), activeIndex + 1).map((cue) => cue.content);
}

function togglePlayPause(audioRef: React.RefObject<HTMLAudioElement | null>) {
  const audio = audioRef.current;
  if (!audio) {
    return;
  }
  if (audio.paused) {
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
}

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
  const seekTo = useSeekWithAutoPause(audioRef);
  const { loopStartIndex, toggleLoop, stopLoop } = useLineLoop(audioRef, cues);
  const isLooping = loopStartIndex !== null;

  useEffect(() => {
    activeLineRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [activeIndex]);

  const toggleLoopFromCurrent = () => (isLooping ? stopLoop() : activeIndex >= 0 && toggleLoop(Math.max(0, activeIndex - 1)));

  return (
    <div className="flex flex-col gap-2">
      <TranscriptPlayerHeader
        audioRef={audioRef} proxiedAudioUrl={proxiedAudioUrl} pipSupported={pipSupported}
        openPip={openPip} isLooping={isLooping} onStopLoop={stopLoop}
      />
      <TranscriptCueList
        cues={cues} activeIndex={activeIndex} activeLineRef={activeLineRef}
        seekTo={seekTo} loopStartIndex={loopStartIndex} onToggleLoop={toggleLoop}
      />
      <TranscriptMiniPlayerPortal
        pipWindow={pipWindow} title={title} recentLines={getRecentLines(cues, activeIndex)}
        isPlaying={isPlaying} onTogglePlay={() => togglePlayPause(audioRef)}
        isLooping={isLooping} onToggleLoop={toggleLoopFromCurrent}
      />
    </div>
  );
}
