import { cards } from "@/app/kanji/n1/page24/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Bài 24: 名詞(6)犯罪・災害
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
