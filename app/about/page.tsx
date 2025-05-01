import { Metadata } from "next";
import AboutHero from "@/components/about-hero";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Ghulam Abbas Ataie - Senior Software Developer and Technical Lead. Discover my journey, expertise, and passion for technology and software development.",
  openGraph: {
    title: "About Ghulam Abbas Ataie",
    description:
      "Learn more about Ghulam Abbas Ataie - Senior Software Developer and Technical Lead. Discover my journey, expertise, and passion for technology and software development.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground flex flex-col">
      <div className="absolute inset-0 z-[-1]"></div>
      <div className="flex-1 max-w-[1200px] mx-auto w-full">
        <AboutHero />
        <AboutContent />
      </div>
    </main>
  );
}
