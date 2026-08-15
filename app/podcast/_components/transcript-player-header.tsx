import { Button } from "@/components/ui/button";

export function TranscriptPlayerHeader({
  audioRef,
  proxiedAudioUrl,
  pipSupported,
  openPip,
  isLooping,
  onStopLoop,
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  proxiedAudioUrl: string;
  pipSupported: boolean;
  openPip: () => void;
  isLooping: boolean;
  onStopLoop: () => void;
}) {
  return (
    <div className="flex items-center gap-1">
      <audio ref={audioRef} controls preload="metadata" src={proxiedAudioUrl} className="w-full" />
      {isLooping && (
        <Button type="button" size="sm" variant="ghost" title="Dừng loop" onClick={onStopLoop} className="shrink-0 text-primary">
          🔁✕
        </Button>
      )}
      {pipSupported && (
        <Button type="button" size="sm" variant="ghost" title="Nổi bong bóng khi chuyển tab" onClick={openPip} className="shrink-0">
          🫧
        </Button>
      )}
    </div>
  );
}
