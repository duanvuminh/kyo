import { cards } from "@/app/kanji/n1/page23/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Bài 23: 名詞(5)言語・教育
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
