import { KPracticeCard } from "@/feature/practice/component/practice-card/practice-card";
import { getFlashCard, getPractice } from "@/feature/practice/service/practice";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const word = decodeURI(id);
  const flashCard = await getFlashCard(word);
  const practice = flashCard ? await getPractice(flashCard) : [];
  return (
    <div className="px-2">
      {flashCard && (
        <KPracticeCard key={word} word={word} flashCard={flashCard} practice={practice} />
      )}
    </div>
  );
}
