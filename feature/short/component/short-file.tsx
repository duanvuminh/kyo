import { KFile } from "@/feature/short/model/short";
import FacebookVideoEmbed from "@/shared/component/facebook-video";
import HlsPlayer from "@/shared/component/hls-player/hls-player";
import YouTubePlayer from "@/shared/component/youtube-player/youtube-player";
import { Sub } from "@/shared/types/models/sub";
import Image from "next/image";

export function ShortFileViewer({
  file,
  poster,
  subs,
}: {
  file: KFile;
  poster?: string;
  subs?: Sub[];
}) {
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
  if (file.url.startsWith("https://www.facebook.com/")) {
    return <FacebookVideoEmbed videoUrl={file.url} />;
  }

  if (file.url.startsWith("https://www.youtube.com/")) {
    return <YouTubePlayer videoId={file.url.split("v=")[1]} subs={subs} />;
  }

  if (file.mimetype.startsWith("video/")) {
    return (
      <HlsPlayer
        controls
        className="max-w-full max-h-96 rounded my-2"
        poster={poster}
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
