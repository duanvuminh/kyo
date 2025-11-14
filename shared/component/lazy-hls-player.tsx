"use client";

import { Skeleton } from "@/shared/component//ui/skeleton";
import HlsPlayer from "@/shared/component/hls-player/hls-player";
import { Sub } from "@/shared/types/models/sub";
import { useInView } from "react-intersection-observer";

type Props = {
  src: string;
  subs?: Sub[];
  subVi?: Sub[];
  subJa?: Sub[];
  controls?: boolean;
  className?: string;
  poster?: string;
};

export default function LazyHlsPlayer({
  src,
  subs,
  subVi,
  subJa,
  controls,
  className,
  poster,
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <HlsPlayer
          src={src}
          subVi={subVi}
          subJa={subJa}
          subs={subs}
          controls={controls}
          className={className}
          poster={poster}
        />
      ) : (
        <Skeleton className="w-full aspect-video rounded-xl" />
      )}
    </div>
  );
}
