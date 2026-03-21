"use client";

import Image from "next/image";
import { useSvgTooltip } from "@/feature/manga/component/useSvgTooltip";
import { Manga, MangaPanel } from "@/feature/manga/model/manga";

const KMangaPanel = ({ panel }: { panel: MangaPanel }) => {
  const { tooltip, handleClick } = useSvgTooltip();

  if (!panel.content) {
    return <Image src={panel.image} alt="" width={panel.width} height={panel.height} className="w-full" />;
  }

  return (
    <div className="relative w-full" onClick={handleClick}>
      <div dangerouslySetInnerHTML={{ __html: panel.content }} />
      {tooltip && (
        <div
          className="fixed z-50 max-w-xs rounded bg-black/80 px-3 py-2 text-sm text-white whitespace-pre-line"
          style={{ left: tooltip.x + 8, top: tooltip.y + 8 }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
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
