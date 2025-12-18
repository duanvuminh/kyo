import { parseVTT, splitVTT } from "@/shared/lib/videos";
import { SlackMessageDTO } from "@/shared/types/dto/slack-message";
import { Sub } from "@/shared/types/models/sub";
import matter from "gray-matter";
import { KFile, Short, ShortType } from "./short";

/**
 * Map SlackMessageDTO sang Short model
 */
export function mapShortFromDTO(data: SlackMessageDTO): Short {
  const parsed = matter(data.text);
  const type = stringToShortType(parsed.data.type);

  let subs: Sub[] = [];
  let subInfo: { vi?: Sub[]; ja?: Sub[] } = {};
  let content = parsed.content.replaceAll("--&gt;", "-->");

  if (type === ShortType.SUBTITLE) {
    subs = parseVTT(content);
    subInfo = splitVTT(content);
    content = "";
  }

  return {
    id: data.ts,
    title: parsed.data.title,
    content,
    type,
    files: mapFiles(data, parsed.data),
    subVi: subInfo.vi,
    subJa: subInfo.ja,
    subs,
    poster: parsed.data.poster,
    relateShort: data.relatedMessages?.map(mapShortFromDTO),
    hidden: parsed.data.hidden === true,
  };
}

function stringToShortType(value: string): ShortType {
  if (Object.values(ShortType).includes(value as ShortType)) {
    return value as ShortType;
  }
  return ShortType.OTHER;
}

function mapFiles(
  data: SlackMessageDTO,
  metadata: { externalFile?: string; title?: string }
): KFile[] | undefined {
  if (metadata.externalFile) {
    return [
      {
        name: metadata.title ?? "",
        url: metadata.externalFile,
        mimetype: "video/*",
      },
    ];
  }

  return data.files?.map((item) => ({
    name: item.name,
    url: `/api/file?url=${encodeURIComponent(item.url_private)}`,
    mimetype: item.mimetype,
  }));
}
