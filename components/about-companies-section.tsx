import Image from "next/image";
import Link from "next/link";

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

export default function AboutCompaniesSection() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 py-20 relative"
      aria-label="Previous Work Experience"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent blur-3xl -z-10"></div>
      <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400">
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
  );
}

