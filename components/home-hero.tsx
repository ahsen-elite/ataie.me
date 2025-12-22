import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import HomeExperienceStats from "./home-experience-stats";
import HomeKeyAreas from "./home-key-areas";

export default function HomeHero() {
  return (
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

          {/* Experience Stats */}
          <HomeExperienceStats />

          {/* Key Areas */}
          <HomeKeyAreas />

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
            <span className="uppercase tracking-wider">Recently worked with</span>
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
  );
}

