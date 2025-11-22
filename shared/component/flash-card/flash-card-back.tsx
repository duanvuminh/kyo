import { MeaningSection } from "@/shared/component/flash-card/meaning-section";
import { QuestionSection } from "@/shared/component/flash-card/question-section";
import { UsageSection } from "@/shared/component/flash-card/usage-section";
import { Question } from "@/shared/types/models/question";

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
  return (
    <div>
      <MeaningSection back={back} />
      <UsageSection more={more} front={front} />
      <QuestionSection questions={questions} />
    </div>
  );
}
