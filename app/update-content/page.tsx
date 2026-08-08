import { EditBox } from "@/app/update-content/_components/edit-box/edit-box";
import { GrammarCardsEditor } from "@/app/update-content/_components/grammar-editor/grammar-cards-editor";
import { parseCardsSource } from "@/app/update-content/_lib/update-content.service";
import type { EditableCard } from "@/app/update-content/_lib/update-content.types";
import { submitUpdateContent, submitUpdateGrammar } from "@/app/actions/update-content.actions";
import { CenterMessage } from "@/lib/components/center-message";
import { getGrammarEditItem } from "@/lib/repositories/local-content";
import { checkAuthenticated } from "@/lib/auth";
import type { BaseItem } from "@/lib/types";
import { notFound } from "next/navigation";

interface UpdateContentPageProps {
  searchParams?: Promise<{
    kind?: string;
    slug?: string;
  }>;
}

function GrammarEditRoute({ slug, item }: { slug: string; item: BaseItem }) {
  let initialCards: EditableCard[] | null = null;
  try {
    initialCards = item.content ? parseCardsSource(item.content) : null;
  } catch {
    initialCards = null;
  }

  if (!initialCards) {
    return <EditBox submitAction={submitUpdateGrammar} initialItem={item} />;
  }

  return <GrammarCardsEditor documentId={slug} initialCards={initialCards} />;
}

export default async function Page({ searchParams }: UpdateContentPageProps) {
  const isAuth = await checkAuthenticated();

  if (!isAuth) {
    return (
      <CenterMessage>
        Bạn cần đăng nhập.
        <br />
        Menu → login
      </CenterMessage>
    );
  }

  const params = (await searchParams) ?? {};

  if (params.kind === "grammar" && params.slug) {
    const initialItem = await getGrammarEditItem(params.slug);

    if (!initialItem) {
      notFound();
    }

    return <GrammarEditRoute slug={params.slug} item={initialItem} />;
  }

  return <EditBox submitAction={submitUpdateContent} />;
}
