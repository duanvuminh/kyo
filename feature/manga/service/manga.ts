import { mapToManga, serializePanelToSvg } from "@/feature/manga/mapper/manga.mapper";
import {
  fetchMangaEntities,
  MANGA_CHANNEL_ID,
} from "@/feature/manga/repository/manga";
import type {
  AddClickableAreaInput,
  CreateMangaInput,
} from "@/feature/manga/schema/manga.schema";
import type { MangaArea, MangaPage } from "@/feature/manga/type/manga.domain";
import { discordChannelTag, discordThreadTag } from "@/shared/config/cache";
import { storage } from "@/shared/lib/firebase-admin";
import {
  createThreadFromMessage,
  deleteDiscordMessage,
  sendDiscordMessage,
  sendMessageToThread,
} from "@/shared/repository/discord";
import { AppError, ErrorCode } from "@/shared/type/models/error";
import matter from "gray-matter";
import { revalidateTag } from "next/cache";

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

  revalidateTag(discordThreadTag(threadId), "max");

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

export async function uploadMangaImage(imageBase64: string): Promise<string> {
  const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");

  const fileName = `manga-images/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;
  const file = storage.file(fileName);
  await file.save(buffer, {
    metadata: { contentType: "image/jpeg" },
    public: true,
  });

  return `https://storage.googleapis.com/${storage.name}/${fileName}`;
}

export interface CreatedManga {
  id: string;
}

export const createNewManga = async ({
  title,
  images,
}: CreateMangaInput): Promise<CreatedManga> => {
  const topMessage = matter.stringify("", { title });
  const posted = await sendDiscordMessage({
    channelId: MANGA_CHANNEL_ID,
    message: topMessage,
  });
  if (!posted?.id) {
    throw new AppError(ErrorCode.DISCORD);
  }

  const thread = await createThreadFromMessage({
    channelId: MANGA_CHANNEL_ID,
    messageId: posted.id,
    name: title.slice(0, 100),
  });
  if (!thread?.id) {
    throw new AppError(ErrorCode.DISCORD);
  }

  // Đăng tuần tự (không Promise.all) để tránh bị Discord rate-limit
  for (let i = 0; i < images.length; i++) {
    const svg = serializePanelToSvg({
      imageUrl: images[i].url,
      viewBoxWidth: images[i].width,
      viewBoxHeight: images[i].height,
      areas: [],
    });
    const panelPosted = await sendMessageToThread({
      threadId: thread.id,
      message: `---\nindex: ${i}\n---\n${svg}`,
    });
    if (!panelPosted?.id) {
      throw new AppError(ErrorCode.DISCORD);
    }
  }

  revalidateTag(discordChannelTag(MANGA_CHANNEL_ID), "max");

  return { id: posted.id };
};
