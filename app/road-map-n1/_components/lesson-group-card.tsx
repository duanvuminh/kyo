import { UpcomingLessonGroup } from "@/app/road-map-n1/_lib/road-map.utils";
import Link from "next/link";

export function LessonGroupCard({ group }: { group: UpcomingLessonGroup }) {
  return (
    <li className="rounded border p-3">
      <p className="text-xs text-muted-foreground">{group.groupLabel}</p>
      {group.lesson ? (
        <Link href={group.lesson.href!} className="mt-1 block hover:underline">
          <span className="font-medium">{group.lesson.label}</span>
          <span className="block text-sm text-muted-foreground">{group.lesson.description}</span>
        </Link>
      ) : (
        <p className="mt-1 text-sm text-emerald-600">🎉 Đã hoàn thành hết</p>
      )}
    </li>
  );
}
