declare module "*.css";

// Document Picture-in-Picture API (Chrome/Edge only) - chưa có trong lib.dom.d.ts.
// Google Meet dùng API này để nổi cửa sổ nhỏ khi user chuyển sang tab khác.
interface DocumentPictureInPicture extends EventTarget {
  requestWindow(options?: { width?: number; height?: number }): Promise<Window>;
  window: Window | null;
}

interface Window {
  documentPictureInPicture?: DocumentPictureInPicture;
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
