"use client";

import {
  getUpcomingLessonsByGroup,
  readStoredStatuses,
  UpcomingLessonGroup,
} from "@/app/road-map-n1/_lib/road-map.utils";
import Link from "next/link";
import { useState } from "react";

function LessonGroupCard({ group }: { group: UpcomingLessonGroup }) {
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

export default function Page() {
  const [groups] = useState(() => getUpcomingLessonsByGroup(readStoredStatuses()));

  return (
    <div className="mx-auto flex max-w-md flex-col gap-4 px-4 py-6 md:py-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">Đang học tiếp</h1>
        <p className="text-sm text-muted-foreground">Bài tiếp theo trong từng phần của lộ trình N1.</p>
      </header>
      <ul className="flex flex-col gap-3">
        {groups.map((group) => (
          <LessonGroupCard key={group.mainId} group={group} />
        ))}
      </ul>
      <Link href="/road-map-n1/map" className="text-sm text-blue-600 hover:underline">
        Xem toàn bộ roadmap →
      </Link>
    </div>
  );
}
