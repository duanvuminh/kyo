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
    const match = _matchVTTTimeLine(timeLine);
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
  const viSubs: Sub[] = [];
  const jaSubs: Sub[] = [];

  while (i < lines.length) {
    if (!lines[i] || lines[i] === "WEBVTT") {
      i++;
      continue;
    }

    const isIndex = /^\d+$/.test(lines[i]);
    if (isIndex) i++;

    const timeLine = lines[i];
    const match = _matchVTTTimeLine(timeLine);
    if (!match) {
      i++;
      continue;
    }
    const start = timeStringToSeconds(match[1].replace(",", "."));
    const end = timeStringToSeconds(match[2].replace(",", "."));
    i++;

    const jaLines: string[] = [];
    const viLines: string[] = [];
    while (i < lines.length && lines[i]) {
      if (lines[i].startsWith("vn:") || lines[i].startsWith("vi:")) {
        viLines.push(lines[i].replace(/^vn:/, "").replace(/^vi:/, "").trim());
      } else {
        jaLines.push(lines[i].replace(/^ja:/, "").trim());
      }
      i++;
    }

    if (viLines.length) {
      viSubs.push({
        start,
        end,
        content: viLines.join("\n"),
      });
    }
    if (jaLines.length) {
      jaSubs.push({
        start,
        end,
        content: jaLines.join("\n"),
      });
    }

    i++;
  }

  return {
    vi: viSubs,
    ja: jaSubs,
  };
}

function _matchVTTTimeLine(line: string) {
  return line.match(
    /^(\d{2}:\d{2}:\d{2}[.,]\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}[.,]\d{3})$/
  );
}
