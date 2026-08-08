import { useState } from "react";

export function useAudioPlayer(text: string) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayAudio = () => {
    if (!window.speechSynthesis) {
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.9;
    utterance.onstart = () => setIsLoading(true);
    utterance.onend = () => setIsLoading(false);
    utterance.onerror = () => setIsLoading(false);
    window.speechSynthesis.speak(utterance);
  };

  return { isLoading, handlePlayAudio };
}
