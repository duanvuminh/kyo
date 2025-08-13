import { SvgFromUrl } from "@/component/svg-from-url";
import { CardContent } from "@/component/ui/card";
import { FlashContent } from "@/feature/practice/component/flash-content";
import { QuestionContent } from "@/feature/practice/component/question-content";
import { Practice } from "@/feature/practice/model/practice";
import { Question } from "@/feature/practice/model/question";
import { PracticeCardMode } from "@/feature/practice/model/type";
import { svgURLFromWord } from "@/lib/dictionary";
import { Source } from "@/types/models/word";
import { cn } from "@/utils/utils";

interface ContentProps {
  mode: PracticeCardMode;
  practice: Practice;
  word: string;
  question: Question | undefined;
  onNextQuestion: () => void;
}

export const PracticeCardContent = ({
  mode,
  practice,
  word,
  question,
  onNextQuestion,
}: ContentProps) => {
  return (
    <CardContent
      className={cn("flex-1 flex justify-center overflow-auto", {
        "items-start":
          mode === PracticeCardMode.PRACTICE ||
          mode === PracticeCardMode.FLASH_CARD,
        "items-center":
          mode !== PracticeCardMode.PRACTICE &&
          mode !== PracticeCardMode.FLASH_CARD,
      })}
    >
      {(() => {
        switch (mode) {
          case PracticeCardMode.FLASH_CARD:
            return (
              <FlashContent
                item={{
                  source: Source.DISCORD,
                  content: practice.content,
                  documentId: practice.id,
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
                practiceId={practice.id}
              />
            );
          default:
            return <h1 className="text-5xl font-bold">{word}</h1>;
        }
      })()}
    </CardContent>
  );
};
