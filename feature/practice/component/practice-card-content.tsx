import { FlashContent } from "@/feature/practice/component/flash-content";
import { QuestionContent } from "@/feature/practice/component/question-content";
import { Practice } from "@/feature/practice/model/practice";
import { Question } from "@/feature/practice/model/question";
import { PracticeCardMode } from "@/feature/practice/model/type";
import { SvgFromUrl } from "@/shared/component/svg-from-url";
import { CardContent } from "@/shared/component/ui/card";
import { svgURLFromWord } from "@/shared/lib/svg";
import { Source } from "@/shared/types/models/word";

interface ContentProps {
  mode: PracticeCardMode;
  flashCard: Practice;
  word: string;
  question: Question | undefined;
  onNextQuestion: () => void;
}

export const PracticeCardContent = ({
  mode,
  flashCard,
  word,
  question,
  onNextQuestion,
}: ContentProps) => {
  return (
    <CardContent className="flex-1 overflow-auto">
      {(() => {
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
            return <SvgFromUrl url={svgURLFromWord(word)} />;
          case PracticeCardMode.PRACTICE:
            return (
              <QuestionContent
                question={question}
                onNextQuestion={onNextQuestion}
                practiceId={flashCard.id}
              />
            );
          default:
            return <h1 className="text-5xl font-bold">{word}</h1>;
        }
      })()}
    </CardContent>
  );
};
