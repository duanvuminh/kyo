declare module "*.css";

interface Window {
  YT: typeof YT | undefined;
  onYouTubeIframeAPIReady: (() => void) | undefined;
}
