import { EditBox } from "@/feature/update-content/component/edit-box/edit-box";
import { submitUpdateContent, submitUpdateGrammar } from "@/shared/actions/update-content";
import { CenterMessage } from "@/shared/component/center-message";
import { getGrammarEditItem, getHuusennarareEditItem } from "@/shared/lib/update-content";
import { checkAuthenticated } from "@/shared/service/auth";

interface UpdateContentPageProps {
  searchParams?: Promise<{
    kind?: string;
    slug?: string;
  }>;
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

  if (params.kind === "huusennarare" && params.slug) {
    const initialItem = await getHuusennarareEditItem(params.slug);

    if (!initialItem) {
      return <CenterMessage>Không tìm thấy file huusennarare/{params.slug}/page.mdx</CenterMessage>;
    }

    return <EditBox submitAction={submitUpdateContent} initialItem={initialItem} />;
  }

  if (params.kind === "grammar" && params.slug) {
    const initialItem = await getGrammarEditItem(params.slug);

    if (!initialItem) {
      return <CenterMessage>Không tìm thấy file grammar/n1/{params.slug}/flash-card/cards.ts</CenterMessage>;
    }

    return <EditBox submitAction={submitUpdateGrammar} initialItem={initialItem} />;
  }

  return <EditBox submitAction={submitUpdateContent} />;
}
