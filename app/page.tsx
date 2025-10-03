import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  description:
    "Welcome to Abbas Ataie's portfolio. Senior Software Developer and Technical Lead specializing in Full-Stack Development, Cloud Architecture, and Technical Leadership.",
  openGraph: {
    title: "Abbas Ataie | Senior Software Developer & Technical Lead",
    description:
      "Welcome to Abbas Ataie's portfolio. Senior Software Developer and Technical Lead specializing in Full-Stack Development, Cloud Architecture, and Technical Leadership.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Hero with Recently Worked With */}
        <section className="min-h-screen flex flex-col justify-center">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              Software Developer & Technical Lead
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Turning complex problems into elegant solutions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              I specialize in full‑stack development and cloud architecture,
              with a focus on performance, accessibility, and clean DX.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get in touch
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-base font-medium hover:bg-accent"
              >
                View resume
              </Link>
            </div>
          </div>

          {/* Recently worked with - compact */}
          <div className="mt-16 pt-8 border-t border-border/20">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="uppercase tracking-wider">
                Recently worked with
              </span>
              <Image
                src="/cs-logo-light.svg"
                alt="Cloud Station"
                width={96}
                height={20}
                className=" block dark:hidden"
              />
              <Image
                src="/cs-logo-dark.svg"
                alt="Cloud Station"
                width={96}
                height={20}
                className="hidden dark:block"
              />
            </div>
          </div>
        </section>

        {/* Featured work - minimal */}
        <section className="py-14">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xl font-semibold">Featured work</h2>
            <Link
              href="/about"
              className="text-sm text-blue-600 hover:underline"
            >
              About me →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cloud Station Platform",
                href: "https://www.cloud-station.io",
                image: "/cloudstation.png",
              },
              {
                title: "Tara Solutions Cloud",
                href: "https://www.tarasolutions.cloud",
                image: "/tarasolutions.png",
              },
              {
                title: "5th Wave",
                href: "https://wave.cloud-station.io",
                image: "/5th-wave.png",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border overflow-hidden bg-background hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="aspect-video relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-contain bg-muted/20"
                    priority={false}
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-sm text-muted-foreground group-hover:translate-x-0.5 transition-transform">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Specializations */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Specializations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep expertise across the full technology stack, from frontend
              interfaces to cloud infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cloud Architecture",
                description:
                  "Scalable cloud solutions and infrastructure design for enterprise applications",
                technologies: [
                  "AWS",
                  "Docker",
                  "Kubernetes",
                  "Microservices",
                  "CI/CD",
                ],
                icon: "☁️",
              },
              {
                title: "Full-Stack Development",
                description:
                  "End-to-end application development with modern frameworks and best practices",
                technologies: [
                  "React",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "PostgreSQL",
                ],
                icon: "⚡",
              },
              {
                title: "Technical Leadership",
                description:
                  "Leading development teams and driving technical strategy for complex projects",
                technologies: [
                  "Team Management",
                  "Code Reviews",
                  "Architecture",
                  "Mentoring",
                ],
                icon: "🎯",
              },
            ].map((specialization) => (
              <div
                key={specialization.title}
                className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{specialization.icon}</span>
                  <h3 className="text-lg font-semibold">
                    {specialization.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {specialization.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {specialization.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
