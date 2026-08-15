import { Skeleton } from "@/components/ui/skeleton";

export function PodcastResultsSkeleton() {
  return (
    <ul className="flex flex-col gap-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i} className="flex items-center gap-3">
          <Skeleton className="h-14 w-14 shrink-0 rounded" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-24" />
          </div>
        </li>
      ))}
    </ul>
  );
}
