"use client";

import { EpisodeList } from "@/feature/short/component/episode-list";
import { ShortFileItem } from "@/feature/short/component/short-file-item";
import { KShortTitleContent } from "@/feature/short/component/short-title-content";
import { Short } from "@/feature/short/model/short";
import { useState } from "react";

interface ShortBlockProps {
  short: Short;
}

export function ShortBlock({ short }: ShortBlockProps) {
  const relateShorts = short.relateShort ?? [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentShort = relateShorts.length > 0 ? relateShorts[selectedIndex] : short;

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
      {currentShort.files?.map((file, index) => (
        <ShortFileItem key={index} file={file} short={currentShort} index={index} />
      ))}
    </div>
  );
}
