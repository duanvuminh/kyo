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

interface ResolvedEditParams {
  kind: "cards" | "page";
  section: ContentSection;
  slug: string;
}

function resolveEditParams(params: { kind?: string; section?: string; slug?: string }): ResolvedEditParams | null {
  const section = isContentSection(params.section) ? params.section : null;
  if (!section || !params.slug || (params.kind !== "cards" && params.kind !== "page")) {
    return null;
  }
  return { kind: params.kind, section, slug: params.slug };
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
  const resolved = resolveEditParams(params);

  if (resolved?.kind === "cards") {
    const item = await getCardsEditItem(resolved.section, "n1", resolved.slug);
    if (!item) {
      notFound();
    }
    return <CardsEditRoute section={resolved.section} slug={resolved.slug} item={item} focusFront={params.front} />;
  }

  if (resolved?.kind === "page") {
    const item = await getPageEditItem(resolved.section, "n1", resolved.slug);
    if (!item) {
      notFound();
    }
    return <EditBox submitAction={submitUpdatePage} initialItem={item} />;
  }

  return <EditBox submitAction={submitUpdateContent} />;
}
