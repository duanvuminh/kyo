"use client";

import { EpisodeList } from "@/feature/short/component/episode-list";
import { ShortFileItem } from "@/feature/short/component/short-file-item";
import { KShortTitleContent } from "@/feature/short/component/short-title-content";
import { Short } from "@/feature/short/type/short.domain";
import { useState } from "react";

interface ShortBlockProps {
  short: Short;
}

export function ShortBlock({ short }: ShortBlockProps) {
  const relateShorts = short.relateShort ?? [];
  // short chính luôn là "tập 1", các reply thật (đã bỏ trùng ở parseRelatedItems) là tập tiếp theo.
  const episodes = relateShorts.length > 0 ? [short, ...relateShorts] : [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentShort = episodes.length > 0 ? episodes[selectedIndex] : short;

  return (
    <div key={currentShort.id}>
      <KShortTitleContent short={currentShort} />
      {episodes.length > 0 && (
        <EpisodeList
          relateShort={episodes}
          selectedIndex={selectedIndex}
          onSelect={(_, idx) => setSelectedIndex(idx)}
        />
      )}
      {currentShort.files?.map((file, index) => (
        <ShortFileItem key={index} file={file} short={currentShort} index={index} />
      ))}
    </div>
  );
}
