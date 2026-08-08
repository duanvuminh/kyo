import { fetchShortEntities } from "@/app/short/_lib/slack.repository";
import type { KFile, Short, ShortPage, ShortType } from "@/app/short/_lib/short.types";
import { resolveFileKind } from "@/lib/utils/file-kind";
import { mapDatas } from "@/lib/utils/data-convert";
import { parseVTT, splitVTT } from "@/lib/utils/videos";
import type { SlackMessageEntity } from "@/lib/repositories/slack";
import type { Sub } from "@/lib/types";
import matter from "gray-matter";

// Slack tự bọc URL trần bằng <url> hoặc <url|label> khi hiển thị trong text (không nhất quán,
// tuỳ cách gõ/paste) — phải strip trước khi dùng làm src, nếu không URL sẽ chứa dấu < > gây lỗi.
function extractUrl(raw: string): string {
  const match = raw.match(/^<([^|>]+)(?:\|[^>]*)?>$/);
  return match ? match[1] : raw;
}

function mapFiles(
  data: SlackMessageEntity,
  metadata: { externalFile?: string; title?: string }
): KFile[] | undefined {
  if (metadata.externalFile) {
    const mimetype = "video/*";
    const url = extractUrl(metadata.externalFile);
    return [
      {
        name: metadata.title ?? "",
        url,
        mimetype,
        source: resolveFileKind(url, mimetype),
      },
    ];
  }

  return data.files?.map((item) => ({
    name: item.name,
    url: `/api/file?url=${encodeURIComponent(item.url_private)}`,
    mimetype: item.mimetype,
    source: resolveFileKind(item.url_private, item.mimetype),
  }));
}

function stringToShortType(value: string): ShortType {
  const values = ["subtitle", "other"] as const;
  return (values.find((v) => v === value) ?? "other") as ShortType;
}

function slackMessageToShort(data: SlackMessageEntity): Short {
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

export async function getShort({ page }: { page: string }): Promise<ShortPage> {
  const { entities, limit, nextPage } = await fetchShortEntities({ page });
  return {
    shorts: mapDatas(entities, slackMessageToShort),
    limit,
    nextPage,
  };
}
