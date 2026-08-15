import { EditBox } from "@/app/update-content/_components/edit-box/edit-box";
import { GrammarEditRoute } from "@/app/update-content/_components/grammar-editor/grammar-edit-route";
import { submitUpdateContent, submitUpdateGrammarPage } from "@/app/actions/update-content.actions";
import { CenterContent } from "@/lib/components/center-content";
import { getGrammarEditItem, getGrammarPageEditItem } from "@/lib/repositories/local-content.repository";
import { checkAuthenticated } from "@/lib/auth";
import { notFound } from "next/navigation";

interface UpdateContentPageProps {
  searchParams?: Promise<{
    kind?: string;
    slug?: string;
    front?: string;
  }>;
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
