import Header from '@/components/header';
import Hero from '@/components/hero';
import ProjectShowcase from '@/components/project-showcase';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,25,128,0.2),rgba(0,0,0,0))] z-[-1]"></div>
      <Header />
      <div className="flex-1 max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Hero />
        <ProjectShowcase />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}