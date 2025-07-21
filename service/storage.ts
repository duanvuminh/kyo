import { PracticeStorageRepository } from "@/repository/storage";
import { PracticeStorageItem } from "@/types/models/practice-storage-item";

export class PracticeStorage {
  static removeFromPracticeList(word: string) {
    const item = PracticeStorageRepository.findByKeyword(word);
    if (!item) {
      return;
    }
    PracticeStorageRepository.remove(item?.id);
  }
  static addToPracticeList(word: string) {
    return PracticeStorageItem.fromDTO(PracticeStorageRepository.add(word));
  }

  static getNextWord(word: string): string | undefined {
    const allItems = PracticeStorageRepository.getAll();
    const currentIndex = allItems.findIndex((item) => item.keyword === word);

    if (currentIndex === -1) {
      return undefined;
    }

    if (currentIndex === allItems.length - 1) {
      return allItems[0].keyword;
    }

    return allItems[currentIndex + 1].keyword;
  }

  static getFirstWord(): string | undefined {
    return PracticeStorageRepository.getAll()[0]?.keyword;
  }
}
