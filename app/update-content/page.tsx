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
    <div className="flex items-center justify-center h-screen">
      <p className="text-center text-lg">Bạn cần đăng nhập</p>
    </div>
  );
}
