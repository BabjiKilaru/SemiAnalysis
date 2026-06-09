import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { StickySalesBar } from "@/components/marketing";
import "./globals.css";

export const metadata: Metadata = {
  title: "SemiAnalysis — Institutional Research & Industry Models",
  description:
    "Independent semiconductor and AI research. Industry models, ChipBook, and institutional insights.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full antialiased">
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
        <StickySalesBar />
      </body>
    </html>
  );
}
