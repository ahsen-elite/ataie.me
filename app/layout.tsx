import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import ScrollToTop from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ataie.me"),
  title: {
    default: "Ghulam Abbas Ataie | Senior Software Developer & Technical Lead",
    template: "%s | Ghulam Abbas Ataie",
  },
  description:
    "Portfolio of Ghulam Abbas Ataie, Senior Software Developer and Technical Lead with expertise in Full-Stack Development, Cloud Architecture, and Technical Leadership. Specializing in React, Node.js, TypeScript, and AWS solutions.",
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
    "Software Engineering",
    "Web Applications",
    "Cloud Solutions",
    "Technical Leadership",
    "Software Architecture",
    "Senior Developer",
    "Web Performance",
    "System Design",
    "API Development",
  ],
  authors: [{ name: "Ghulam Abbas Ataie", url: "https://ataie.me" }],
  creator: "Ghulam Abbas Ataie",
  publisher: "Ghulam Abbas Ataie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ataie.me",
    title: "Ghulam Abbas Ataie | Senior Software Developer & Technical Lead",
    description:
      "Portfolio of Ghulam Abbas Ataie, Senior Software Developer and Technical Lead with expertise in Full-Stack Development, Cloud Architecture, and Technical Leadership. Specializing in React, Node.js, TypeScript, and AWS solutions.",
    siteName: "Ghulam Abbas Ataie",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ghulam Abbas Ataie - Senior Software Developer & Technical Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghulam Abbas Ataie | Senior Software Developer & Technical Lead",
    description:
      "Portfolio of Ghulam Abbas Ataie, Senior Software Developer and Technical Lead with expertise in Full-Stack Development, Cloud Architecture, and Technical Leadership. Specializing in React, Node.js, TypeScript, and AWS solutions.",
    creator: "@abbasataie",
    images: ["/opengraph-image.png"],
    site: "@abbasataie",
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
  alternates: {
    canonical: "https://ataie.me",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/favicon.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Portfolio Website",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  applicationName: "Ghulam Abbas Ataie Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ghulam Abbas Ataie",
  url: "https://ataie.me",
  jobTitle: "Senior Software Developer & Technical Lead",
  description:
    "Senior Software Developer and Technical Lead with expertise in Full-Stack Development, Cloud Architecture, and Technical Leadership",
  sameAs: ["https://twitter.com/abbasataie", "https://github.com/abbasatayee"],
  worksFor: {
    "@type": "Organization",
    name: "Tara Solutions Inc",
  },
  knowsAbout: [
    "Full-Stack Development",
    "Cloud Architecture",
    "Technical Leadership",
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "Web Development",
    "Software Architecture",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Europe for Applied Sciences (UE)",
  },
  image: "https://ataie.me/opengraph-image.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://ataie.me",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
          suppressHydrationWarning
        />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Berlin" />
        <meta name="geo.position" content="52.52;13.403" />
        <meta name="ICBM" content="52.52, 13.403" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="pt-24 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-foreground ">
            <Header />

            {children}

            <Contact />
            <Footer />
            <ScrollToTop />
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
