import { MiniPlayer } from "@/app/podcast/_components/mini-player";
import { createPortal } from "react-dom";

export function TranscriptMiniPlayerPortal({
  pipWindow,
  title,
  recentLines,
  isPlaying,
  onTogglePlay,
  isLooping,
  onToggleLoop,
}: {
  pipWindow: Window | null;
  title?: string;
  recentLines: string[];
  isPlaying: boolean;
  onTogglePlay: () => void;
  isLooping: boolean;
  onToggleLoop: () => void;
}) {
  if (!pipWindow) {
    return null;
  }
  return createPortal(
    <MiniPlayer
      title={title ?? "Đang phát"}
      recentLines={recentLines}
      isPlaying={isPlaying}
      onTogglePlay={onTogglePlay}
      isLooping={isLooping}
      onToggleLoop={onToggleLoop}
    />,
    pipWindow.document.body,
  );
}
