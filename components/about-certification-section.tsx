import Image from "next/image";
import Link from "next/link";

export default function AboutCertificationSection() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 py-20 relative"
      aria-label="Micro1 Certification"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent blur-3xl -z-10"></div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200 dark:border-blue-800">
            <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Certified Senior Full-stack Developer
            </span>
          </div>
          <h2 className="text-3xl font-bold">
            Certified by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400">
              Micro1
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Successfully passed Micro1's rigorous AI Interview process and
            received official certification as a Senior Full-stack Developer.
            Micro1 is Silicon Valley's leading AI recruitment platform that
            identifies and certifies world-class technical talent globally.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                ✓
              </span>
              <p>Vetted through advanced AI-powered technical assessments</p>
            </div>
            <div className="flex items-start gap-3 group">
              <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                ✓
              </span>
              <p>Certified on January 2nd, 2025</p>
            </div>
            <div className="flex items-start gap-3 group">
              <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                ✓
              </span>
              <p>
                Part of an exclusive network of globally vetted developers
              </p>
            </div>
          </div>
          <Link
            href="https://www.micro1.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
          >
            Learn More About Micro1
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
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/micro1-certificate.jpg"
              alt="Micro1 Senior Full-stack Developer Certification"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}

