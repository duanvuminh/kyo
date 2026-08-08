import { FlashContent } from "@/app/practice/_components/flash-content";
import { QuestionContent } from "@/app/practice/_components/question-content";
import { PracticeCardMode } from "@/app/practice/_lib/practice.types";
import { CardContent } from "@/components/ui/card";
import { Write } from "@/lib/components/write";
import { Practice, Question, Source } from "@/lib/types";

interface ContentProps {
  mode: PracticeCardMode;
  flashCard: Practice;
  word: string;
  question: Question | undefined;
  onNextQuestion: () => void;
  practiceIndex: number;
  practiceTotal: number;
}

function renderPracticeContent({
  mode,
  flashCard,
  word,
  question,
  onNextQuestion,
  practiceIndex,
  practiceTotal,
}: ContentProps) {
  switch (mode) {
    case PracticeCardMode.FLASH_CARD:
      return (
        <FlashContent
          item={{
            source: Source.DISCORD,
            content: flashCard.content,
            documentId: flashCard.id,
            words: word,
          }}
        />
      );
    case PracticeCardMode.WRITE:
      return <Write text={word} />;
    case PracticeCardMode.PRACTICE:
      return (
        <QuestionContent
          question={question}
          onNextQuestion={onNextQuestion}
          practiceId={flashCard.id}
          currentIndex={practiceIndex}
          total={practiceTotal}
        />
      );
    default:
      return <Write text={word} />;
  }
}

export const PracticeCardContent = ({
  mode,
  flashCard,
  word,
  question,
  onNextQuestion,
  practiceIndex,
  practiceTotal,
}: ContentProps) => {
  return (
    <CardContent className="flex-1 overflow-auto">
      {renderPracticeContent({
        mode,
        flashCard,
        word,
        question,
        onNextQuestion,
        practiceIndex,
        practiceTotal,
      })}
    </CardContent>
  );
};
