import { EditBox } from "@/app/update-content/_components/edit-box/edit-box";
import { GrammarCardsEditor } from "@/app/update-content/_components/grammar-editor/grammar-cards-editor";
import { parseCardsSource } from "@/app/update-content/_lib/update-content.service";
import type { EditableCard } from "@/app/update-content/_lib/update-content.types";
import { submitUpdateContent, submitUpdateGrammar, submitUpdateGrammarPage } from "@/app/actions/update-content.actions";
import { CenterContent } from "@/lib/components/center-content";
import { getGrammarEditItem, getGrammarPageEditItem } from "@/lib/repositories/local-content.repository";
import { checkAuthenticated } from "@/lib/auth";
import type { BaseItem } from "@/lib/types";
import { notFound } from "next/navigation";

interface UpdateContentPageProps {
  searchParams?: Promise<{
    kind?: string;
    slug?: string;
    front?: string;
  }>;
}

function GrammarEditRoute({ slug, item, focusFront }: { slug: string; item: BaseItem; focusFront?: string }) {
  let initialCards: EditableCard[] | null = null;
  try {
    initialCards = item.content ? parseCardsSource(item.content) : null;
  } catch {
    initialCards = null;
  }

  if (!initialCards) {
    return <EditBox submitAction={submitUpdateGrammar} initialItem={item} />;
  }

  return <GrammarCardsEditor documentId={slug} initialCards={initialCards} focusFront={focusFront} />;
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

  if (params.kind === "grammar" && params.slug) {
    const initialItem = await getGrammarEditItem(params.slug);

    if (!initialItem) {
      notFound();
    }

    return <GrammarEditRoute slug={params.slug} item={initialItem} focusFront={params.front} />;
  }

  if (params.kind === "grammar-page" && params.slug) {
    const initialItem = await getGrammarPageEditItem(params.slug);

    if (!initialItem) {
      notFound();
    }

    return <EditBox submitAction={submitUpdateGrammarPage} initialItem={initialItem} />;
  }

  return <EditBox submitAction={submitUpdateContent} />;
}
