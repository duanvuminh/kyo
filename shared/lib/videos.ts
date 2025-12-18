import { timeStringToSeconds } from "@/core/utils/utils";
import { Sub } from "@/shared/types/models/sub";

export const videoMarketUrl = (videoId: string): string => {
  const suffix = videoId.includes("2Y") ? "002999H01" : "001999H01";
  return `https://www.videomarket.jp/player/${videoId}/A${videoId}${suffix}`;
};

function _matchVTTTimeLine(line: string) {
  return line.match(/^(\d{2}:\d{2}:\d{2}[.,]\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}[.,]\d{3})$/);
}

function isViLine(line: string) { return line.startsWith("vn:") || line.startsWith("vi:"); }
function parseViLine(line: string) { return line.replace(/^vn:/, "").replace(/^vi:/, "").trim(); }
function parseJaLine(line: string) { return line.replace(/^ja:/, "").trim(); }

function parseSubLines(lines: string[], startIndex: number) {
  const jaLines: string[] = [], viLines: string[] = [];
  let i = startIndex;
  while (i < lines.length && lines[i]) {
    if (isViLine(lines[i])) { viLines.push(parseViLine(lines[i])); }
    else { jaLines.push(parseJaLine(lines[i])); }
    i++;
  }
  return { jaLines, viLines, nextIndex: i };
}

export const parseVTT = (vtt: string): Sub[] => {
  const lines = vtt.split("\n").map((line) => line.trim());
  const subs: Sub[] = [];
  let i = 0;
  while (i < lines.length) {
    if (!lines[i] || lines[i] === "WEBVTT") { i++; continue; }
    if (/^\d+$/.test(lines[i])) { i++; }
    const match = _matchVTTTimeLine(lines[i]);
    if (!match) { i++; continue; }
    const start = timeStringToSeconds(match[1].replace(",", ".")), end = timeStringToSeconds(match[2].replace(",", "."));
    i++;
    const contentLines: string[] = [];
    while (i < lines.length && lines[i]) {
      contentLines.push(isViLine(lines[i]) ? parseViLine(lines[i]) : parseJaLine(lines[i]));
      i++;
    }
    subs.push({ start, end, content: contentLines.join("\n") });
    i++;
  }
  return subs;
};

export function splitVTT(vtt: string) {
  const lines = vtt.split("\n").map((line) => line.trim());
  let i = 0;
  const viSubs: Sub[] = [], jaSubs: Sub[] = [];
  while (i < lines.length) {
    if (!lines[i] || lines[i] === "WEBVTT") { i++; continue; }
    if (/^\d+$/.test(lines[i])) { i++; }
    const match = _matchVTTTimeLine(lines[i]);
    if (!match) { i++; continue; }
    const start = timeStringToSeconds(match[1].replace(",", ".")), end = timeStringToSeconds(match[2].replace(",", "."));
    i++;
    const { jaLines, viLines, nextIndex } = parseSubLines(lines, i);
    i = nextIndex;
    if (viLines.length) { viSubs.push({ start, end, content: viLines.join("\n") }); }
    if (jaLines.length) { jaSubs.push({ start, end, content: jaLines.join("\n") }); }
    i++;
  }
  return { vi: viSubs, ja: jaSubs };
}
