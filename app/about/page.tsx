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
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,25,128,0.2),rgba(0,0,0,0))] z-[-1]"></div>
      <div className="flex-1 max-w-[1200px] mx-auto w-full">
        <AboutHero />
        <AboutContent />
      </div>
    </main>
  );
}
