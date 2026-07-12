import { KFile } from "@/feature/short/type/short.domain";
import FacebookVideoEmbed from "@/shared/component/facebook-video";
import HlsPlayer from "@/shared/component/hls-player/hls-player";
import YouTubePlayer from "@/shared/component/youtube-player/youtube-player";
import { Sub } from "@/shared/type/models/sub";
import Image from "next/image";

function ImageViewer({ file }: { file: KFile }) {
  return (
    <div className="relative h-50">
      <Image src={file.url} alt={file.name} fill className="object-contain" />
    </div>
  );
}

function PdfViewer({ file }: { file: KFile }) {
  return <iframe src={file.url} title={file.name} className="w-full h-96 border rounded my-2" />;
}

function VideoViewer({ file, poster }: { file: KFile; poster?: string }) {
  return <HlsPlayer controls className="max-w-full max-h-96 rounded my-2" poster={poster} src={file.url} />;
}

function FileLink({ file }: { file: KFile }) {
  return (
    <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline block">
      📎 {file.name}
    </a>
  );
}

export function ShortFileViewer({ file, poster, subs }: { file: KFile; poster?: string; subs?: Sub[] }) {
  switch (file.source.kind) {
    case "image":
      return <ImageViewer file={file} />;
    case "pdf":
      return <PdfViewer file={file} />;
    case "facebook":
      return <FacebookVideoEmbed videoUrl={file.url} />;
    case "youtube":
      return <YouTubePlayer videoId={file.source.videoId} subs={subs} />;
    case "video":
      return <VideoViewer file={file} poster={poster} />;
    case "file":
      return <FileLink file={file} />;
  }
}
