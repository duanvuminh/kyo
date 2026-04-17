import { cards } from "@/app/kanji/n1/page9/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Bài 9: 名詞(1)道具 (2)衣・衣服 (3)身体・感情
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
