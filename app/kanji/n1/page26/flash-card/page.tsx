import { cards } from "@/app/kanji/n1/page26/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Bài 26: 名詞(8)産業・交通
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
