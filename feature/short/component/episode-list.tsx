"use client";

import { Short } from "@/feature/short/model/short";
import { Button } from "@/shared/component/ui/button";

interface EpisodeListProps {
  relateShort: Short[];
  onSelect: (short: Short, index: number) => void;
  selectedIndex?: number;
}

export function EpisodeList({
  relateShort,
  onSelect,
  selectedIndex = 0,
}: EpisodeListProps) {
  if (!relateShort || relateShort.length === 0) return null;

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {relateShort.map((item, idx) => (
        <Button
          key={item.id}
          variant={"ghost"}
          className={idx === selectedIndex ? "" : "text-muted"}
          onClick={() => onSelect(item, idx)}
          size="sm"
        >
          Tập {idx + 1}
        </Button>
      ))}
    </div>
  );
}
