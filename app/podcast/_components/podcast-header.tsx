import Image from "next/image";

export function PodcastHeader({ artworkUrl, name, artist }: { artworkUrl: string; name: string; artist: string }) {
  return (
    <div className="flex items-center gap-3">
      {artworkUrl && <Image src={artworkUrl} alt={name} width={64} height={64} className="rounded" />}
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm text-muted-foreground">{artist}</p>
      </div>
    </div>
  );
}
