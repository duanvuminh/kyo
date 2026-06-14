import type { SlackMessageEntity } from "@/shared/type/dto/slack-message";
import matter from "gray-matter";

export function parseMultipleMetadata(
  text: string,
  baseItem: SlackMessageEntity
): SlackMessageEntity[] {
  const result: SlackMessageEntity[] = [];
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

function hasTitle(text: string): boolean {
  return matter(text).data?.title != null;
}

function pushIfExists(result: SlackMessageEntity[], item: SlackMessageEntity | null) {
  if (item) {
    result.push(item);
  }
}

export function parseRelatedItems(threads: SlackMessageEntity[]): SlackMessageEntity[] {
  const result: SlackMessageEntity[] = [];
  let current: SlackMessageEntity | null = null;

  for (const item of threads) {
    const text = item.text ?? "";
    const multipleItems = parseMultipleMetadata(text, item);

    if (multipleItems.length > 1) {
      pushIfExists(result, current);
      current = null;
      result.push(...multipleItems);
      continue;
    }

    if (hasTitle(text)) {
      pushIfExists(result, current);
      current = { ...item };
    } else if (current) {
      current.text = (current.text ?? "") + "\n\n" + text;
    }
  }

  pushIfExists(result, current);
  return result;
}

export function parseReplyContent(threads: SlackMessageEntity[]): string {
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
