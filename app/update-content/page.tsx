import { EditBox } from "@/app/update-content/_components/edit-box/edit-box";
import { CardsEditRoute } from "@/app/update-content/_components/cards-editor/cards-edit-route";
import { submitUpdateContent, submitUpdatePage } from "@/app/actions/update-content.actions";
import { CenterContent } from "@/lib/components/center-content";
import { ContentSection, isContentSection } from "@/lib/content-section";
import { getCardsEditItem, getPageEditItem } from "@/lib/repositories/local-content.repository";
import { checkAuthenticated } from "@/lib/auth";
import { notFound } from "next/navigation";

interface UpdateContentPageProps {
  searchParams?: Promise<{
    kind?: string;
    section?: string;
    slug?: string;
    front?: string;
  }>;
}

async function renderCardsEdit(section: ContentSection, slug: string, focusFront?: string) {
  const initialItem = await getCardsEditItem(section, "n1", slug);
  if (!initialItem) {
    notFound();
  }
  return <CardsEditRoute section={section} slug={slug} item={initialItem} focusFront={focusFront} />;
}

async function renderPageEdit(section: ContentSection, slug: string) {
  const initialItem = await getPageEditItem(section, "n1", slug);
  if (!initialItem) {
    notFound();
  }
  return <EditBox submitAction={submitUpdatePage} initialItem={initialItem} />;
}

export default async function Page({ searchParams }: UpdateContentPageProps) {
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

  const params = (await searchParams) ?? {};
  const section = isContentSection(params.section) ? params.section : null;

  if (params.kind === "cards" && section && params.slug) {
    return renderCardsEdit(section, params.slug, params.front);
  }

  if (params.kind === "page" && section && params.slug) {
    return renderPageEdit(section, params.slug);
  }

  return <EditBox submitAction={submitUpdateContent} />;
}
