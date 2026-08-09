import { KPracticeCard } from "@/app/practice/_components/practice-card/practice-card";
import { getFlashCardWithPractice } from "@/app/practice/_lib/practice.service";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const word = decodeURI(id);
  const { flashCard, practice } = await getFlashCardWithPractice(word);
  return (
    <div className="px-2">
      {flashCard && (
        <KPracticeCard key={word} word={word} flashCard={flashCard} practice={practice} />
      )}
    </div>
  );
}
