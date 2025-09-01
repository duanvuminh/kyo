import { timeStringToSeconds } from "@/core/utils/utils";
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
    public subVi?: string,
    public subJa?: string,
    public subs?: Sub[]
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
    let subInfo: { vi?: string; ja?: string } = {};
    let content = parsed.content.replaceAll("--&gt;", "-->");
    if (type === ShortType.SUBTITLE) {
      subs = parseVTT(content);
      console.log(subs);
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
    };
  }
}

export interface ShortPage {
  shorts: Short[];
  nextPage?: string;
  limit: number;
}

const parseVTT = (vtt: string): Sub[] => {
  const lines = vtt.split("\n").map((line) => line.trim());
  const subs: Sub[] = [];

  let i = 0;
  while (i < lines.length) {
    if (!lines[i] || lines[i] === "WEBVTT") {
      i++;
      continue;
    }

    const indexLine = lines[i];
    const isIndex = /^\d+$/.test(indexLine);
    if (isIndex) i++;

    const timeLine = lines[i];
    const match = timeLine.match(
      /^(\d{2}:\d{2}:\d{2}\.\d{3})\s-->\s(\d{2}:\d{2}:\d{2}\.\d{3})$/
    );
    if (!match) {
      i++;
      continue;
    }

    const start = timeStringToSeconds(match[1]);
    const end = timeStringToSeconds(match[2]);
    i++;

    const contentLines: string[] = [];
    while (i < lines.length && lines[i]) {
      if (lines[i].startsWith("vi:") || lines[i].startsWith("vn:")) {
        contentLines.push(
          lines[i].replace("vi:", "").replace("vn:", "").trim()
        );
      } else {
        contentLines.push(lines[i].replace("ja:", "").trim());
      }
      i++;
    }
    subs.push({
      start,
      end,
      content: contentLines.join("\n"),
    });
    i++;
  }

  return subs;
};
export function splitVTT(vtt: string) {
  const lines = vtt.split("\n").map((line) => line.trim());
  let i = 0;
  let blockIndex = 1;
  const viBlocks: string[] = ["WEBVTT"];
  const jaBlocks: string[] = ["WEBVTT"];

  while (i < lines.length) {
    if (!lines[i] || lines[i] === "WEBVTT") {
      i++;
      continue;
    }

    // Index line
    const isIndex = /^\d+$/.test(lines[i]);
    if (isIndex) i++;

    // Time line
    const timeLine = lines[i];
    const match = timeLine.match(
      /^(\d{2}:\d{2}:\d{2}\.\d{3})\s-->\s(\d{2}:\d{2}:\d{2}\.\d{3})$/
    );
    if (!match) {
      i++;
      continue;
    }
    i++;

    // Content lines
    let jaLine = "";
    let viLine = "";
    while (i < lines.length && lines[i]) {
      if (lines[i].startsWith("vn:")) {
        viLine = lines[i].replace(/^vn:/, "").trim();
      } else if (lines[i].startsWith("vi:")) {
        viLine = lines[i].replace(/^vi:/, "").trim();
      } else {
        // Nếu không có prefix, coi là tiếng Nhật
        jaLine = lines[i];
      }
      i++;
    }

    // Build vi block
    if (viLine) {
      viBlocks.push(""); // Thêm dòng trống trước mỗi block
      viBlocks.push(`${blockIndex}`);
      viBlocks.push(timeLine);
      viBlocks.push(viLine);
    }

    // Build ja block
    if (jaLine) {
      jaBlocks.push(""); // Thêm dòng trống trước mỗi block
      jaBlocks.push(`${blockIndex}`);
      jaBlocks.push(timeLine);
      jaBlocks.push(jaLine);
    }

    blockIndex++;
    i++;
  }

  return {
    vi: viBlocks.join("\n"),
    ja: jaBlocks.join("\n"),
  };
}
