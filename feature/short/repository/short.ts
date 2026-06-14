import { parseRelatedItems, parseReplyContent } from "@/feature/short/utils/short-parser";
import {
  getListMessageFromSlack,
  getListReplyFromSlack,
} from "@/shared/repository/slack";
import type { SlackMessageEntity } from "@/shared/type/dto/slack-message";

export type ShortEntity = SlackMessageEntity;

const limit = 5;
const defaultPage = "newest";
const channelId = "C071E9YUDHU";

export const fetchShortEntities = async ({
  page,
}: {
  page: string;
}): Promise<{ entities: ShortEntity[]; limit: number; nextPage?: string }> => {
  const data = await getListMessageFromSlack({
    channelId,
    cursor: page === defaultPage ? undefined : page,
    limit,
  });

  const entities = await Promise.all(
    data.messages.map(async (item) => {
      if (item.thread_ts) {
        const threads = await getThreadMessages(channelId, item.thread_ts);
        const content = parseReplyContent(threads);
        const relateds = parseRelatedItems(threads);
        return {
          ...item,
          text: content,
          relatedMessages: relateds.length > 1 ? relateds : [],
        };
      }
      return item;
    }),
  );

  return {
    entities,
    limit,
    nextPage: data.response_metadata?.next_cursor,
  };
};

async function getThreadMessages(
  channelId: string,
  ts: string,
): Promise<SlackMessageEntity[]> {
  const replies = await getListReplyFromSlack({ channelId, ts });
  return replies.messages;
}
