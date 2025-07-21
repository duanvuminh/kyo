export interface PracticeStorageItemDto {
  id: string;
  keyword: string;
  timestamp: number;
  metadata?: Record<string, string>;
}
