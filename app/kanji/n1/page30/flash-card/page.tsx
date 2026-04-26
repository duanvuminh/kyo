import { cards } from "@/app/kanji/n1/page30/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Bài 30: 名詞(12)IT関連・娯楽
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
