import { MeaningSection } from "@/lib/components/flash-card/meaning-section";
import { QuestionSection } from "@/lib/components/flash-card/question-section";
import { UsageSection } from "@/lib/components/flash-card/usage-section";
import { Question } from "@/lib/types";

export function FlashCardBack({
  back,
  more,
  questions,
  front,
}: {
  back: string[];
  more?: string[];
  questions?: Question[];
  front: string;
}) {
  const grammarPoint = [...back, ...(more ?? [])].join("\n");

  return (
    <div>
      <MeaningSection back={back} />
      <UsageSection more={more} front={front} />
      <QuestionSection
        questions={questions}
        grammarPoint={grammarPoint}
        front={front}
      />
    </div>
  );
}
