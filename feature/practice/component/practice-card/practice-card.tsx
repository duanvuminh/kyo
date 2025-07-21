"use client";
import { AudioPlayer } from "@/component/audio-player/audio-player";
import { SvgFromUrl } from "@/component/svg-from-url";
import { Button } from "@/component/ui/button";
import { Card, CardAction, CardContent } from "@/component/ui/card";
import { usePracticeCard } from "@/feature/practice/component/practice-card/use-practice-card";
import { QuestionView } from "@/feature/practice/component/question-view";
import { Practice } from "@/feature/practice/model/practice";
import { svgURLFromWord } from "@/lib/dictionary";
import { cn } from "@/utils/utils";
import { ArrowBigRight, Eye, Pencil, Play, Plus, Trash } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import { toast } from "sonner";

export const KPracticeCard = ({
  word,
  practice,
  subPractice,
}: {
  word: string;
  practice: Practice;
  subPractice: Practice[];
}) => {
  const {
    mode,
    question,
    handleModeChange,
    handleNextQuestion,
    nextWord,
    PracticeCardMode,
    addWordsToPractice,
    removeWordsToPractice,
  } = usePracticeCard(word, subPractice);
  const add = () => {
    addWordsToPractice(word);
    toast("Đã thêm vào danh sách luyện tập");
  };
  const remove = () => {
    removeWordsToPractice(word);
    toast("Đã xóa khỏi danh sách luyện tập");
  };
  return (
    <Card className="p-1 h-[80vh] mt-12">
      <CardContent
        className={cn("flex-1 flex justify-center overflow-auto", {
          "items-start":
            mode === PracticeCardMode.practice ||
            mode === PracticeCardMode.flashcard,
          "items-center":
            mode !== PracticeCardMode.practice &&
            mode !== PracticeCardMode.flashcard,
        })}
      >
        {(() => {
          switch (mode) {
            case PracticeCardMode.flashcard:
              return <Markdown>{practice.content}</Markdown>;
            case PracticeCardMode.write:
              return <SvgFromUrl url={svgURLFromWord(word)} />;
            case PracticeCardMode.practice:
              return (
                question && (
                  <QuestionView
                    question={question}
                    onNextQuestion={handleNextQuestion}
                  />
                )
              );
            default:
              return <h1 className="text-5xl font-bold">{word}</h1>;
          }
        })()}
      </CardContent>
      <CardAction>
        <div>
          <Button
            variant="ghost"
            className={cn("text-muted", {
              "text-primary": mode === PracticeCardMode.practice,
            })}
            onClick={() => handleModeChange(PracticeCardMode.practice)}
          >
            <Play />
          </Button>
          {nextWord && (
            <Button
              asChild
              variant="ghost"
              className={cn("text-muted", {
                "text-primary": mode === PracticeCardMode.practice,
              })}
            >
              <Link href={`/practice/${nextWord}`}>
                <ArrowBigRight />
              </Link>
            </Button>
          )}
        </div>
        <div>
          <Button
            variant="ghost"
            className={cn("text-muted", {
              "text-primary": mode === PracticeCardMode.flashcard,
            })}
            onClick={() => handleModeChange(PracticeCardMode.flashcard)}
          >
            <Eye />
          </Button>
          <Button
            variant="ghost"
            className={cn("text-muted", {
              "text-primary": mode === PracticeCardMode.write,
            })}
            onClick={() => handleModeChange(PracticeCardMode.write)}
          >
            <Pencil />
          </Button>
          <AudioPlayer text={word} />
          <Button variant="ghost" className="text-muted" onClick={add}>
            <Plus />
          </Button>
          <Button variant="ghost" className="text-muted" onClick={remove}>
            <Trash />
          </Button>
          <Link
            href={`https://discord.com/channels/1225396604169617448/1386090536753958952/${practice.id}`}
          >
            <Button variant="link" className="text-muted">
              Góp ý
            </Button>
          </Link>
        </div>
      </CardAction>
    </Card>
  );
};
