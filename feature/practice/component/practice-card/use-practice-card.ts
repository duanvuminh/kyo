import { Practice } from "@/feature/practice/model/practice";
import { Question } from "@/feature/practice/model/question";
import { PracticeCardMode } from "@/feature/practice/model/type";
import { PracticeStorage } from "@/shared/service/storage";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function usePracticeCard(word: string, subPractice: Practice[]) {
  const searchParams = useSearchParams();
  const modeString = searchParams.get("mode");
  let modeFromUrl = PracticeCardMode.DEFAULT;
  if (modeString === "practice") {
    modeFromUrl = PracticeCardMode.PRACTICE;
  }
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

  const handleNextQuestion = () => {
    setPracticeIndex((prev) => (prev + 1) % subPractice.length);
  };

  const save = () => {
    PracticeStorage.addToPracticeList(word);
  };

  const question: Question | undefined = Question.fromDTO(
    subPractice[practiceIndex]
  );

  const removeWordsToPractice = (word: string) => {
    PracticeStorage.removeFromPracticeList(word);
  };

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
