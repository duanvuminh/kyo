"use client";

import { useAudioPlayer } from "@/shared/component/audio-player/use-audio-player";
import { Button } from "@/shared/component/ui/button";
import { cn } from "@/shared/utils/utils";
import { Loader2, Speech } from "lucide-react";
import { useEffect } from "react";

export const AudioPlayer = ({
  text,
  active,
}: {
  text: string;
  active?: boolean;
}) => {
  const { audioRef, playUrl, isLoading, handlePlayAudio, cleanup } =
    useAudioPlayer(text);

  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={handlePlayAudio}
        disabled={isLoading}
        className={cn({ "text-muted": !active })}
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Speech />}
      </Button>
      {playUrl && (
        <audio ref={audioRef} controls className="hidden" src={playUrl}>
          Your browser does not support the audio element.
        </audio>
      )}
    </>
  );
};
