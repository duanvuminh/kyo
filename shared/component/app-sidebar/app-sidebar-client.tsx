"use client";

import { AppSidebarUI } from "@/shared/component/app-sidebar/app-sidebar-ui";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AppSidebarClient() {
  const { data: session, status } = useSession();

  return (
    <AppSidebarUI
      email={session?.user?.email ?? null}
      isLoading={status === "loading"}
      onLogin={() => signIn("google")}
      onLogout={() => signOut()}
    />
  );
}
