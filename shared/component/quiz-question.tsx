type QuizQuestionProps = {
  question: string;
  answers: { text: string; correct?: boolean }[];
  name: string;
};
export default function QuizQuestion({
  question,
  answers,
  name,
}: QuizQuestionProps) {
  return (
    <form className="space-y-3">
      <h3 className="font-semibold text-sm">{question}</h3>
      {answers.map((ans, index) => (
        <div key={index} className="relative">
          <input
            type="radio"
            id={`answer-${name}-${index}`}
            name={name}
            className={`hidden peer ${
              ans.correct ? "peer-correct" : "peer-wrong"
            }`}
          />
          <label
            htmlFor={`answer-${name}-${index}`}
            className={`block text-sm cursor-pointer rounded-lg border border-gray-300 px-4 py-2 transition peer-checked:shadow-md peer-checked:-translate-y-0.5 ${
              ans.correct
                ? "peer-checked:bg-green-100 peer-checked:border-green-500 peer-checked:text-green-700"
                : "peer-checked:bg-red-100 peer-checked:border-red-500 peer-checked:text-red-700"
            }`}
          >
            {ans.text}
          </label>
        </div>
      ))}
    </form>
  );
}
