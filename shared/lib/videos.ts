import { timeStringToSeconds } from "@/core/utils/utils";
import { Sub } from "@/shared/types/models/sub";

export const videoMarketUrl = (videoId: string): string => {
  const suffix = videoId.includes("2Y") ? "002999H01" : "001999H01";
  return `https://www.videomarket.jp/player/${videoId}/A${videoId}${suffix}`;
};

export const parseVTT = (vtt: string): Sub[] => {
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
      /^(\d{2}:\d{2}:\d{2}[.,]\d{3})\s-->\s(\d{2}:\d{2}:\d{2}[.,]\d{3})$/
    );
    if (!match) {
      i++;
      continue;
    }

    const start = timeStringToSeconds(match[1].replace(",", "."));
    const end = timeStringToSeconds(match[2].replace(",", "."));
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
    let processingVi = false;
    while (i < lines.length && lines[i]) {
      if (lines[i].startsWith("vn:")) {
        processingVi = true;
        viLine += lines[i].replace(/^vn:/, "").trim();
      } else if (lines[i].startsWith("vi:")) {
        processingVi = true;
        viLine += lines[i].replace(/^vi:/, "").trim();
      } else if (processingVi) {
        viLine += "\n" + lines[i];
        if (lines[i] === "\n") {
          processingVi = false;
        }
      } else {
        if (!processingVi) jaLine += lines[i];
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
