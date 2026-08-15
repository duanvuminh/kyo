import { cards } from "@/app/words/n1/page22/flash-card/cards";
import { FlashCard } from "@/lib/components/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card N1 - Page 22
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
