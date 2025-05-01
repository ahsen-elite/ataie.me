import { Metadata } from "next";

import Hero from "@/components/hero";
import About from "@/components/about";
import ProjectShowcase from "@/components/project-showcase";

export const metadata: Metadata = {
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
    <main className="min-h-screen flex flex-col">
      <div className="absolute"></div>
      <div className="flex-1 max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Hero />
        <ProjectShowcase />
        <About />
      </div>
    </main>
  );
}
