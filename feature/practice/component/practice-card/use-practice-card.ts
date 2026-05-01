import { Practice } from "@/feature/practice/model/practice";
import { MODE_MAP, PracticeCardMode } from "@/feature/practice/model/type";
import { PracticeStorage } from "@/shared/service/storage";
import { Question } from "@/shared/types/models/question";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function usePracticeCard(word: string, subPractice: Practice[]) {
  const searchParams = useSearchParams();
  const modeFromUrl = MODE_MAP[searchParams.get("mode") as keyof typeof MODE_MAP] ?? PracticeCardMode.DEFAULT;

  const [mode, setMode] = useState<PracticeCardMode>(modeFromUrl);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [nextWord, setNextWord] = useState<string | undefined>(undefined);

  useEffect(() => {
    setNextWord(PracticeStorage.getNextWord(word));
  }, [word]);

  const handleModeChange = (newMode: PracticeCardMode) => {
    if (mode === newMode) {
      setMode(PracticeCardMode.DEFAULT);
      return;
    }
    setPracticeIndex(0);
    setMode(newMode);
  };

  const handleNextQuestion = () => setPracticeIndex((prev) => (prev + 1) % subPractice.length);
  const save = () => PracticeStorage.addToPracticeList(word);
  const removeWordsToPractice = (w: string) => PracticeStorage.removeFromPracticeList(w);
  const question: Question | undefined = Question.fromPractice(subPractice[practiceIndex]);

  return {
    mode,
    practiceIndex,
    question,
    handleModeChange,
    handleNextQuestion,
    nextWord,
    save,
    removeWordsToPractice,
  };
}
