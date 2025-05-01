import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Ghulam Abbas Ataie - Senior Software Developer and Technical Lead. Discover my journey, expertise, and passion for technology and software development.",
  openGraph: {
    title: "About Ghulam Abbas Ataie",
    description:
      "Learn more about Ghulam Abbas Ataie - Senior Software Developer and Technical Lead. Discover my journey, expertise, and passion for technology and software development.",
  },
};

const experiences = [
  {
    year: "2023",
    title: "Chief Technology Officer (CTO)",
    description:
      "Leading technical vision and strategy at Tara Solutions Inc. Developing web and mobile applications, implementing cloud solutions, and leading an international development team.",
    link: "https://tarasolutions.cloud",
  },
  {
    year: "2022",
    title: "Senior Full Stack Developer at Listoli LLC",
    description:
      "Designed and optimized PostgreSQL databases, developed RESTful APIs and microservices using NestJS and Next.js, implemented CI/CD with GitHub Actions and GCP.",
    link: "#",
  },
  {
    year: "2021",
    title: "Full Stack Developer at Click.af",
    description:
      "Developed web and mobile applications using React.js, Node.js, Next.js, and React Native. Integrated vendor APIs and implemented e-commerce features.",
    link: "#",
  },
  {
    year: "2021",
    title: "Full Stack Developer at BlueBit Networking Services",
    description:
      "Developed high-traffic web applications using Python, Django, React Native, MySQL, and React.js. Created petition management system for the Ministry of Defense.",
    link: "#",
  },
  {
    year: "2020",
    title: "Junior Web Developer at IAP",
    description:
      "Developed MOEC Socio-Economic Provincial Profiles Digitization System using PHP Laravel, MySQL, Vue.js. Maintained and optimized existing websites.",
    link: "#",
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
    <main className="min-h-screen  text-foreground">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="h-2 w-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-primary">Hello I'm Abbas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Senior Software Developer & Technical Lead
            </h1>
            <p className="text-muted-foreground text-lg">
              I'm a passionate developer who loves building innovative solutions
              and leading teams to success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full transition"
              >
                Get in Touch
              </Link>
              <Link
                href="/"
                className="border border-border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-full transition"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-square">
              <Image
                src="/abbas.jpg"
                alt="Abbas Ataie"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Previous Work Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">
          Previously I worked and collaborated with
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8  items-center justify-items-center">
          {companies.map((company) => (
            <Link
              key={company.name}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-10 relative group hover:-translate-y-0.5 transition-transform"
            >
              {typeof company.logo === "string" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain transition-all duration-300 opacity-80 hover:opacity-100"
                    sizes="96px"
                  />
                </div>
              ) : (
                <>
                  <div className="relative w-full h-full hidden dark:block">
                    <Image
                      src={company.logo.dark}
                      alt={company.name}
                      fill
                      className="object-contain transition-all duration-300 opacity-80 hover:opacity-100"
                      sizes="96px"
                    />
                  </div>
                  <div className="relative w-full h-full block dark:hidden">
                    <Image
                      src={company.logo.light}
                      alt={company.name}
                      fill
                      className="object-contain transition-all duration-300 opacity-80 hover:opacity-100"
                      sizes="96px"
                    />
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">
          What have I been{" "}
          <span className="text-primary">exploring and learning</span>
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <Link href={exp.link}>
                <div className="bg-card hover:bg-accent/50 rounded-2xl p-6 transition border border-border">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-full md:w-32 shrink-0">
                      <span className="text-primary">{exp.year}</span>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
