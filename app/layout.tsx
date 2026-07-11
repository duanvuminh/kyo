import { AppSidebarServer } from "@/shared/component/app-sidebar/app-sidebar-server";
import { KBreadCrumb } from "@/shared/component/bread-crumb/bread-crumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/shared/component/ui/sidebar";
import { Toaster } from "@/shared/component/ui/sonner";
import { StoreProvider } from "@/shared/providers/store-provider";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Kyo",
  description: "Học tiếng Nhật cùng Kyo",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <SessionProvider>
            <SidebarProvider defaultOpen={false}>
              <AppSidebarServer />
              <SidebarInset>
                <div className="sticky top-0 flex items-center z-1 m-1 gap-2">
                  <SidebarTrigger />
                  <KBreadCrumb />
                </div>
                {children}
              </SidebarInset>
            </SidebarProvider>
            <Toaster />
          </SessionProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
