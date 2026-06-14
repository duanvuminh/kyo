import type { KFile, Short, ShortType } from "@/feature/short/type/short.domain";
import { parseVTT, splitVTT } from "@/shared/lib/videos";
import type { SlackMessageEntity } from "@/shared/type/dto/slack-message";
import type { Sub } from "@/shared/type/models/sub";
import matter from "gray-matter";

export function slackMessageToShort(data: SlackMessageEntity): Short {
  const parsed = matter(data.text);
  const type = stringToShortType(parsed.data.type);

  let subs: Sub[] = [];
  let subInfo: { vi?: Sub[]; ja?: Sub[] } = {};
  let content = parsed.content.replaceAll("--&gt;", "-->");

  if (type === "subtitle") {
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
    relateShort: data.relatedMessages?.map(slackMessageToShort),
    hidden: parsed.data.hidden === true,
  };
}

function stringToShortType(value: string): ShortType {
  const values = ["subtitle", "embed", "other"] as const;
  return (values.find((v) => v === value) ?? "other") as ShortType;
}

function mapFiles(
  data: SlackMessageEntity,
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
