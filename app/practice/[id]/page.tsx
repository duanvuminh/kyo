import { KPracticeCard } from "@/feature/practice/component/practice-card/practice-card";
import {
  getMainPractice,
  getSubPractice,
} from "@/feature/practice/service/practice";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const word = decodeURI(id);
  const practice = await getMainPractice(word);
  const subPractice = practice ? await getSubPractice(practice) : [];
  return (
    <div className="max-w-2xl px-2 mx-auto">
      {practice && (
        <KPracticeCard
          word={word}
          practice={practice}
          subPractice={subPractice}
        />
      )}
    </div>
  );
}
