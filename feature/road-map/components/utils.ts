import { MAIN_CHILDREN_IDS, RoadmapStatus } from "@/feature/road-map/model/road-map";

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
