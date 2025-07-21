import HlsPlayer from "@/component/hls-player/hls-player";
import { KFile } from "@/feature/short/model/short";
import Image from "next/image";

export function ShortFileViewer({ file }: { file: KFile }) {
  if (file.mimetype.startsWith("image/")) {
    return (
      <div className="relative h-50">
        <Image src={file.url} alt={file.name} fill className="object-contain" />
      </div>
    );
  }

  if (file.mimetype === "application/pdf") {
    return (
      <iframe
        src={file.url}
        title={file.name}
        className="w-full h-96 border rounded my-2"
      />
    );
  }

  if (file.mimetype.startsWith("video/")) {
    return (
      <HlsPlayer
        controls
        className="max-w-full max-h-96 rounded my-2"
        src={file.url}
      />
    );
  }
  return (
    <a
      href={file.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 underline block"
    >
      📎 {file.name}
    </a>
  );
}
