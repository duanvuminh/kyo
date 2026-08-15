import { TranscriptLine } from "@/app/podcast/_components/transcript-line";
import { Sub } from "@/lib/types";

export function TranscriptCueList({
  cues,
  activeIndex,
  activeLineRef,
  seekTo,
  loopStartIndex,
  onToggleLoop,
}: {
  cues: Sub[];
  activeIndex: number;
  activeLineRef: React.RefObject<HTMLDivElement | null>;
  seekTo: (cue: Sub) => void;
  loopStartIndex: number | null;
  onToggleLoop: (index: number) => void;
}) {
  if (cues.length === 0) {
    return null;
  }
  return (
    <div className="max-h-64 overflow-y-auto flex flex-col gap-1 border rounded p-2">
      {cues.map((cue, index) => (
        <TranscriptLine
          key={index}
          content={cue.content}
          isActive={index === activeIndex}
          isLooping={index === loopStartIndex}
          onSeek={() => seekTo(cue)}
          onToggleLoop={() => onToggleLoop(index)}
          lineRef={index === activeIndex ? activeLineRef : undefined}
        />
      ))}
    </div>
  );
}
