import { auth } from "@/shared/lib/auth";

export const checkAuthenticated = async (): Promise<boolean> => {
  const session = await auth();
  const user = session?.user;
  return user != undefined;
};

export const getUserMail = async (): Promise<string | null | undefined> => {
  const session = await auth();
  const user = session?.user;
  return user?.email;
};
