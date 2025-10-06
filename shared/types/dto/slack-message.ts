export interface SlackMessageDTO {
  type: string;
  subtype?: string;
  text: string;
  ts: string;
  user?: string;
  bot_id?: string;
  thread_ts?: string;
  reply_count?: number;
  replies?: {
    user: string;
    ts: string;
  }[];
  reactions?: {
    name: string;
    count: number;
    users: string[];
  }[];
  blocks?: [];
  attachments?: [];
  files?: {
    id: string;
    name: string;
    mimetype: string;
    url_private: string;
  }[];
  relatedMessages?: SlackMessageDTO[];
}
export interface SlackHistoryResponseDTO {
  ok: boolean;
  messages: SlackMessageDTO[];
  has_more: boolean;
  response_metadata?: {
    next_cursor?: string;
  };
}
