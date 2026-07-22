import { mapToManga } from "@/feature/manga/mapper/manga.mapper";
import { fetchMangaEntities } from "@/feature/manga/repository/manga";
import type { AddClickableAreaInput } from "@/feature/manga/schema/manga.schema";
import type { MangaPage } from "@/feature/manga/type/manga.domain";
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

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export interface UpdatedPanel {
  id: string;
  index: number;
  content: string;
}

export const addClickableAreaToPanel = async ({
  threadId,
  messageId,
  index,
  content,
  title,
  x,
  y,
  width,
  height,
}: AddClickableAreaInput): Promise<UpdatedPanel> => {
  const escapedTitle = escapeHtml(title);
  const shape = `<a href="#" title="${escapedTitle}"><rect class="image-mapper-shape" x="${x}" y="${y}" width="${width}" height="${height}"/></a>`;
  const newContent = content.includes("</svg>")
    ? content.replace("</svg>", `${shape}</svg>`)
    : content;
  // Đăng lại luôn rơi xuống cuối thread theo thời gian → ghi index vào frontmatter
  // để mapper sắp xếp lại đúng vị trí gốc, không phụ thuộc thứ tự đăng trên Discord.
  const messageBody = `---\nindex: ${index}\n---\n${newContent}`;

  // Discord bot không thể PATCH tin nhắn do user đăng, chỉ tác giả mới sửa được
  // → đăng tin nhắn mới rồi xoá tin nhắn cũ (đăng trước để tránh mất nội dung nếu xoá thất bại)
  const posted = await sendMessageToThread({ threadId, message: messageBody });
  if (!posted?.id) {
    throw new AppError(ErrorCode.DISCORD);
  }

  await deleteDiscordMessage({ channelId: threadId, messageId });

  return { id: posted.id, index, content: newContent };
};
