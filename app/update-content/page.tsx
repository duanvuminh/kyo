import { EditBox } from "@/feature/update-content/component/edit-box/edit-box";
import { CenterMessage } from "@/shared/component/center-message";
import { checkAuthenticated } from "@/shared/service/auth";
import { submitUpdateContent } from "./actions";

export default async function Page() {
  const isAuth = await checkAuthenticated();
  return isAuth ? (
    <>
      <EditBox submitAction={submitUpdateContent} />
    </>
  ) : (
    <CenterMessage>
      Bạn cần đăng nhập.
      <br />
      Menu → login
    </CenterMessage>
  );
}
