import { auth } from "@/lib/auth";

export const getAuthInfor = async (): Promise<boolean> => {
  const session = await auth();
  const user = session?.user;
  return user != undefined;
};

export const getUserMail = async (): Promise<string | null | undefined> => {
  const session = await auth();
  const user = session?.user;
  return user?.email;
};
