import { PracticeStorageItemDto } from "@/shared/types/dto/practice-storage-item";
import { AppError, ErrorCode } from "@/shared/types/models/error";

export class PracticeStorageRepository {
  private static readonly STORAGE_KEY = "kyo_keywords";

  static getAll(): PracticeStorageItemDto[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e));
      throw new AppError(ErrorCode.STORAGE, { cause: err });
    }
  }

  static add(
    keyword: string,
    metadata?: Record<string, string>
  ): PracticeStorageItemDto {
    try {
      const items = this.getAll();
      const newItem: PracticeStorageItemDto = {
        id: Date.now().toString(),
        keyword,
        timestamp: Date.now(),
        metadata,
      };

      const exists = items.find((item) => item.keyword === keyword);
      if (exists) {
        throw new AppError(ErrorCode.DUPLICATE_KEYWORD);
      }

      items.unshift(newItem);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
      return newItem;
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      const err = error instanceof Error ? error : new Error(String(error));
      throw new AppError(ErrorCode.STORAGE, { cause: err });
    }
  }
  static update(
    id: string,
    updates: Partial<Pick<PracticeStorageItemDto, "keyword" | "metadata">>
  ): PracticeStorageItemDto | null {
    try {
      const items = this.getAll();
      const index = items.findIndex((item) => item.id === id);

      if (index === -1) {
        throw new AppError(ErrorCode.STORAGE);
      }

      items[index] = {
        ...items[index],
        ...updates,
        timestamp: Date.now(),
      };

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
      return items[index];
    } catch (error) {
      if (error instanceof AppError) throw error;
      const err = error instanceof Error ? error : new Error(String(error));
      throw new AppError(ErrorCode.STORAGE, { cause: err });
    }
  }

  static remove(id: string): boolean {
    try {
      const items = this.getAll();
      const filteredItems = items.filter((item) => item.id !== id);

      if (filteredItems.length === items.length) {
        return true;
      }

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredItems));
      return true;
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      throw new AppError(ErrorCode.STORAGE, { cause: err });
    }
  }

  static findByKeyword(keyword: string): PracticeStorageItemDto | null {
    const items = this.getAll();
    return items.find((item) => item.keyword === keyword) || null;
  }

  static clear(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      throw new AppError(ErrorCode.STORAGE, { cause: err });
    }
  }

  static count(): number {
    return this.getAll().length;
  }

  static getRecent(limit: number = 10): PracticeStorageItemDto[] {
    return this.getAll()
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }

  static search(query: string): PracticeStorageItemDto[] {
    const items = this.getAll();
    return items.filter((item) =>
      item.keyword.toLowerCase().includes(query.toLowerCase())
    );
  }
}

export class MemoStorageRepository {
  private static readonly STORAGE_KEY = "kyo_memo";

  static getMemo(): string | null {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data;
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e));
      throw new AppError(ErrorCode.STORAGE, { cause: err });
    }
  }

  static saveMemo(content: string): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, content);
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e));
      throw new AppError(ErrorCode.STORAGE, { cause: err });
    }
  }
}
