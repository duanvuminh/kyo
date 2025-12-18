"use client";

import { hasYouTubeLink } from "@/core/utils/utils";
import { ShortFileViewer } from "@/feature/short/component/short-file";
import { KFile, Short } from "@/feature/short/model/short";
import { isSubtitle } from "@/feature/short/service/short";
import LazyHlsPlayer from "@/shared/component/lazy-hls-player";

interface ShortFileItemProps {
  file: KFile;
  short: Short;
  index: number;
}

export function ShortFileItem({ file, short, index }: ShortFileItemProps) {
  const url = file.url.replace(/[<>]/g, "");
  const isYoutube = hasYouTubeLink(url);
  const subtitleMode = isSubtitle(short);

  if (subtitleMode && !isYoutube) {
    return (
      <LazyHlsPlayer
        key={index}
        src={url}
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
        file={{ ...file, url }}
        poster={short.poster}
        subs={short.subs}
      />
    );
  }

  return <ShortFileViewer key={index} file={{ ...file, url }} poster={short.poster} />;
}
