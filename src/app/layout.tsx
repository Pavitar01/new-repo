import type { Metadata } from "next";
import localFont from "next/font/local";
import StoreProvider from "@/shared/providers/store-provider";
import "./globals.scss";
import { giselle } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Next project",
  description: "A Sample Next.js project with scalable modular structure",
  icons: {
    icon: "/app-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={giselle.variable}>
      <body suppressHydrationWarning={true}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
