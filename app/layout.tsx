import "@/app/globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { StoreProvider } from "@/providers/store-provider";
import type { Metadata } from "next";
import Link from "next/link";

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
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
              <div className="sticky top-0 flex items-center z-1">
                <SidebarTrigger />
                <Link href="/">KYO</Link>
              </div>
              {children}
            </main>
          </SidebarProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
