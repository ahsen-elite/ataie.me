import Image from "next/image";
import Link from "next/link";

export default function AboutRoshanayeeSection() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 py-20 relative"
      aria-label="Roshanayee Education Platform"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent blur-3xl -z-10"></div>
      <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400">
        Empowering the Next Generation of Developers
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200 dark:border-blue-800">
            <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Founder & Lead Tutor at Roshanayee
            </span>
          </div>
          <h3 className="text-2xl font-semibold">Teaching & Mentoring</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            As the founder and lead tutor of Roshanayee, I'm dedicated to
            empowering aspiring developers with practical skills and real-world
            knowledge. Our comprehensive curriculum covers programming languages,
            web development, and mobile app development through hands-on,
            project-based learning.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <span className="text-primary group-hover:scale-110 transition-transform">
                ✓
              </span>
              <p>
                Expert-led courses in programming, web development, and mobile
                development
              </p>
            </div>
            <div className="flex items-start gap-3 group">
              <span className="text-primary group-hover:scale-110 transition-transform">
                ✓
              </span>
              <p>Hands-on projects that simulate real-world scenarios</p>
            </div>
            <div className="flex items-start gap-3 group">
              <span className="text-primary group-hover:scale-110 transition-transform">
                ✓
              </span>
              <p>
                Flexible learning options with both in-person and online classes
              </p>
            </div>
          </div>
          <Link
            href="https://roshanayee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
            aria-label="Visit Roshanayee education platform"
          >
            Visit Roshanayee
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-2"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="relative">
          <div className="relative w-full aspect-video">
            <Image
              src="/roshanayee.png"
              alt="Roshanayee - Empowering Developers Education Platform"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}

