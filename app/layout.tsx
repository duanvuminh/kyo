import "@/app/globals.css";
import { AppSidebar } from "@/lib/components/app-sidebar/app-sidebar";
import { KBreadCrumb } from "@/lib/components/bread-crumb/bread-crumb";
import { RegisterServiceWorker } from "@/lib/components/register-service-worker";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { StoreProvider } from "@/lib/store-provider";
import type { Metadata, Viewport } from "next";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Kyo",
  description: "Học tiếng Nhật cùng Kyo",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Kyo",
  },
};

export const viewport: Viewport = {
  themeColor: "#b91c1c",
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
              <AppSidebar />
              <SidebarInset>
                <div className="sticky top-0 flex items-center z-1 m-1 gap-2">
                  <SidebarTrigger />
                  <KBreadCrumb />
                </div>
                {children}
              </SidebarInset>
            </SidebarProvider>
            <Toaster />
            <RegisterServiceWorker />
          </SessionProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
