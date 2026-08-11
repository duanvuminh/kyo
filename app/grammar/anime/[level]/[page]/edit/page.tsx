import { GrammarAnimeForm } from "@/app/grammar/anime/_components/grammar-anime-form";
import { getGrammarAnime } from "@/app/grammar/anime/_lib/grammar-anime.repository";
import { checkAuthenticated } from "@/lib/auth";
import { CenterContent } from "@/lib/components/center-content";

interface PageProps {
  params: Promise<{ level: string; page: string }>;
}

export default async function Page({ params }: PageProps) {
  const isAuth = await checkAuthenticated();
  if (!isAuth) {
    return (
      <CenterContent>
        Bạn cần đăng nhập.
        <br />
        Menu → login
      </CenterContent>
    );
  }

  const { level, page } = await params;
  const existing = await getGrammarAnime(level, page);

  return (
    <div className="prose mx-auto w-full p-2">
      <h1>Anime version — {level}/{page}</h1>
      <GrammarAnimeForm level={level} page={page} initial={existing} />
    </div>
  );
}
