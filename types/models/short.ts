import { SlackMessageDTO } from "@/types/dto/slack-message";
import matter from "gray-matter";

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
    public useSub?: boolean,
    public files?: KFile[]
  ) {}
  static fromDTO(data: SlackMessageDTO): Short {
    const parsed = matter(data.text);
    return {
      id: data.ts,
      title: parsed.data.title,
      content: parsed.content.replaceAll("--&gt;", "-->"),
      useSub: parsed.data.useSub,
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
