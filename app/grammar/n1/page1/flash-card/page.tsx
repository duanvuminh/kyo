import cards from "@/app/grammar/n1/page1/flash-card/cards";
import { FlashCard } from "@/shared/component/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Grammar N1 - Page 1
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
