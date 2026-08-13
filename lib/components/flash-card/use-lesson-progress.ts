import { STORAGE_KEY } from "@/app/road-map-n1/_lib/road-map.constants";
import { BASE_META } from "@/app/road-map-n1/_lib/road-map.types";
import { getUpcomingLessons, readStoredStatuses } from "@/app/road-map-n1/_lib/road-map.utils";
import { usePathname } from "next/navigation";
import { useState } from "react";

function findNodeId(pathname: string): string | undefined {
  const lessonPath = pathname.replace(/\/flash-card\/?$/, "");
  return BASE_META.find((meta) => meta.href === lessonPath)?.id;
}

export function useLessonProgress() {
  const pathname = usePathname();
  const nodeId = findNodeId(pathname);
  const [isDone, setIsDone] = useState(() => (nodeId ? readStoredStatuses()[nodeId] === "done" : false));
  const [upcomingLessons, setUpcomingLessons] = useState(() => getUpcomingLessons(readStoredStatuses(), nodeId));

  const markDone = () => {
    if (!nodeId) {
      return;
    }
    const statuses = readStoredStatuses();
    statuses[nodeId] = "done";
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(statuses));
    setIsDone(true);
    setUpcomingLessons(getUpcomingLessons(statuses, nodeId));
  };

  return { canSave: Boolean(nodeId), isDone, markDone, upcomingLessons };
}
