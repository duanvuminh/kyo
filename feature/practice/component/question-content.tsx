import { Button } from "@/component/ui/button";
import { QuestionDetail } from "@/feature/practice/component/question-detail";
import { Question } from "@/feature/practice/model/question";
import Link from "next/link";

const DISCORD_THREAD_PATH =
  "https://discord.com/channels/1225396604169617448/1386090536753958952";

interface QuestionContentProps {
  question?: Question;
  onNextQuestion: () => void;
  practiceId: string;
}

const DiscordLink = ({ practiceId }: { practiceId: string }) => (
  <Link href={`${DISCORD_THREAD_PATH}/${practiceId}`} prefetch={false}>
    <Button variant="link" className="p-0 h-auto text-xs text-muted-foreground">
      Open in discord
    </Button>
  </Link>
);

export const QuestionContent = ({
  question,
  onNextQuestion,
  practiceId,
}: QuestionContentProps) => {
  return (
    <div className="flex flex-col gap-2">
      {question ? (
        <QuestionDetail question={question} onNextQuestion={onNextQuestion} />
      ) : (
        <p>Hiện tại chưa có dữ liệu</p>
      )}

      <DiscordLink practiceId={practiceId} />
    </div>
  );
};
