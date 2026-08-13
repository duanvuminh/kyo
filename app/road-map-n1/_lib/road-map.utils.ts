import { STORAGE_KEY } from "@/app/road-map-n1/_lib/road-map.constants";
import { BASE_META, MAIN_CHILDREN_IDS, RoadmapNodeMeta, RoadmapStatus } from "@/app/road-map-n1/_lib/road-map.types";

export function deriveMainStatus(childStatuses: RoadmapStatus[]): RoadmapStatus {
  if (childStatuses.length === 0) {
    return "todo";
  }
  if (childStatuses.every((s) => s === "done")) {
    return "done";
  }
  if (childStatuses.some((s) => s !== "todo")) {
    return "doing";
  }
  return "todo";
}

export function withDerivedMainStatuses(
  statuses: Record<string, RoadmapStatus>,
): Record<string, RoadmapStatus> {
  const next = { ...statuses };
  Object.entries(MAIN_CHILDREN_IDS).forEach(([mainId, childIds]) => {
    next[mainId] = deriveMainStatus(childIds.map((id) => statuses[id] ?? "todo"));
  });
  return next;
}

export function getStatusLabel(status: RoadmapStatus): string {
  if (status === "done") {
    return "Đã xong";
  }
  if (status === "doing") {
    return "Đang làm";
  }
  return "Chưa làm";
}

export function getStatusClasses(status: RoadmapStatus): string {
  if (status === "done") {
    return "bg-emerald-500 text-white dark:bg-emerald-600";
  }
  if (status === "doing") {
    return "bg-amber-400 text-black dark:bg-amber-500";
  }
  return "bg-slate-300 text-slate-800 dark:bg-slate-600 dark:text-slate-100";
}

export function readStoredStatuses(): Record<string, RoadmapStatus> {
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

export function getUpcomingLessons(
  statuses: Record<string, RoadmapStatus>,
  excludeId?: string,
): RoadmapNodeMeta[] {
  const result: RoadmapNodeMeta[] = [];

  for (const childIds of Object.values(MAIN_CHILDREN_IDS)) {
    const nextId = childIds.find((id) => id !== excludeId && (statuses[id] ?? "todo") !== "done");
    const meta = nextId ? BASE_META.find((m) => m.id === nextId) : undefined;
    if (meta?.href) {
      result.push(meta);
    }
  }

  return result;
}

export interface UpcomingLessonGroup {
  mainId: string;
  groupLabel: string;
  lesson: RoadmapNodeMeta | null;
}

// Khác getUpcomingLessons() ở chỗ luôn trả đủ 1 dòng cho mỗi nhóm (kể cả khi nhóm đã học xong
// hết -> lesson: null), để trang "đang học tiếp" hiển thị đủ 5 nhóm thay vì bị hụt dòng.
export function getUpcomingLessonsByGroup(statuses: Record<string, RoadmapStatus>): UpcomingLessonGroup[] {
  return Object.entries(MAIN_CHILDREN_IDS).map(([mainId, childIds]) => {
    const nextId = childIds.find((id) => (statuses[id] ?? "todo") !== "done");
    const lesson = (nextId ? BASE_META.find((m) => m.id === nextId) : undefined) ?? null;
    const groupLabel = BASE_META.find((m) => m.id === mainId)?.label ?? mainId;
    return { mainId, groupLabel, lesson };
  });
}
