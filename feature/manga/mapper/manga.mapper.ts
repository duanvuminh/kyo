import type { MangaEntity } from "@/feature/manga/repository/manga";
import type { Manga, MangaArea, MangaPanel } from "@/feature/manga/type/manga.domain";
import matter from "gray-matter";

const VIEWBOX_REGEX = /viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/;
const IMAGE_REGEX = /<image[^>]*href="([^"]*)"/;
const AREA_REGEX =
  /<a[^>]*title="([^"]*)"[^>]*>\s*<rect class="image-mapper-shape" x="(-?\d+(?:\.\d+)?)" y="(-?\d+(?:\.\d+)?)" width="(-?\d+(?:\.\d+)?)" height="(-?\d+(?:\.\d+)?)"\/>\s*<\/a>/g;

function unescapeHtml(text: string): string {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

interface ParsedPanelSvg {
  imageUrl: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
  areas: MangaArea[];
}

export function parsePanelSvg(raw: string): ParsedPanelSvg {
  const viewBoxMatch = raw.match(VIEWBOX_REGEX);
  const imageMatch = raw.match(IMAGE_REGEX);
  const areas: MangaArea[] = [...raw.matchAll(AREA_REGEX)].map(
    ([, title, x, y, width, height]) => ({
      title: unescapeHtml(title),
      x: Number(x),
      y: Number(y),
      width: Number(width),
      height: Number(height),
    })
  );

  return {
    imageUrl: imageMatch?.[1] ?? "",
    viewBoxWidth: viewBoxMatch ? Number(viewBoxMatch[1]) : 0,
    viewBoxHeight: viewBoxMatch ? Number(viewBoxMatch[2]) : 0,
    areas,
  };
}

export function serializePanelToSvg({
  imageUrl,
  viewBoxWidth,
  viewBoxHeight,
  areas,
}: ParsedPanelSvg): string {
  const areaTags = areas
    .map(
      (area) =>
        `<a href="#" title="${escapeHtml(area.title)}"><rect class="image-mapper-shape" x="${area.x}" y="${area.y}" width="${area.width}" height="${area.height}"/></a>`
    )
    .join("");
  return `<svg style="width:100%" viewBox="0 0 ${viewBoxWidth} ${viewBoxHeight}"><image href="${imageUrl}" width="${viewBoxWidth}"/>${areaTags}</svg>`;
}

export function mapToManga({ message, threadMessages }: MangaEntity): Manga {
  const parsed = matter(message.content);
  const panels: MangaPanel[] = [...threadMessages]
    .reverse()
    .map((m, chronoIndex) => {
      const panelParsed = matter(m.content);
      const index =
        typeof panelParsed.data.index === "number"
          ? panelParsed.data.index
          : chronoIndex;
      return { id: m.id, index, ...parsePanelSvg(panelParsed.content) };
    })
    .sort((a, b) => a.index - b.index);
  return {
    id: message.id,
    title: parsed.data.title,
    panels,
  };
}
