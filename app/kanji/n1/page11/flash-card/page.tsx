import { cards } from "@/app/kanji/n1/page11/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Bài 11: 名詞(7)学生・生活 (8)経済・生活 (9)時間・空間
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
