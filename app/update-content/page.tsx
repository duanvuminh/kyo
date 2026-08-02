import { EditBox } from "@/feature/update-content/component/edit-box/edit-box";
import { GrammarCardsEditor } from "@/feature/update-content/component/grammar-editor/grammar-cards-editor";
import { parseCardsSource } from "@/feature/update-content/mapper/cards-parser";
import type { EditableCard } from "@/feature/update-content/types/cards";
import { submitUpdateContent, submitUpdateGrammar } from "@/shared/actions/update-content";
import { CenterMessage } from "@/shared/component/center-message";
import { getGrammarEditItem } from "@/shared/lib/update-content";
import { checkAuthenticated } from "@/shared/service/auth";
import type { BaseItem } from "@/shared/type/models/word";

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
      return <CenterMessage>Không tìm thấy file grammar/n1/{params.slug}/flash-card/cards.ts</CenterMessage>;
    }

    return <GrammarEditRoute slug={params.slug} item={initialItem} />;
  }

  return <EditBox submitAction={submitUpdateContent} />;
}
