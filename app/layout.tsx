import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import MouseEffect from "@/components/mouse-effect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghulam Abbas Ataie | Senior Software Developer & Technical Lead",
  description:
    "Portfolio of Ghulam Abbas Ataie, Senior Software Developer and Technical Lead with expertise in Full-Stack Development, Cloud Architecture, and Technical Leadership",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <MouseEffect />
        <Header />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="pt-24">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
