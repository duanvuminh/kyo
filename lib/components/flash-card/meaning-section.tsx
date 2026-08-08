export function MeaningSection({ back }: { back: string[] }) {
  return (
    <details open>
      <summary>Ý nghĩa</summary>
      {back.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </details>
  );
}
