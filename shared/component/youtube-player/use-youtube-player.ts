import { useEffect, useRef, useState } from "react";

interface YouTubePlayerOptions {
  autoplay?: number;
  controls?: number;
  mute?: number;
  start?: number;
  end?: number;
}

function loadYouTubeAPI() {
  if (window.YT?.Player) { return Promise.resolve(); }
  return new Promise<void>((resolve) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => resolve();
  });
}

export function useYouTubePlayer(videoId: string, options: YouTubePlayerOptions = {}) {
  const playerRef = useRef<HTMLDivElement>(null);
  const player = useRef<YT.Player | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;
    loadYouTubeAPI().then(() => {
      if (!isMounted || !playerRef.current) { return; }
      player.current = new window.YT.Player(playerRef.current, {
        videoId,
        playerVars: { ...options, enablejsapi: 1 },
        events: { onReady: () => { setTimeout(() => { if (isMounted) { setIsReady(true); } }, 300); } },
      });
    });
    return () => { isMounted = false; if (player.current) { player.current.destroy(); player.current = null; } };
  }, [options, videoId]);

  return { playerRef, isReady, getPlayer: () => player.current };
}
