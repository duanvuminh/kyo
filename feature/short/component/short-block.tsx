"use client";
import { hasYouTubeLink } from "@/core/utils/utils";
import { EpisodeList } from "@/feature/short/component/episode-list";
import { ShortFileViewer } from "@/feature/short/component/short-file";
import { KShortTitleContent } from "@/feature/short/component/short-title-content";
import { Short } from "@/feature/short/model/short";
import { isSubtitle } from "@/feature/short/service/short";
import LazyHlsPlayer from "@/shared/component/lazy-hls-player";
import { useState } from "react";

interface ShortBlockProps {
  short: Short;
}

export function ShortBlock({ short }: ShortBlockProps) {
  const relateShorts = short.relateShort ?? [];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentShort =
    relateShorts.length > 0 ? relateShorts[selectedIndex] : short;

  return (
    <div key={currentShort.id}>
      <KShortTitleContent short={currentShort} />
      {relateShorts.length > 0 && (
        <EpisodeList
          relateShort={relateShorts}
          selectedIndex={selectedIndex}
          onSelect={(_, idx) => setSelectedIndex(idx)}
        />
      )}
      {currentShort.files?.map((file, index) => {
        const url = file.url.replace(/[<>]/g, "");
        const isYoutube = hasYouTubeLink(url);
        const subtitleMode = isSubtitle(currentShort);

        if (subtitleMode && !isYoutube) {
          return (
            <LazyHlsPlayer
              key={index}
              src={url}
              subs={currentShort.subs}
              subVi={currentShort.subVi}
              subJa={currentShort.subJa}
              poster={currentShort.poster}
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
              poster={currentShort.poster}
              subs={currentShort.subs}
            />
          );
        }

        return (
          <ShortFileViewer
            key={index}
            file={{ ...file, url }}
            poster={currentShort.poster}
          />
        );
      })}
    </div>
  );
}
