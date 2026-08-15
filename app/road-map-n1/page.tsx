"use client";

import { LessonGroupCard } from "@/app/road-map-n1/_components/lesson-group-card";
import { getUpcomingLessonsByGroup, readStoredStatuses } from "@/app/road-map-n1/_lib/road-map.utils";
import Link from "next/link";
import { useState } from "react";

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
