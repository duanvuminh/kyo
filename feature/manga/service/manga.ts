import { mapToManga, serializePanelToSvg } from "@/feature/manga/mapper/manga.mapper";
import {
  createMangaEntry,
  fetchMangaEntities,
  notifyNewMangaCreated,
  postPanelMessage,
  replacePanelMessage,
  updateMangaEntry,
} from "@/feature/manga/repository/manga";
import type {
  AddClickableAreaInput,
  CreateMangaInput,
} from "@/feature/manga/schema/manga.schema";
import type { MangaArea, MangaPage } from "@/feature/manga/type/manga.domain";
import { AppError, ErrorCode } from "@/shared/type/models/error";
import matter from "gray-matter";

export { uploadMangaImage } from "@/feature/manga/repository/manga";

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
