import matter from "gray-matter";

export interface DiscordMessage {
  content: string;
  id: string;
}

export class DiscordMessageDto {
  constructor(
    public id: string,
    public content: string,
    public title: string,
    public image: string,
    public source: string
  ) {}
  static fromJson(json: DiscordMessage) {
    const parsed = matter(json.content);
    return {
      id: json.id,
      title: parsed.data.title,
      image: parsed.data.image,
      source: parsed.data.source,
      content: parsed.content,
    };
  }
}
