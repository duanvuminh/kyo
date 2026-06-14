export interface DiscordAttachmentEntity {
  id: string;
  filename: string;
  content_type?: string;
  size: number;
  url: string;
  proxy_url: string;
  height?: number;
  width?: number;
  ephemeral?: boolean;
  description?: string;
}

export interface DiscordMessageEntity {
  content: string;
  type: number;
  id: string;
  attachments?: DiscordAttachmentEntity[];
}
