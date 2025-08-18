import { auth } from "@/shared/lib/auth";

export const getAuthInfor = async (): Promise<boolean> => {
  try {
    const session = await auth();
    const user = session?.user;
    return user != undefined;
  } catch {
    return false;
  }
};

export const getUserMail = async (): Promise<string | null | undefined> => {
  try {
    const session = await auth();
    const user = session?.user;
    return user?.email;
  } catch {
    return undefined;
  }
};
