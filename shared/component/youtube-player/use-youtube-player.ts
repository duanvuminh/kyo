import { useEffect, useRef, useState } from "react";

interface YouTubePlayerOptions {
  autoplay?: number;
  controls?: number;
  mute?: number;
  start?: number;
  end?: number;
}

type YouTubePlayer = {
  destroy(): void;
  getCurrentTime(): number;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  playVideo(): void;
  pauseVideo(): void;
};

function loadYouTubeAPI() {
  if (window.YT?.Player) {
    return Promise.resolve();
  }
  return new Promise<void>((resolve) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => resolve();
  });
}

function createPlayerEffect(
  videoId: string,
  options: YouTubePlayerOptions,
  playerRef: { current: HTMLDivElement | null },
  player: { current: YouTubePlayer | null },
  setIsReady: (ready: boolean) => void,
) {
  return () => {
    let isMounted = true;

    loadYouTubeAPI().then(() => {
      if (!isMounted || !playerRef.current) {
        return;
      }

      const YT = window.YT;
      if (!YT?.Player) {
        return;
      }

      player.current = new YT.Player(playerRef.current, {
        videoId,
        playerVars: { ...options, enablejsapi: 1 },
        events: {
          onReady: () => {
            setTimeout(() => {
              if (isMounted) {
                setIsReady(true);
              }
            }, 300);
          },
        },
      });
    });

    return () => {
      isMounted = false;
      if (player.current) {
        player.current.destroy();
        player.current = null;
      }
    };
  };
}

export function useYouTubePlayer(
  videoId: string,
  options: YouTubePlayerOptions = {},
) {
  const playerRef = useRef<HTMLDivElement>(null);
  const player = useRef<YouTubePlayer | null>(null);
  const [isReady, setIsReady] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    createPlayerEffect(videoId, options, playerRef, player, setIsReady),
    [options, videoId],
  );

  return { playerRef, isReady, getPlayer: () => player.current };
}
