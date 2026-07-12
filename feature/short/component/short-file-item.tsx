"use client";

import { ShortFileViewer } from "@/feature/short/component/short-file";
import { KFile, Short } from "@/feature/short/type/short.domain";
import { isSubtitle } from "@/feature/short/type/short.view-model";
import LazyHlsPlayer from "@/shared/component/lazy-hls-player";

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
