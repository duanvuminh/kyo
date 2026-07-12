"use client";

import { YouTubeSubtitleList } from "@/shared/component/youtube-player/subtitle-list";
import { useYouTubeSubtitleDisplay } from "@/shared/component/youtube-player/use-subtitle-display";
import { useYouTubePlayer } from "@/shared/component/youtube-player/use-youtube-player";
import { Button } from "@/shared/component/ui/button";
import { useSubtitleScroll } from "@/shared/hooks/use-subtitle-scroll";
import { Sub } from "@/shared/type/models/sub";
import { useMemo, useState } from "react";

type YouTubePlayerProps = {
  videoId: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  subs?: Sub[];
  subVi?: Sub[];
  subJa?: Sub[];
};

type SubtitleMode = "both" | "vi" | "ja";

const subtitleModes: { mode: SubtitleMode; label: string }[] = [
  { mode: "both", label: "Song ngữ" },
  { mode: "vi", label: "VI" },
  { mode: "ja", label: "JA" },
];

function pickActiveSubs(mode: SubtitleMode, subs?: Sub[], subVi?: Sub[], subJa?: Sub[]): Sub[] | undefined {
  if (mode === "vi") {
    return subVi;
  }
  if (mode === "ja") {
    return subJa;
  }
  return subs;
}

function useSubtitleModeState(subs?: Sub[], subVi?: Sub[], subJa?: Sub[]) {
  const [mode, setMode] = useState<SubtitleMode>("both");
  const canToggle = !!subVi?.length && !!subJa?.length;
  const activeSubs = canToggle ? pickActiveSubs(mode, subs, subVi, subJa) : subs;
  return { mode, setMode, canToggle, activeSubs };
}

function SubtitleModeToggle({ mode, onChange }: { mode: SubtitleMode; onChange: (mode: SubtitleMode) => void }) {
  return (
    <div className="flex gap-2">
      {subtitleModes.map(({ mode: m, label }) => (
        <Button key={m} size="sm" variant={mode === m ? "secondary" : "outline"} onClick={() => onChange(m)}>
          {label}
        </Button>
      ))}
    </div>
  );
}

export default function YouTubePlayer({ videoId, autoPlay = false, controls = true, muted = false, subs, subVi, subJa }: YouTubePlayerProps) {
  const options = useMemo(() => ({ autoplay: autoPlay ? 1 : 0, controls: controls ? 1 : 0, mute: muted ? 1 : 0 }), [autoPlay, controls, muted]);
  const { playerRef, isReady, getPlayer } = useYouTubePlayer(videoId, options);
  const { currentTime, handleSubtitleClick } = useYouTubeSubtitleDisplay(getPlayer, isReady);
  const { mode, setMode, canToggle, activeSubs } = useSubtitleModeState(subs, subVi, subJa);
  const { containerRef, itemRefs } = useSubtitleScroll(activeSubs ?? [], currentTime);

  return (
    <div className="flex flex-col gap-4">
      <div ref={playerRef} className="relative w-full aspect-video" />
      {canToggle && <SubtitleModeToggle mode={mode} onChange={setMode} />}
      {activeSubs && isReady && (
        <YouTubeSubtitleList subs={activeSubs} currentTime={currentTime} containerRef={containerRef} itemRefs={itemRefs} onSubtitleClick={handleSubtitleClick} />
      )}
    </div>
  );
}
