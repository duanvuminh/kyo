import { CenterMessage } from "@/components/center-message";
import { EditBox } from "@/components/edit-box";
import { Toaster } from "@/components/ui/sonner";
import { getAuthInfor } from "@/services/auth";
import { Fragment } from "react";

export default async function Page() {
  const isAuth = await getAuthInfor();
  return isAuth ? (
    <Fragment>
      <EditBox />
      <Toaster />
    </Fragment>
  ) : (
    <CenterMessage>
      Bạn cần đăng nhập.
      <br />
      Menu → login
    </CenterMessage>
  );
}
