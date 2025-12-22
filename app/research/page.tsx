import ResearchListing from "@/components/research-listing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research studies and academic work by Abbas Ataie. Explore my research in data science, student performance analysis, and educational technology.",
  keywords: [
    "Research",
    "Academic Work",
    "Data Science Research",
    "Student Performance",
    "Educational Technology",
    "Abbas Ataie Research",
    "University Research",
    "Academic Studies",
  ],
  openGraph: {
    title: "Research | Abbas Ataie",
    description:
      "Research studies and academic work by Abbas Ataie. Explore my research in data science, student performance analysis, and educational technology.",
    url: "https://ataie.me/research",
    siteName: "Abbas Ataie",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/research-og.png",
        width: 1200,
        height: 630,
        alt: "Research - Abbas Ataie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research | Abbas Ataie",
    description:
      "Research studies and academic work by Abbas Ataie. Explore my research in data science, student performance analysis, and educational technology.",
    creator: "@abbasataie",
    images: ["/research-og.png"],
  },
  alternates: {
    canonical: "https://ataie.me/research",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen text-foreground bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <ResearchListing />
    </div>
  );
}
