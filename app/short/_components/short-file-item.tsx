"use client";

import { ShortFileViewer } from "@/app/short/_components/short-file";
import { KFile, Short, isSubtitle } from "@/app/short/_lib/short.types";
import LazyHlsPlayer from "@/lib/components/lazy-hls-player";

interface ShortFileItemProps {
  file: KFile;
  short: Short;
  index: number;
}

export function ShortFileItem({ file, short, index }: ShortFileItemProps) {
  const isYoutube = file.source.kind === "youtube";
  const subtitleMode = isSubtitle(short);

  if (subtitleMode && !isYoutube) {
    return (
      <LazyHlsPlayer
        key={index}
        src={file.url}
        subs={short.subs}
        subVi={short.subVi}
        subJa={short.subJa}
        poster={short.poster}
        controls
        className="max-w-full rounded my-2"
      />
    );
  }

  if (subtitleMode && isYoutube) {
    return (
      <ShortFileViewer
        key={index}
        file={file}
        poster={short.poster}
        subs={short.subs}
        subVi={short.subVi}
        subJa={short.subJa}
      />
    );
  }

  return <ShortFileViewer key={index} file={file} poster={short.poster} />;
}
