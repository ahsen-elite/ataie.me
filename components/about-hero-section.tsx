import Image from "next/image";
import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 pt-20 pb-16 relative"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent blur-3xl -z-10"></div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/20 dark:border-purple-500/20">
            <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Software Engineer & Data Scientist
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400">
            Building Solutions Through Code & Data
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I combine software engineering expertise with data science to create
            innovative solutions. Passionate about building scalable
            applications and extracting actionable insights from complex
            datasets.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
              aria-label="Contact me"
            >
              Get in Touch
              <svg
                className="ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="/#projects"
              className="group inline-flex items-center justify-center rounded-md border border-blue-200 dark:border-blue-800 bg-white/10 hover:bg-white/20 px-6 py-3 text-base font-medium text-foreground shadow-sm transition-all duration-300 hover:scale-105"
              aria-label="View my projects"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full aspect-square">
            <Image
              fill
              src="/profile-image.jpeg"
              alt="Abbas Ataie - Software Engineer & Data Scientist"
              className="object-cover object-[50%_30%] rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-transparent blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
