import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import MouseEffect from "@/components/mouse-effect";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ataie.me"),
  title: {
    default: "Ghulam Abbas Ataie | Senior Software Developer & Technical Lead",
    template: "%s | Ghulam Abbas Ataie",
  },
  description:
    "Portfolio of Ghulam Abbas Ataie, Senior Software Developer and Technical Lead with expertise in Full-Stack Development, Cloud Architecture, and Technical Leadership",
  keywords: [
    "Ghulam Abbas Ataie",
    "Software Developer",
    "Technical Lead",
    "Full-Stack Development",
    "Cloud Architecture",
    "Web Development",
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Ghulam Abbas Ataie" }],
  creator: "Ghulam Abbas Ataie",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ataie.me",
    title: "Ghulam Abbas Ataie | Senior Software Developer & Technical Lead",
    description:
      "Portfolio of Ghulam Abbas Ataie, Senior Software Developer and Technical Lead with expertise in Full-Stack Development, Cloud Architecture, and Technical Leadership",
    siteName: "Ghulam Abbas Ataie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghulam Abbas Ataie | Senior Software Developer & Technical Lead",
    description:
      "Portfolio of Ghulam Abbas Ataie, Senior Software Developer and Technical Lead with expertise in Full-Stack Development, Cloud Architecture, and Technical Leadership",
    creator: "@abbasataie",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification",
  },
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
