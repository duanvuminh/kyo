import { apiFetch } from "@/lib/api-fetch";
import { fetchCacheConfig } from "@/lib/constants";
import * as cheerio from "cheerio";
import type { CheerioAPI } from "cheerio";

export interface HuusenMnemonic {
  text: string;
  imageUrl?: string;
}

// Blog tĩnh, nội dung không đổi, và 1 trang có thể chứa nhiều kanji liên quan (VD 褱/懐/壊
// chung URL) nên search riêng từng chữ dễ fetch lại đúng trang nhiều lần nếu không cache.
export async function fetchHuusenMnemonic(url: string, kanji: string): Promise<HuusenMnemonic | null> {
  const res = await apiFetch(url, fetchCacheConfig);
  if (!res.ok) {
    throw new Error(`Huusennarare fetch lỗi: ${res.status}`);
  }
  const html = await res.text();
  return extractMnemonic(cheerio.load(html), kanji);
}

// Mỗi bài blog thường giải thích nhiều kanji liên quan (bộ thủ chung), đoạn 漢字の足し算 cho
// từng kanji luôn mở đầu bằng 『[kanji]（...）』ở đúng <p> đó — dùng làm điểm neo để tách đúng
// đoạn của kanji đang cần, vì "足し算" xuất hiện lặp lại cho mỗi kanji trong cùng 1 trang.
function isMnemonicParagraph($: CheerioAPI, index: number, kanji: string): boolean {
  const $p = $(".entry-body p").eq(index);
  const firstStrong = $p.find("strong").first().text().trim();
  if (firstStrong !== kanji) {
    return false;
  }
  const text = $p.text().trim().replace(/^　/, "");
  return text.startsWith(`『${kanji}`) && text.includes("足し算");
}

function extractMnemonic($: CheerioAPI, kanji: string): HuusenMnemonic | null {
  const paragraphs = $(".entry-body p");
  const total = paragraphs.length;

  let targetIndex = -1;
  for (let i = 0; i < total; i++) {
    if (isMnemonicParagraph($, i, kanji)) {
      targetIndex = i;
      break;
    }
  }
  if (targetIndex === -1) {
    return null;
  }

  const text = paragraphs.eq(targetIndex).text().trim();

  let imageUrl: string | undefined;
  for (let i = targetIndex + 1; i < total; i++) {
    const $p = paragraphs.eq(i);
    const firstStrong = $p.find("strong").first().text().trim();
    // Đoạn 漢字の足し算 của kanji khác bắt đầu => ảnh phía sau không còn thuộc kanji đang xử lý
    if (firstStrong && isMnemonicParagraph($, i, firstStrong)) {
      break;
    }
    const src = $p.find("img").first().attr("src");
    if (src) {
      imageUrl = src;
      break;
    }
  }

  return { text, imageUrl };
}
