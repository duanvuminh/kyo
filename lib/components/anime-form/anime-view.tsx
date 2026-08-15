import { getAnime } from "@/lib/repositories/anime.repository";
import { UpdateContentLink } from "@/lib/components/update-content-link";
import { ContentSection } from "@/lib/content-section";
import Image from "next/image";

export async function AnimeView({ section, level, page }: { section: ContentSection; level: string; page: string }) {
  const anime = await getAnime(section, level, page);

  return (
    <div className="prose mx-auto w-full p-2">
      {anime ? (
        <>
          <h1>{anime.title}</h1>
          <div className="flex flex-col gap-4">
            {(anime.images ?? []).map((image, i) => (
              <Image
                key={image.url}
                src={image.url}
                alt={`${anime.title} ${i + 1}`}
                width={image.width}
                height={image.height}
                className="w-full h-auto rounded border"
              />
            ))}
          </div>
        </>
      ) : (
        <p>Chưa có anime version cho trang này.</p>
      )}
      <div className="flex justify-center py-4 text-muted-foreground">
        <UpdateContentLink href={`/${section}/anime/${level}/${page}/edit`}>
          {anime ? "Sửa" : "Tạo mới"}
        </UpdateContentLink>
      </div>
    </div>
  );
}
