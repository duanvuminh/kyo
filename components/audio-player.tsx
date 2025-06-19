"use client";

import { Speech } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";

export const AudioPlayer = ({ text }: { text: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playUrl, setPlayUrl] = useState("");

  const handlePlayAudio = () => {
    if (audioRef.current?.src) {
      return audioRef.current.play();
    } else {
      fetch("/api/speak", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: { "Content-Type": "application/json" },
      }).then(async (res) => {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setPlayUrl(url);
        // Delay 1 tick to ensure <audio> gets updated with new src
        setTimeout(() => {
          audioRef.current?.play();
        }, 100);
      });
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={handlePlayAudio}
        className="text-muted"
      >
        <Speech />
      </Button>
      {playUrl && (
        <audio ref={audioRef} controls className="hidden" src={playUrl}>
          Your browser does not support the audio element.
        </audio>
      )}
    </>
  );
};
