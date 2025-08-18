import { PracticeStorageItemDto } from "@/shared/types/dto/practice-storage-item";

export class PracticeStorageItem {
  constructor(
    public id: string,
    public keyword: string,
    public timestamp: number,
    public metadata?: Record<string, string>
  ) {}

  static fromDTO(dto: PracticeStorageItemDto): PracticeStorageItem {
    return new PracticeStorageItem(
      dto.id,
      dto.keyword,
      dto.timestamp,
      dto.metadata
    );
  }

  static fromDTOs(dtos: PracticeStorageItemDto[]): PracticeStorageItem[] {
    return dtos.map((dto) => PracticeStorageItem.fromDTO(dto));
  }
}
