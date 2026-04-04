"use client";

import { useSvgTooltip } from "@/feature/manga/component/useSvgTooltip";
import { Manga, MangaPanel } from "@/feature/manga/model/manga";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/component/ui/popover";

const KMangaPanel = ({ panel }: { panel: MangaPanel }) => {
  const { tooltip, handleClick, close } = useSvgTooltip();

  if (!panel.content) {
    return null;
  }

  return (
    <Popover
      open={!!tooltip}
      onOpenChange={(open) => {
        if (!open) {
          close();
        }
      }}
    >
      <div className="relative w-full" onClick={handleClick}>
        <div dangerouslySetInnerHTML={{ __html: panel.content }} />
        {tooltip && (
          <PopoverTrigger
            className="absolute size-0 p-0 border-0"
            style={{ left: tooltip.x, top: tooltip.y }}
          />
        )}
      </div>
      <PopoverContent
        className="text-sm whitespace-pre-line w-auto max-w-xs"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {tooltip?.text}
      </PopoverContent>
    </Popover>
  );
};

export const KManga = ({ manga }: { manga: Manga }) => {
  return (
    <>
      <h1>{manga.title}</h1>
      <div className="flex flex-col items-center gap-1 not-prose">
        {manga.panels.map((panel, i) => (
          <KMangaPanel key={i} panel={panel} />
        ))}
      </div>
    </>
  );
};
