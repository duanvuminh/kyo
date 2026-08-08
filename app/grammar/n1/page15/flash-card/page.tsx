import { cards } from "@/app/grammar/n1/page15/flash-card/cards";
import { FlashCard } from "@/lib/components/flash-card/flash-card";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8">
        Flash Card Grammar N1 - Page 15
      </h1>
      <FlashCard cards={cards} />
    </main>
  );
}
