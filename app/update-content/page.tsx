import { CenterMessage } from "@/components/center-message";
import { EditBox } from "@/components/edit-box";
import { Toaster } from "@/components/ui/sonner";
import { getAuthInfor } from "@/services/auth";

export default async function Page() {
  const isAuth = await getAuthInfor();
  return isAuth ? (
    <>
      <EditBox />
      <Toaster />
    </>
  ) : (
    <CenterMessage>
      Bạn cần đăng nhập.
      <br />
      Menu → login
    </CenterMessage>
  );
}
