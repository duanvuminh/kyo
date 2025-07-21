import { useRef, useState } from "react";

export function useAudioPlayer(text: string) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playUrl, setPlayUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayAudio = async () => {
    if (audioRef.current?.src) {
      return audioRef.current.play();
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/speak", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to generate audio");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPlayUrl(url);

      setTimeout(() => {
        audioRef.current?.play();
      }, 100);
    } finally {
      setIsLoading(false);
    }
  };

  // Cleanup function to revoke URL
  const cleanup = () => {
    if (playUrl) {
      URL.revokeObjectURL(playUrl);
    }
  };

  return {
    audioRef,
    playUrl,
    isLoading,
    handlePlayAudio,
    cleanup,
  };
}
