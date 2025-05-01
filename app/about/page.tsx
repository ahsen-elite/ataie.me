import AboutHero from "@/components/about-hero";
import AboutContent from "@/components/about-content";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
