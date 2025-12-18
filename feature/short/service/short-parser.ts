import { SlackMessageDTO } from "@/shared/types/dto/slack-message";
import matter from "gray-matter";

/**
 * Parse multiple metadata blocks từ text
 * Ví dụ: text có nhiều block ---\n...\n--- sẽ được tách thành nhiều items
 */
export function parseMultipleMetadata(
  text: string,
  baseItem: SlackMessageDTO
): SlackMessageDTO[] {
  const result: SlackMessageDTO[] = [];
  const regex = /---\n([\s\S]*?)\n---/g;
  let match;
  let index = 0;

  while ((match = regex.exec(text)) !== null) {
    const metadataStart = match.index;
    const metadataEnd = regex.lastIndex;
    const nextMatch = regex.exec(text);
    regex.lastIndex = metadataEnd;

    const contentEnd = nextMatch ? nextMatch.index : text.length;
    const fullBlock = text.slice(metadataStart, contentEnd).trim();

    if (fullBlock) {
      const parsed = matter(fullBlock);
      if (parsed.data?.title != null) {
        result.push({
          ...baseItem,
          text: fullBlock,
          ts: `${baseItem.ts}_${index}`,
        });
        index++;
      }
    }
  }

  return result;
}

/**
 * Parse threads thành danh sách related items
 * Gom các message không có title vào message trước đó
 */
export function parseRelatedItems(
  threads: SlackMessageDTO[]
): SlackMessageDTO[] {
  const result: SlackMessageDTO[] = [];
  let current: SlackMessageDTO | null = null;

  for (const item of threads) {
    const text = item.text ?? "";

    const multipleItems = parseMultipleMetadata(text, item);
    if (multipleItems.length > 1) {
      if (current) {
        result.push(current);
        current = null;
      }
      result.push(...multipleItems);
      continue;
    }

    const parsed = matter(text);
    if (parsed.data?.title != null) {
      if (current) {
        result.push(current);
      }
      current = { ...item };
    } else if (current) {
      current.text = (current.text ?? "") + "\n\n" + text;
    }
  }
  if (current) {
    result.push(current);
  }
  return result;
}

/**
 * Lấy nội dung từ threads cho đến khi gặp item có title mới
 */
export function parseReplyContent(threads: SlackMessageDTO[]): string {
  const result: string[] = [];
  for (let i = 0; i < threads.length; i++) {
    const item = threads[i];
    const parsed = matter(item.text ?? "");
    if (parsed.data?.title != null && i != 0) {
      break;
    }
    result.push(item.text ?? "");
  }
  return result.join("\n\n");
}
