"use client";

import { cn } from "@/lib/utils/utils";
import { useAudioPlayer } from "@/lib/components/audio-player/use-audio-player";
import { Button } from "@/components/ui/button";
import { Loader2, Speech } from "lucide-react";

export const AudioPlayer = ({
  text,
  active,
}: {
  text: string;
  active?: boolean;
}) => {
  const { isLoading, handlePlayAudio } = useAudioPlayer(text);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handlePlayAudio}
      disabled={isLoading}
      className={cn({ "text-muted": !active })}
    >
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Speech />}
    </Button>
  );
};
