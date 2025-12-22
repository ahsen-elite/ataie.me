import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Code,
  Brain,
  Database,
  BarChart3,
  TrendingUp,
} from "lucide-react";

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
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Software Engineer & Data Scientist
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Building software systems and{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  extracting insights from data
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                I develop scalable applications and apply machine learning to
                solve complex problems. Combining software engineering expertise
                with data science to deliver impactful solutions.
              </p>

              {/* Experience Stats - Creative */}
              <div className="grid grid-cols-2 gap-4 pt-4 max-w-md">
                {/* Software Engineering Experience */}
                <div className="relative group">
                  <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <TrendingUp className="w-4 h-4 text-blue-600/60 dark:text-blue-400/60" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        6
                      </div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Years
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Software Engineering
                      </div>
                    </div>
                    {/* Progress bar indicator */}
                    <div className="mt-3 h-1.5 bg-blue-500/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Data Science Experience */}
                <div className="relative group">
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <TrendingUp className="w-4 h-4 text-purple-600/60 dark:text-purple-400/60" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        1
                      </div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Year
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Data Science & ML
                      </div>
                    </div>
                    {/* Progress bar indicator - showing growth */}
                    <div className="mt-3 h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-500 rounded-full"
                        style={{ width: "16.67%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Areas - Balanced */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: Code, label: "Software Engineering" },
                  { icon: Brain, label: "Machine Learning" },
                  { icon: Database, label: "Data Science" },
                  { icon: BarChart3, label: "Analytics" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50 hover:bg-muted transition-colors"
                  >
                    <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                >
                  Get in touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-base font-medium hover:bg-accent transition-colors"
                >
                  View resume
                </Link>
              </div>
            </div>

            {/* Recently worked with */}
            <div className="mt-20 pt-8 border-t border-border/20">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="uppercase tracking-wider">
                  Recently worked with
                </span>
                <Image
                  src="/cs-logo-light.svg"
                  alt="Cloud Station"
                  width={96}
                  height={20}
                  className="block dark:hidden"
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
              Deep expertise across software engineering and data science, from
              building scalable applications to extracting actionable insights
              from complex datasets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Data Science & ML",
                description:
                  "Machine learning models, predictive analytics, and data-driven decision making for business intelligence",
                technologies: [
                  "Python",
                  "TensorFlow",
                  "Pandas",
                  "Scikit-learn",
                  "Data Analytics",
                ],
                icon: "📊",
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
