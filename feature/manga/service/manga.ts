import { mapToManga, serializePanelToSvg } from "@/feature/manga/mapper/manga.mapper";
import { fetchMangaEntities } from "@/feature/manga/repository/manga";
import type { AddClickableAreaInput } from "@/feature/manga/schema/manga.schema";
import type { MangaArea, MangaPage } from "@/feature/manga/type/manga.domain";
import {
  deleteDiscordMessage,
  sendMessageToThread,
} from "@/shared/repository/discord";
import { AppError, ErrorCode } from "@/shared/type/models/error";

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
  // Đăng lại luôn rơi xuống cuối thread theo thời gian → ghi index vào frontmatter
  // để mapper sắp xếp lại đúng vị trí gốc, không phụ thuộc thứ tự đăng trên Discord.
  const messageBody = `---\nindex: ${index}\n---\n${svg}`;

  // Discord bot không thể PATCH tin nhắn do user đăng, chỉ tác giả mới sửa được
  // → đăng tin nhắn mới rồi xoá tin nhắn cũ (đăng trước để tránh mất nội dung nếu xoá thất bại)
  const posted = await sendMessageToThread({ threadId, message: messageBody });
  if (!posted?.id) {
    throw new AppError(ErrorCode.DISCORD);
  }

  await deleteDiscordMessage({ channelId: threadId, messageId });

  return {
    id: posted.id,
    index,
    imageUrl,
    viewBoxWidth,
    viewBoxHeight,
    areas: nextAreas,
    replacedCount: areas.length - keptAreas.length,
  };
};
