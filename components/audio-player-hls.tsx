"use client";

import Hls from "hls.js";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

export const AudioPlayerHls = ({ m3u8Url }: { m3u8Url: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      // Kiểm tra nếu trình duyệt hỗ trợ HLS natively (Safari, Edge)
      if (audio.canPlayType("application/vnd.apple.mpegurl")) {
        audio.src = m3u8Url; // Nếu hỗ trợ, dùng trực tiếp m3u8 URL
      } else {
        // Nếu không, sử dụng Hls.js để phát m3u8 stream
        const hls = new Hls();
        hls.loadSource(m3u8Url); // Nạp m3u8 stream
        hls.attachMedia(audio); // Gắn stream vào phần tử audio

        // Xử lý sự kiện lỗi
        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            console.error("HLS.js Error: ", data);
          }
        });

        // Hủy hls.js khi component unmount
        return () => {
          hls.destroy();
        };
      }
    }
  }, [m3u8Url]);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Phát audio khi nhấn nút
    }
  };

  return (
    <div className="flex justify-end">
      <Button variant="ghost" onClick={handlePlayAudio}>
        Nghe
      </Button>
      <audio ref={audioRef} controls className="hidden">
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
