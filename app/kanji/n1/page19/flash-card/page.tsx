import { cards } from "@/app/kanji/n1/page19/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
    return (
        <main>
            <h1 className="text-2xl font-bold text-center mt-8">
                Flash Card Kanji N1 - Bài 19: 名詞(1)身体・健康
            </h1>
            <FlashCard cards={cards} />
        </main>
    );
}
