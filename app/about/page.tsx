import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "About Ghulam Abbas Ataie - Senior Software Developer, Technical Lead & Educator",
  description:
    "Learn more about Ghulam Abbas Ataie - Senior Software Developer, Technical Lead, and Founder of Roshanayee. Discover my journey in software development, teaching, and YouTube content creation.",
  keywords:
    "Ghulam Abbas Ataie, Software Developer, Technical Lead, Roshanayee, Programming Education, YouTube Tech Content, Web Development, Software Engineering",
  openGraph: {
    title: "About Ghulam Abbas Ataie - Senior Software Developer & Educator",
    description:
      "Senior Software Developer, Technical Lead, and Founder of Roshanayee. Sharing knowledge through teaching and YouTube content creation.",
    type: "profile",
    images: [
      {
        url: "/abbas.jpg",
        width: 1200,
        height: 630,
        alt: "Ghulam Abbas Ataie - Software Developer and Educator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ghulam Abbas Ataie - Software Developer & Educator",
    description:
      "Senior Software Developer, Technical Lead, and Founder of Roshanayee. Sharing knowledge through teaching and YouTube content creation.",
    images: ["/abbas.jpg"],
  },
};

const experiences = [
  {
    title: "💻 Code Wizard",
    description:
      "Started as a curious coder, ended up as a full-stack sorcerer. Now I can make computers do my bidding with just a few keystrokes!",
    keywords: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "Cloud Magic",
    ],
  },
  {
    title: "🏆 Trophy Hunter",
    description:
      "Won some cool stuff, learned some languages, and got really good at solving puzzles. Basically, I'm a professional problem-solver now!",
    keywords: [
      "Competitive Coding",
      "Problem Solving",
      "English (C1)",
      "German (B1)",
      "Dari (Native)",
    ],
  },
  {
    title: "🛠️ Tech Arsenal",
    description:
      "My digital toolbox is bigger than my physical one. From databases to cloud platforms, I've got all the shiny tools a developer could wish for!",
    keywords: [
      "Databases",
      "Cloud Platforms",
      "DevOps",
      "Microservices",
      "API Design",
    ],
  },
];

const companies = [
  {
    name: "Cloud Station LLC FZ",
    logo: {
      dark: "/cs-logo-dark.svg",
      light: "/cs-logo-light.svg",
    },
    website: "https://cloud-station.io",
  },
  {
    name: "Tara Solutions Inc",
    logo: "/tara.png",
    website: "https://tarasolutions.cloud",
  },
  {
    name: "Listoli LLC",
    logo: "/listoli.png",
    website: "https://listoli.io",
  },
  {
    name: "Click.af",
    logo: "/click.png",
    website: "https://www.facebook.com/Click.af/",
  },
  {
    name: "BlueBit Networking Services",
    logo: "/bluebit.png",
    website: "https://bluebitlink.com",
  },
  {
    name: "IAP",
    logo: "/iap.png",
    website: "https://iapws.com",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      {/* Hero Section */}
      <section
        className="max-w-6xl mx-auto px-4 pt-20 pb-32 relative"
        aria-label="Introduction"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl -z-10"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200 dark:border-blue-800">
              <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Hello I'm Ghulam Abbas Ataie
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
              Senior Software Developer & Technical Lead
            </h1>
            <p className="text-muted-foreground text-lg">
              I'm a passionate developer who loves building innovative solutions
              and leading teams to success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
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
                href="/"
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
                src="/abbas.jpg"
                alt="Ghulam Abbas Ataie - Software Developer and Educator"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Previous Work Section */}
      <section
        className="max-w-6xl mx-auto px-4 py-20 relative"
        aria-label="Previous Work Experience"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl -z-10"></div>
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
          Previously I worked and collaborated with
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <Link
              key={company.name}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-10 relative group hover:-translate-y-0.5 transition-all duration-300"
              aria-label={`Visit ${company.name}'s website`}
            >
              {typeof company.logo === "string" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain transition-all duration-300 opacity-80 hover:opacity-100 filter hover:brightness-110"
                    sizes="96px"
                  />
                </div>
              ) : (
                <>
                  <div className="relative w-full h-full hidden dark:block">
                    <Image
                      src={company.logo.dark}
                      alt={`${company.name} logo - dark mode`}
                      fill
                      className="object-contain transition-all duration-300 opacity-80 hover:opacity-100 filter hover:brightness-110"
                      sizes="96px"
                    />
                  </div>
                  <div className="relative w-full h-full block dark:hidden">
                    <Image
                      src={company.logo.light}
                      alt={`${company.name} logo - light mode`}
                      fill
                      className="object-contain transition-all duration-300 opacity-80 hover:opacity-100 filter hover:brightness-110"
                      sizes="96px"
                    />
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Micro1 Certification Section */}
      <section
        className="max-w-6xl mx-auto px-4 py-20 relative"
        aria-label="Micro1 Certification"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl -z-10"></div>
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
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

      {/* Roshanayee Section */}
      <section
        className="max-w-6xl mx-auto px-4 py-20 relative"
        aria-label="Roshanayee Education Platform"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl -z-10"></div>
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
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
              empowering aspiring developers with practical skills and
              real-world knowledge. Our comprehensive curriculum covers
              programming languages, web development, and mobile app development
              through hands-on, project-based learning.
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
                  Flexible learning options with both in-person and online
                  classes
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

      {/* YouTube Section */}
      <section
        className="max-w-6xl mx-auto px-4 py-20 relative"
        aria-label="YouTube Content Creation"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl -z-10"></div>
        <h2 className="text-3xl font-bold mb-12">
          When I'm Not Coding, I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
            Creating Content
          </span>{" "}
          🎥
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full aspect-video">
              <Image
                src="/youtube.png"
                alt="Abbas Ataie's YouTube Channel - Programming Tutorials and Tech Content"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl -z-10"></div>
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200 dark:border-blue-800">
              <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                YouTube Creator
              </span>
            </div>
            <h3 className="text-2xl font-semibold">
              Sharing Knowledge, One Video at a Time
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Join me on my YouTube journey where I break down complex
              programming concepts into digestible, fun-sized tutorials. From
              debugging disasters to coding triumphs, I share it all with a dash
              of humor and a lot of practical wisdom.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  🎯
                </span>
                <p>
                  Practical coding tutorials that actually work in real life
                </p>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  🤣
                </span>
                <p>Real developer struggles and how to overcome them</p>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  🚀
                </span>
                <p>Tips and tricks that will make your coding life easier</p>
              </div>
            </div>
            <Link
              href="https://www.youtube.com/@abbas-ataie"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
              aria-label="Subscribe to my YouTube channel"
            >
              Subscribe to My Channel
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
        </div>
      </section>

      {/* Master's Journey Section - Moved to top */}
      <section
        className="max-w-6xl mx-auto px-4 py-20 relative"
        aria-label="Master's Journey"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl -z-10"></div>

        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200 dark:border-blue-800">
            <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Current Academic Pursuit
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
            Master's in Data Science
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            University of Europe for Applied Sciences (2025-Present)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Core Focus Areas</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    📊
                  </span>
                  <p>Data Science & Analytics</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    🤖
                  </span>
                  <p>Machine Learning & AI</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    ☁️
                  </span>
                  <p>Cloud Computing</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    📈
                  </span>
                  <p>Decision Support Systems</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-2xl font-semibold mb-4">Additional Skills</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    💡
                  </span>
                  <p>Entrepreneurial Thinking</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    🌐
                  </span>
                  <p>Digital Business Models</p>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    🔮
                  </span>
                  <p>Future Tech Trends Analysis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-video">
              <Image
                src="/ue-germany.webp"
                alt="Data Science and Machine Learning Visualization"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section
        className="max-w-6xl mx-auto px-4 py-20 relative"
        aria-label="Academic Excellence"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl -z-10"></div>

        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200 dark:border-blue-800">
            <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              The Foundation of My Tech Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
            From Code Newbie to Tech Superhero
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My Bachelor's adventure at Kabul Polytechnic University (2016-2019)
            where I transformed from a curious student to a second-place
            graduate, mastering the art of software engineering and computer
            science.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {[
            { label: "Final Percentage", value: "81.47%", icon: "📊" },
            { label: "Best Semester", value: "94.00%", icon: "🏆" },
            { label: "Total Credits", value: "151", icon: "📚" },
            { label: "Graduation Year", value: "2019", icon: "🎓" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-blue-100 dark:border-blue-900 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Journey Section */}
      <section
        className="max-w-6xl mx-auto px-4 py-20 relative"
        aria-label="Professional Journey"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl -z-10"></div>

        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200 dark:border-blue-800">
            <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              The Fun Part
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
            My Journey Through Code & Knowledge
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            TL;DR: I code stuff, solve problems, and make computers do cool
            things. Here's the fun version of my journey! 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="bg-card hover:bg-accent/50 rounded-2xl p-8 transition-all duration-300 border border-border transform hover:scale-105 hover:rotate-1 hover:shadow-lg hover:shadow-blue-500/10 h-full">
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl transform group-hover:scale-110 transition-transform">
                      {exp.title.split(" ")[0]}
                    </div>
                    <h3 className="text-2xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.title.split(" ").slice(1).join(" ")}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed flex-grow">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {exp.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800/30 hover:scale-105 hover:shadow-md"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
