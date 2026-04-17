import { cards } from "@/app/kanji/n1/page10/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Bài 10: 名詞(4)自然 (5)植物・食物 (6)建造物・形状
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
