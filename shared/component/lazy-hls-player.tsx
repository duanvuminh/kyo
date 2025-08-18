"use client";

import { Skeleton } from "@/shared/component//ui/skeleton";
import HlsPlayer from "@/shared/component/hls-player/hls-player";
import { useInView } from "react-intersection-observer";

type Props = {
  src: string;
  sub?: string;
  controls?: boolean;
  className?: string;
};

export default function LazyHlsPlayer({
  src,
  sub,
  controls,
  className,
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
          sub={sub}
          controls={controls}
          className={className}
        />
      ) : (
        <Skeleton className="h-96 w-full rounded-xl" />
      )}
    </div>
  );
}
