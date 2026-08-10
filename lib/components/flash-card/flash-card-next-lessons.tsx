import { RoadmapNodeMeta } from "@/app/road-map-n1/_lib/road-map.types";
import Link from "next/link";

export function FlashCardNextLessons({ lessons }: { lessons: RoadmapNodeMeta[] }) {
  if (lessons.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-sm text-sm">
      <p className="text-muted-foreground">Đang học tiếp:</p>
      <ul className="mt-1 flex flex-col gap-1">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link href={lesson.href!} className="text-blue-600 hover:underline">
              {lesson.label} — {lesson.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
