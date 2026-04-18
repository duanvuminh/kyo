"use client";

import { SidebarFooterMenu } from "@/shared/component/app-sidebar/sidebar-footer-menu";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AppSidebarClient() {
  const { data: session, status } = useSession();

  return (
    <SidebarFooterMenu
      email={session?.user?.email ?? null}
      isLoading={status === "loading"}
      onLogin={() => signIn("google")}
      onLogout={() => signOut()}
    />
  );
}
