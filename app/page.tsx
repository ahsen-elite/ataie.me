import { Metadata } from "next";
import HomeHero from "@/components/home-hero";
import HomeFeaturedProjects from "@/components/home-featured-projects";
import HomeRecentResearch from "@/components/home-recent-research";
import HomeSpecializations from "@/components/home-specializations";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio of Abbas Ataie - Software Engineer & Data Scientist with 6+ years of experience. Specializing in Full-Stack Development, Data Science, Machine Learning, Cloud Architecture, and Technical Leadership. Explore projects, research, and professional services.",
  keywords: [
    "Abbas Ataie",
    "Ghulam Abbas Ataie",
    "Ghulam Abbas",
    "Afghan Developer",
    "UE Software Engineer",
    "Master Of Data Science",
    "Software Engineer",
    "Data Scientist",
    "Portfolio",
    "Full-Stack Developer",
    "Machine Learning",
    "Data Science",
    "Cloud Architecture",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "AWS Solutions",
    "Technical Lead",
    "Web Development",
    "Data Analytics",
  ],
  openGraph: {
    title: "Abbas Ataie | Software Engineer & Data Scientist",
    description:
      "Portfolio of Abbas Ataie - Software Engineer & Data Scientist with 6+ years of experience. Specializing in Full-Stack Development, Data Science, Machine Learning, Cloud Architecture, and Technical Leadership.",
    url: "https://ataie.me",
    siteName: "Abbas Ataie",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Abbas Ataie - Software Engineer & Data Scientist Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abbas Ataie | Software Engineer & Data Scientist",
    description:
      "Portfolio of Abbas Ataie - Software Engineer & Data Scientist with 6+ years of experience. Specializing in Full-Stack Development, Data Science, Machine Learning, and Cloud Architecture.",
    creator: "@abbasataie",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://ataie.me",
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
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <HomeHero />
        <HomeFeaturedProjects />
        <HomeRecentResearch />
        <HomeSpecializations />
      </div>
    </main>
  );
}
