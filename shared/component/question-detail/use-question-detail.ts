import { useState } from "react";

export function useQuestionDetail(onNextQuestion?: () => void) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (showResult) {
      return;
    }
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const onNextQuestionCustom = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    onNextQuestion?.();
  };

  return {
    selectedAnswer,
    showResult,
    handleAnswerClick,
    handleSubmit,
    handleReset,
    onNextQuestionCustom,
    setSelectedAnswer,
    setShowResult,
  };
}
