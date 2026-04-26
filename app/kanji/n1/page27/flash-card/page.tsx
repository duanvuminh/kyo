import { cards } from "@/app/kanji/n1/page27/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Bài 27: 名詞(9)経済・流通
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
