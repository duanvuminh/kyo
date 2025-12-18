import { AudioPlayer } from "@/shared/component/audio-player/audio-player";

export function UsageSection({
  more,
  front,
}: {
  more?: string[];
  front: string;
}) {
  if (!more || more.length === 0) {
    return null;
  }
  return (
    <details className="mt-3">
      <summary className="cursor-pointer text-sm text-gray-600">
        Cách dùng và ví dụ
      </summary>
      <div className="mt-2 flex flex-col gap-1">
        {more.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <div className="mt-2">
        <AudioPlayer text={front} />
      </div>
    </details>
  );
}
