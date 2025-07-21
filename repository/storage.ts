import { PracticeStorageItemDto } from "@/types/dto/practice-storage-item";

export class PracticeStorageRepository {
  private static readonly STORAGE_KEY = "kyo_keywords";

  static getAll(): PracticeStorageItemDto[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
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
        throw new Error("Keyword already exists");
      }

      items.unshift(newItem);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
      return newItem;
    } catch (error) {
      throw error;
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
        throw new Error("Keyword not found");
      }

      items[index] = {
        ...items[index],
        ...updates,
        timestamp: Date.now(),
      };

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
      return items[index];
    } catch (error) {
      throw error;
    }
  }

  static remove(id: string): boolean {
    try {
      const items = this.getAll();
      const filteredItems = items.filter((item) => item.id !== id);

      if (filteredItems.length === items.length) {
        throw new Error("Keyword not found");
      }

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredItems));
      return true;
    } catch (error) {
      throw error;
    }
  }

  static findByKeyword(keyword: string): PracticeStorageItemDto | null {
    try {
      const items = this.getAll();
      return items.find((item) => item.keyword === keyword) || null;
    } catch {
      return null;
    }
  }

  static clear(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      throw error;
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
