import { useRef, useState } from "react";

async function fetchAudioUrl(text: string): Promise<string | null> {
  const response = await fetch("/api/speak", {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    return null;
  }
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

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
      const url = await fetchAudioUrl(text);
      if (url) {
        setPlayUrl(url);
        setTimeout(() => audioRef.current?.play(), 100);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const cleanup = () => {
    if (playUrl) {
      URL.revokeObjectURL(playUrl);
    }
  };

  return { audioRef, playUrl, isLoading, handlePlayAudio, cleanup };
}
