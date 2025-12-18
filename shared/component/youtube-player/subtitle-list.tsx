"use client";

import { Button } from "@/shared/component/ui/button";
import { Sub } from "@/shared/types/models/sub";
import { Fragment, RefObject } from "react";

interface SubtitleListProps {
  subs: Sub[];
  currentTime: number;
  containerRef: RefObject<HTMLDivElement | null>;
  itemRefs: RefObject<(HTMLDivElement | null)[]>;
  onSubtitleClick: (sub: Sub) => void;
}

export function YouTubeSubtitleList({ subs, currentTime, containerRef, itemRefs, onSubtitleClick }: SubtitleListProps) {
  return (
    <div ref={containerRef} className="p-4 max-h-[400px] overflow-y-auto space-y-2 relative">
      {subs.map((sub, index) => {
        const nextStart = subs[index + 1]?.start ?? sub.end;
        const isCurrentSub = sub.start <= currentTime && currentTime < nextStart;
        return (
          <div key={index} ref={(el) => { itemRefs.current[index] = el; }} className={isCurrentSub ? "flex text-primary" : "flex text-muted"}>
            <Button size="sm" variant="ghost" className="rounded-full transition hover:scale-110" onClick={() => onSubtitleClick(sub)}>▶</Button>
            <div>
              {sub.content.split("\n").map((line, i) => (
                <Fragment key={i}>{line}{i < sub.content.split("\n").length - 1 && <br />}</Fragment>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
