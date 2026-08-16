import { extractHeadingTitle } from "@/app/update-content/_lib/page-wrapper.service";
import { AnimeForm } from "@/lib/components/anime-form/anime-form";
import { getAnime } from "@/lib/repositories/anime.repository";
import { getPageEditItem } from "@/lib/repositories/local-content.repository";
import { checkAuthenticated } from "@/lib/auth";
import { CenterContent } from "@/lib/components/center-content";
import { ContentSection } from "@/lib/content-section";

async function getSuggestedTitle(section: ContentSection, level: string, page: string): Promise<string | undefined> {
  const item = await getPageEditItem(section, level, page);
  if (!item?.content) {
    return undefined;
  }
  return extractHeadingTitle(item.content) ?? undefined;
}

export async function AnimeEditView({ section, level, page }: { section: ContentSection; level: string; page: string }) {
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

  const existing = await getAnime(section, level, page);
  const defaultTitle = existing ? undefined : await getSuggestedTitle(section, level, page);

  return (
    <div className="prose mx-auto w-full p-2">
      <h1>
        Anime version — {level}/{page}
      </h1>
      <AnimeForm section={section} level={level} page={page} initial={existing} defaultTitle={defaultTitle} />
    </div>
  );
}
