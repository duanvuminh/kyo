import { EditBox } from "@/feature/update-content/component/edit-box/edit-box";
import { CenterMessage } from "@/shared/component/center-message";
import { getAuthInfor } from "@/shared/service/auth";

export default async function Page() {
  const isAuth = await getAuthInfor();
  return isAuth ? (
    <>
      <EditBox />
    </>
  ) : (
    <CenterMessage>
      Bạn cần đăng nhập.
      <br />
      Menu → login
    </CenterMessage>
  );
}
