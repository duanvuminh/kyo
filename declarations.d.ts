declare module "*.css";

interface Window {
  YT:
    | {
        Player: new (
          element: HTMLElement | string,
          options: {
            videoId?: string;
            playerVars?: Record<string, unknown>;
            events?: {
              onReady?: () => void;
            };
          },
        ) => {
          destroy(): void;
          getCurrentTime(): number;
          seekTo(seconds: number, allowSeekAhead: boolean): void;
          playVideo(): void;
          pauseVideo(): void;
        };
      }
    | undefined;
  onYouTubeIframeAPIReady: (() => void) | undefined;
}
