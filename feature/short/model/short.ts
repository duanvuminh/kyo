import { SlackMessageDTO } from "@/shared/types/dto/slack-message";
import { Sub } from "@/shared/types/models/sub";
import { mapShortFromDTO } from "./short-mapper";

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

export interface Short {
  id: string;
  content: string;
  title?: string;
  type?: ShortType;
  files?: KFile[];
  poster?: string;
  subVi?: Sub[];
  subJa?: Sub[];
  subs?: Sub[];
  relateShort?: Short[];
  hidden?: boolean;
}

export const Short = {
  fromDTO: (data: SlackMessageDTO): Short => mapShortFromDTO(data),
};

export interface ShortPage {
  shorts: Short[];
  nextPage?: string;
  limit: number;
}
