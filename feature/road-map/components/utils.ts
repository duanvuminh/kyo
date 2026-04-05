import { RoadmapStatus } from "@/feature/road-map/model/road-map";

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
