import { getGrammarAnime } from "@/app/grammar/anime/_lib/grammar-anime.repository";
import { UpdateContentLink } from "@/lib/components/update-content-link";
import Image from "next/image";

interface PageProps {
  params: Promise<{ level: string; page: string }>;
}

export default async function Page({ params }: PageProps) {
  const { level, page } = await params;
  const anime = await getGrammarAnime(level, page);

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
        <UpdateContentLink href={`/grammar/anime/${level}/${page}/edit`}>
          {anime ? "Sửa" : "Tạo mới"}
        </UpdateContentLink>
      </div>
    </div>
  );
}
