import { Metadata } from "next";

import Hero from "@/components/hero";
import About from "@/components/about";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import ProjectShowcase from "@/components/project-showcase";
export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Ghulam Abbas Ataie's portfolio. Senior Software Developer and Technical Lead specializing in Full-Stack Development, Cloud Architecture, and Technical Leadership.",
  openGraph: {
    title: "Ghulam Abbas Ataie | Senior Software Developer & Technical Lead",
    description:
      "Welcome to Ghulam Abbas Ataie's portfolio. Senior Software Developer and Technical Lead specializing in Full-Stack Development, Cloud Architecture, and Technical Leadership.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,25,128,0.2),rgba(0,0,0,0))] z-[-1]"></div>
      <div className="flex-1 max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Hero />
        <ProjectShowcase />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
