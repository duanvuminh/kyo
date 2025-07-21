import { Video } from "@/feature/video/model/video";
import Image from "next/image";
import Link from "next/link";

export const KVideo = ({ video }: { video: Video }) => {
  return (
    <div key={video.id} className="space-y-2">
      <div className="aspect-video relative rounded-xl overflow-hidden">
        <Link href={video.url}>
          <div className="aspect-video relative rounded-xl overflow-hidden">
            <Image
              src={video.image}
              alt={video.title}
              fill
              className="object-cover"
            />
          </div>
        </Link>
      </div>
      <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
    </div>
  );
};
