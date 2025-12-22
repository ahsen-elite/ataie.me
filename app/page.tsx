import { Metadata } from "next";
import HomeHero from "@/components/home-hero";
import HomeFeaturedProjects from "@/components/home-featured-projects";
import HomeRecentResearch from "@/components/home-recent-research";
import HomeSpecializations from "@/components/home-specializations";

export const metadata: Metadata = {
  description:
    "Welcome to Abbas Ataie's portfolio. Software Engineer and Data Scientist specializing in Full-Stack Development, Data Science, Cloud Architecture, and Technical Leadership.",
  openGraph: {
    title: "Abbas Ataie | Software Engineer & Data Scientist",
    description:
      "Welcome to Abbas Ataie's portfolio. Software Engineer and Data Scientist specializing in Full-Stack Development, Data Science, Cloud Architecture, and Technical Leadership.",
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
