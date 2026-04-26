import { cards } from "@/app/kanji/n1/page25/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Kanji N1 - Bài 25: 名詞(7)政治・行政・国際関係
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
