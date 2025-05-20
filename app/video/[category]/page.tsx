import { KVideo } from "@/components/video";
import { getVideos } from "@/services/video";
import { Video } from "@/types/models/video";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const videos: Video[] = await getVideos(0, category);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
      {videos.map((video) => (
        <KVideo key={video.id} video={video} />
      ))}
    </div>
  );
}
