import { CenterMessage } from "@/component/center-message";
import { EditBox } from "@/feature/update-content/component/edit-box/edit-box";
import { getAuthInfor } from "@/service/auth";

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
