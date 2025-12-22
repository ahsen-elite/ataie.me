import { Metadata } from "next";
import AboutHeroSection from "@/components/about-hero-section";
import AboutStatsSection from "@/components/about-stats-section";
import AboutExpertiseSection from "@/components/about-expertise-section";
import AboutCompaniesSection from "@/components/about-companies-section";
import AboutCertificationSection from "@/components/about-certification-section";
import AboutRoshanayeeSection from "@/components/about-roshanayee-section";
import AboutMastersSection from "@/components/about-masters-section";
import AboutBachelorsSection from "@/components/about-bachelors-section";

export const metadata: Metadata = {
  title: "About Abbas Ataie - Software Engineer, Data Scientist & Educator",
  description:
    "Learn more about Abbas Ataie - Software Engineer, Data Scientist, and Founder of Roshanayee. Discover my journey in software development, data science, teaching, and YouTube content creation.",
  keywords:
    "Abbas Ataie, Software Engineer, Data Scientist, Roshanayee, Programming Education, YouTube Tech Content, Web Development, Software Engineering, Data Science",
  openGraph: {
    title: "About Abbas Ataie - Software Engineer & Data Scientist",
    description:
      "Software Engineer, Data Scientist, and Founder of Roshanayee. Sharing knowledge through teaching and YouTube content creation.",
    type: "website",
    url: "https://ataie.me/about",
    images: [
      {
        url: "/about-og.png",
        width: 1200,
        height: 630,
        alt: "Abbas Ataie - Software Engineer & Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Abbas Ataie - Software Engineer & Data Scientist",
    description:
      "Software Engineer, Data Scientist, and Founder of Roshanayee. Sharing knowledge through teaching and YouTube content creation.",
    images: ["/about-og.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <AboutHeroSection />
      <AboutStatsSection />
      <AboutExpertiseSection />
      <AboutCompaniesSection />
      <AboutCertificationSection />
      <AboutRoshanayeeSection />
      <AboutMastersSection />
      <AboutBachelorsSection />
    </main>
  );
}
