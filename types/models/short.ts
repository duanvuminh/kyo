import { SlackMessageDTO } from "@/types/dto/slack-message";
import matter from "gray-matter";

export enum ShortType {
  SUBTITLE = "subtitle",
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
    public files?: KFile[]
  ) {}

  static stringToShortType(value: string): ShortType {
    if (Object.values(ShortType).includes(value as ShortType)) {
      return value as ShortType;
    }
    return ShortType.OTHER;
  }

  static fromDTO(data: SlackMessageDTO): Short {
    const parsed = matter(data.text);
    return {
      id: data.ts,
      title: parsed.data.title,
      content: parsed.content.replaceAll("--&gt;", "-->"),
      type: Short.stringToShortType(parsed.data.type),
      files: data.files?.map((item) => {
        return {
          name: item.name,
          url: `/api/file?url=${encodeURIComponent(item.url_private)}`,
          mimetype: item.mimetype,
        };
      }),
    };
  }
}

export interface ShortPage {
  shorts: Short[];
  nextPage?: string;
  limit: number;
}
