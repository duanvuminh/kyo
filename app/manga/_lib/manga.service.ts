import {
  createMangaEntry,
  fetchMangaEntities,
  notifyNewMangaCreated,
  postPanelMessage,
  replacePanelMessage,
  updateMangaEntry,
  type MangaEntity,
} from "@/app/manga/_lib/slack.repository";
import type {
  AddClickableAreaInput,
  CreateMangaInput,
} from "@/app/manga/_lib/manga.schema";
import type { Manga, MangaArea, MangaPage, MangaPanel } from "@/app/manga/_lib/manga.types";
import { AppError, ErrorCode } from "@/lib/types";
import matter from "gray-matter";

export { uploadMangaImage } from "@/app/manga/_lib/slack.repository";

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

function parsePanelSvg(raw: string): ParsedPanelSvg {
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

function serializePanelToSvg({
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

function mapToManga({ message, threadMessages }: MangaEntity): Manga {
  const parsed = matter(unescapeHtml(message.text));
  // conversations.replies của Slack đã trả theo thứ tự thời gian tăng dần sẵn, không cần reverse như Discord.
  const panels: MangaPanel[] = threadMessages
    .map((m, chronoIndex) => {
      // Slack tự HTML-escape < > khi post (dù đã tắt mrkdwn ở 1 số tin cũ) → unescape lại trước khi parse SVG
      const panelParsed = matter(unescapeHtml(m.text));
      const index =
        typeof panelParsed.data.index === "number"
          ? panelParsed.data.index
          : chronoIndex;
      return { id: m.ts, index, ...parsePanelSvg(panelParsed.content) };
    })
    .sort((a, b) => a.index - b.index);
  return {
    id: message.ts,
    title: parsed.data.title,
    panels,
  };
}

export const getManga = async ({
  page,
}: {
  page: string;
}): Promise<MangaPage> => {
  const { entities, limit, nextPage } = await fetchMangaEntities({ page });
  return {
    mangaList: entities.map(mapToManga),
    limit,
    nextPage,
  };
};

const OVERLAP_THRESHOLD = 0.3;

function intersectionOverUnion(a: MangaArea, b: MangaArea): number {
  const x1 = Math.max(a.x, b.x);
  const y1 = Math.max(a.y, b.y);
  const x2 = Math.min(a.x + a.width, b.x + b.width);
  const y2 = Math.min(a.y + a.height, b.y + b.height);
  const interArea = Math.max(0, x2 - x1) * Math.max(0, y2 - y1);
  const unionArea = a.width * a.height + b.width * b.height - interArea;
  return unionArea > 0 ? interArea / unionArea : 0;
}

export interface UpdatedPanel {
  id: string;
  index: number;
  imageUrl: string;
  viewBoxWidth: number;
  viewBoxHeight: number;
  areas: MangaArea[];
  replacedCount: number;
}

export const addClickableAreaToPanel = async ({
  threadId,
  messageId,
  index,
  imageUrl,
  viewBoxWidth,
  viewBoxHeight,
  areas,
  newArea,
}: AddClickableAreaInput): Promise<UpdatedPanel> => {
  const keptAreas = areas.filter(
    (area) => intersectionOverUnion(area, newArea) < OVERLAP_THRESHOLD
  );
  const nextAreas = [...keptAreas, newArea];

  const svg = serializePanelToSvg({
    imageUrl,
    viewBoxWidth,
    viewBoxHeight,
    areas: nextAreas,
  });
  const messageBody = `---\nindex: ${index}\n---\n${svg}`;

  const replaced = await replacePanelMessage(threadId, messageId, messageBody);
  if (!replaced?.id) {
    throw new AppError(ErrorCode.SLACK);
  }

  return {
    id: replaced.id,
    index,
    imageUrl,
    viewBoxWidth,
    viewBoxHeight,
    areas: nextAreas,
    replacedCount: areas.length - keptAreas.length,
  };
};

export const updateMangaTitle = async (
  entryId: string,
  title: string
): Promise<boolean> => {
  const content = matter.stringify("", { title });
  return updateMangaEntry(entryId, content);
};

export interface CreatedManga {
  id: string;
}

export const createNewManga = async ({
  title,
  images,
}: CreateMangaInput): Promise<CreatedManga> => {
  const topMessage = matter.stringify("", { title });
  const created = await createMangaEntry(topMessage);
  if (!created) {
    throw new AppError(ErrorCode.SLACK);
  }

  // Đăng tuần tự (không Promise.all) để tránh bị rate-limit
  for (let i = 0; i < images.length; i++) {
    const svg = serializePanelToSvg({
      imageUrl: images[i].url,
      viewBoxWidth: images[i].width,
      viewBoxHeight: images[i].height,
      areas: [],
    });
    const panelPosted = await postPanelMessage(created.threadId, `---\nindex: ${i}\n---\n${svg}`);
    if (!panelPosted?.id) {
      throw new AppError(ErrorCode.SLACK);
    }
  }

  notifyNewMangaCreated();

  return { id: created.entryId };
};
