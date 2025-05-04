import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Calendar,
  Clock,
  GraduationCap,
  Rocket,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mentoring | Ghulam Abbas Ataie",
  description:
    "Get personalized mentorship in software development, career guidance, and technical leadership from an experienced senior developer.",
  openGraph: {
    title: "Mentoring | Ghulam Abbas Ataie",
    description:
      "Get personalized mentorship in software development, career guidance, and technical leadership from an experienced senior developer.",
    images: [
      {
        url: "/mentoring-og.png",
        width: 1200,
        height: 630,
        alt: "Mentoring | Ghulam Abbas Ataie",
      },
    ],
    siteName: "Ghulam Abbas Ataie",
    type: "website",
    url: "https://ataie.me/mentoring",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentoring | Ghulam Abbas Ataie",
    description:
      "Get personalized mentorship in software development, career guidance, and technical leadership from an experienced senior developer.",
    images: ["/mentoring-og.png"],
  },
  alternates: {
    canonical: "/mentoring",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const mentoringAreas = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Career Growth",
    description:
      "Strategic guidance for advancing your tech career, from junior to senior roles.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Technical Skills",
    description:
      "Deep dives into modern tech stack, architecture, and best practices.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Leadership",
    description:
      "Learn how to lead teams, manage projects, and drive technical decisions.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Learning Path",
    description:
      "Personalized roadmap for mastering new technologies and concepts.",
  },
];

const sessionTypes = [
  {
    title: "Career Strategy",
    duration: "60 min",
    price: "€49",
    description:
      "One-on-one session to discuss your career goals and create a personalized roadmap.",
  },
  {
    title: "Technical Deep Dive",
    duration: "90 min",
    price: "€69",
    description: "In-depth technical discussion and problem-solving session.",
  },
  {
    title: "Code Review",
    duration: "60 min",
    price: "€39",
    description:
      "Detailed code review with best practices and optimization suggestions.",
  },
  {
    title: "Free Session",
    duration: "30 min",
    price: "€0",
    description:
      "Quick consultation to see if we're a good fit. Use code 'FIRSTFREE' to book.",
    isFree: true,
  },
];

export default function MentoringPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 pt-20 pb-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent blur-3xl -z-10"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200 dark:border-blue-800">
                <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  Personalized Mentorship
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                Level Up Your Tech Career
              </h1>
              <p className="text-muted-foreground text-lg">
                Get personalized guidance from a senior developer with extensive
                experience in full-stack development, technical leadership, and
                career growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#schedule"
                  className="group inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
                >
                  Schedule a Session
                  <Calendar className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square">
                <Image
                  src="/mentoring.png"
                  alt="Ghulam Abbas Ataie - Tech Mentor"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentoring Areas */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Areas of Mentorship
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentoringAreas.map((area, index) => (
              <div
                key={index}
                className="bg-card hover:bg-accent/50 rounded-2xl p-6 transition-all duration-300 border border-border transform hover:scale-105 hover:rotate-1 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Session Types */}
        <section className="max-w-6xl mx-auto px-4 py-20" id="schedule">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Choose Your Session
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sessionTypes.map((session, index) => (
              <div
                key={index}
                className="bg-card hover:bg-accent/50 rounded-2xl p-6 transition-all duration-300 border border-border transform hover:scale-105 hover:rotate-1 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{session.duration}</span>
                </div>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {session.price}
                </p>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {session.description}
                </p>
                <Link
                  href={`https://calendly.com/abbasataie/${session.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}${
                    session.isFree ? "?coupon=FIRSTFREE" : ""
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105 w-full mt-auto"
                >
                  <span className="flex items-center justify-center w-full">
                    Schedule Now
                    <Calendar className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="bg-blue-500/5 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Me as Your Mentor?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <p>Senior Software Developer with 6+ years of experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <p>
                    Technical Lead with proven track record of successful
                    projects
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <p>Expert in modern tech stack and best practices</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <p>Passionate about teaching and sharing knowledge</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <p>Personalized approach to mentorship</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <p>Flexible scheduling to accommodate your timezone</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
