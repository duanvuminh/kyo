import { useCallback, useEffect, useState } from "react";

// Copy stylesheet của trang chính sang document của PiP window (nó là 1 window riêng biệt,
// không tự kế thừa CSS) để bubble hiển thị đúng style Tailwind thay vì bị trắng/không style.
function copyStylesToPipWindow(pipDocument: Document) {
  for (const styleSheet of Array.from(document.styleSheets)) {
    try {
      const cssText = Array.from(styleSheet.cssRules)
        .map((rule) => rule.cssText)
        .join("\n");
      const style = pipDocument.createElement("style");
      style.textContent = cssText;
      pipDocument.head.appendChild(style);
    } catch {
      if (styleSheet.href) {
        const link = pipDocument.createElement("link");
        link.rel = "stylesheet";
        link.href = styleSheet.href;
        pipDocument.head.appendChild(link);
      }
    }
  }
}

// Quản lý bubble nổi (Document Picture-in-Picture): tự mở khi Chrome ẩn tab lúc audio đang phát
// (giống Google Meet), hoặc mở thủ công qua nút bấm. Safari/Firefox chưa hỗ trợ API này
// -> pipSupported false, audio vẫn phát bình thường, chỉ là không có bubble.
export function usePictureInPictureBubble(audioRef: React.RefObject<HTMLAudioElement | null>, title?: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [pipWindow, setPipWindow] = useState<Window | null>(null);
  const pipSupported = typeof window !== "undefined" && !!window.documentPictureInPicture;

  const openPip = useCallback(async () => {
    if (!window.documentPictureInPicture || window.documentPictureInPicture.window) {
      return;
    }
    const pip = await window.documentPictureInPicture.requestWindow({ width: 300, height: 180 });
    copyStylesToPipWindow(pip.document);
    pip.document.body.style.margin = "0";
    pip.addEventListener("pagehide", () => setPipWindow(null), { once: true });
    setPipWindow(pip);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !("mediaSession" in navigator)) {
      return;
    }

    const handlePlay = () => {
      setIsPlaying(true);
      if (title) {
        navigator.mediaSession.metadata = new MediaMetadata({ title });
      }
      // Chrome tự gọi handler này khi tab bị ẩn lúc audio đang phát -> bubble tự nổi lên.
      navigator.mediaSession.setActionHandler("enterpictureinpicture" as MediaSessionAction, () => {
        openPip();
      });
    };
    const handlePause = () => {
      setIsPlaying(false);
      navigator.mediaSession.setActionHandler("enterpictureinpicture" as MediaSessionAction, null);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handlePause);
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handlePause);
    };
  }, [audioRef, openPip, title]);

  // Đóng PiP window khi component unmount (VD: rời trang) để không để sót cửa sổ mồ côi.
  useEffect(() => {
    return () => {
      pipWindow?.close();
    };
  }, [pipWindow]);

  return { isPlaying, pipWindow, pipSupported, openPip };
}
