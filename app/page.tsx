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
  ExternalLink,
  Globe,
  Cloud,
  GraduationCap,
  FileText,
  Video,
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

        {/* Featured Projects - Creative Design */}
        <section className="py-16">
          <div className="mb-10">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
                <p className="text-muted-foreground">
                  A selection of my work combining software engineering and data
                  science
                </p>
              </div>
              <Link
                href="/about"
                className="text-sm text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 font-medium hidden sm:block"
              >
                View all →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cloud Station Platform */}
            <Link
              href="https://www.cloud-station.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/5 via-background to-purple-500/5 p-1 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="relative rounded-xl bg-background p-6">
                  {/* Image Section - Full Width */}
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                    <Image
                      src="/cloudstation.png"
                      alt="Cloud Station Platform"
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20">
                          <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-1">
                            Cloud Station
                          </h3>
                          <span className="text-xs text-muted-foreground font-medium">
                            Enterprise Platform
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1" />
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Scalable enterprise cloud services platform with global
                      user base. Full-stack implementation with focus on
                      performance and reliability.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["React", "Next.js", "Node.js", "Cloud"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Tara Solutions Cloud */}
            <Link
              href="https://www.tarasolutions.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/5 via-background to-blue-500/5 p-1 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="relative rounded-xl bg-background p-6">
                  {/* Image Section - Full Width */}
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
                    <Image
                      src="/tarasolutions.png"
                      alt="Tara Solutions Cloud"
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20">
                          <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-1">
                            Tara Solutions
                          </h3>
                          <span className="text-xs text-muted-foreground font-medium">
                            Cloud Platform
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0 mt-1" />
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Official website for Tara Solutions Inc with focus on
                      performance optimization, security, and modern cloud
                      architecture.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {["Next.js", "React", "Node.js", "AWS"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Recent Research */}
        <section className="py-16">
          <div className="mb-10">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Recent Research</h2>
                <p className="text-muted-foreground">
                  Data analytics research at University of Europe for Applied
                  Sciences
                </p>
              </div>
              <Link
                href="/research"
                className="text-sm text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 font-medium hidden sm:block"
              >
                View all →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-gradient-to-br from-background to-muted/20 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Research Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                      University of Europe (UE)
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">
                      2025
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Impact of Daily Habits on Student Academic Performance
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A comprehensive study analyzing how study hours, sleep
                  patterns, and social media usage affect student performance
                  using data analytics and interactive visualizations. Developed
                  an interactive Power BI dashboard to present trends and
                  correlations.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Data Analytics",
                    "Power BI",
                    "Student Behavior",
                    "Education",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/research/student-habits-performance"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    Read Research
                  </Link>
                  <Link
                    href="/research/student-habits-performance"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors"
                  >
                    <Video className="w-4 h-4" />
                    Watch Video
                  </Link>
                </div>
              </div>

              {/* Research Image/Thumbnail */}
              <div className="relative bg-gradient-to-br from-purple-500/5 to-blue-500/5 p-8 flex items-center justify-center">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border/50 bg-muted/30">
                  <Image
                    src="/research/studey-research-thumbnail.jpg"
                    alt="Student Habits Research Dashboard"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
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
