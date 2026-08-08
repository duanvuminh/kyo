import { env } from "@/lib/env";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

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
