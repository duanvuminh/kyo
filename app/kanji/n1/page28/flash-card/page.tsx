import { cards } from "@/app/kanji/n1/page28/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Bài 28: 名詞(10)自然・科学・地理
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
