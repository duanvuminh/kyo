import { STORAGE_KEY } from "@/app/road-map-n1/_lib/road-map.constants";
import { BASE_META, MAIN_CHILDREN_IDS, RoadmapNodeMeta, RoadmapStatus } from "@/app/road-map-n1/_lib/road-map.types";
import { usePathname } from "next/navigation";
import { useState } from "react";

function findNodeId(pathname: string): string | undefined {
  const lessonPath = pathname.replace(/\/flash-card\/?$/, "");
  return BASE_META.find((meta) => meta.href === lessonPath)?.id;
}

function readStatuses(): Record<string, RoadmapStatus> {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function getUpcomingLessons(statuses: Record<string, RoadmapStatus>, excludeId?: string): RoadmapNodeMeta[] {
  const result: RoadmapNodeMeta[] = [];

  for (const childIds of Object.values(MAIN_CHILDREN_IDS)) {
    const nextId = childIds.find(
      (id) => id !== excludeId && (statuses[id] ?? "todo") !== "done",
    );
    const meta = nextId ? BASE_META.find((m) => m.id === nextId) : undefined;
    if (meta?.href) {
      result.push(meta);
    }
  }

  return result;
}

export function useLessonProgress() {
  const pathname = usePathname();
  const nodeId = findNodeId(pathname);
  const [isDone, setIsDone] = useState(() => (nodeId ? readStatuses()[nodeId] === "done" : false));
  const [upcomingLessons, setUpcomingLessons] = useState(() => getUpcomingLessons(readStatuses(), nodeId));

  const markDone = () => {
    if (!nodeId) {
      return;
    }
    const statuses = readStatuses();
    statuses[nodeId] = "done";
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(statuses));
    setIsDone(true);
    setUpcomingLessons(getUpcomingLessons(statuses, nodeId));
  };

  return { canSave: Boolean(nodeId), isDone, markDone, upcomingLessons };
}
