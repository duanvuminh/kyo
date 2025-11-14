import { parseVTT, splitVTT } from "@/shared/lib/videos";
import { SlackMessageDTO } from "@/shared/types/dto/slack-message";
import { Sub } from "@/shared/types/models/sub";
import matter from "gray-matter";

export enum ShortType {
  SUBTITLE = "subtitle",
  EMBED = "embed",
  OTHER = "other",
}

export interface KFile {
  name: string;
  url: string;
  mimetype: string;
}

export class Short {
  constructor(
    public id: string,
    public content: string,
    public title?: string,
    public type?: ShortType,
    public files?: KFile[],
    public poster?: string,
    public subVi?: Sub[],
    public subJa?: Sub[],
    public subs?: Sub[],
    public relateShort?: Short[]
  ) {}

  static stringToShortType(value: string): ShortType {
    if (Object.values(ShortType).includes(value as ShortType)) {
      return value as ShortType;
    }
    return ShortType.OTHER;
  }

  static fromDTO(data: SlackMessageDTO): Short {
    const parsed = matter(data.text);
    const type = Short.stringToShortType(parsed.data.type);
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
      content: content,
      type: type,
      files: parsed.data.externalFile
        ? [
            {
              name: parsed.data.title,
              url: parsed.data.externalFile,
              mimetype: "video/*",
            },
          ]
        : data.files?.map((item) => {
            return {
              name: item.name,
              url: `/api/file?url=${encodeURIComponent(item.url_private)}`,
              mimetype: item.mimetype,
            };
          }),
      subVi: subInfo.vi,
      subJa: subInfo.ja,
      subs,
      poster: parsed.data.poster,
      relateShort: data.relatedMessages?.map((item) => Short.fromDTO(item)),
    };
  }
}

export interface ShortPage {
  shorts: Short[];
  nextPage?: string;
  limit: number;
}
