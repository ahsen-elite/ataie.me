import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Globe, Cloud } from "lucide-react";

const projects = [
  {
    title: "Cloud Station",
    subtitle: "Enterprise Platform",
    description:
      "Scalable enterprise cloud services platform with global user base. Full-stack implementation with focus on performance and reliability.",
    href: "https://www.cloud-station.io",
    image: "/cloudstation.png",
    imageAlt: "Cloud Station Platform",
    technologies: ["React", "Next.js", "Node.js", "Cloud"],
    icon: Cloud,
    gradientFrom: "from-blue-500/5",
    gradientVia: "via-background",
    gradientTo: "to-purple-500/5",
    hoverShadow: "hover:shadow-blue-500/10",
    iconBg: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    techBg: "bg-blue-500/10",
    techColor: "text-blue-600 dark:text-blue-400",
    imageGradient:
      "from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20",
  },
  {
    title: "Tara Solutions",
    subtitle: "Cloud Platform",
    description:
      "Official website for Tara Solutions Inc with focus on performance optimization, security, and modern cloud architecture.",
    href: "https://www.tarasolutions.cloud",
    image: "/tarasolutions.png",
    imageAlt: "Tara Solutions Cloud",
    technologies: ["Next.js", "React", "Node.js", "AWS"],
    icon: Globe,
    gradientFrom: "from-purple-500/5",
    gradientVia: "via-background",
    gradientTo: "to-blue-500/5",
    hoverShadow: "hover:shadow-purple-500/10",
    iconBg: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    techBg: "bg-purple-500/10",
    techColor: "text-purple-600 dark:text-purple-400",
    imageGradient:
      "from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20",
  },
];

export default function HomeFeaturedProjects() {
  return (
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
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            <div
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientVia} ${project.gradientTo} p-1 transition-all duration-500 ${project.hoverShadow} hover:shadow-2xl`}
            >
              <div className="relative rounded-xl bg-background p-6">
                {/* Image Section */}
                <div
                  className={`relative mb-6 aspect-video overflow-hidden rounded-lg bg-gradient-to-br ${project.imageGradient}`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
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
                      <div
                        className={`p-2.5 rounded-xl bg-gradient-to-br ${project.iconBg}`}
                      >
                        <project.icon
                          className={`w-5 h-5 ${project.iconColor}`}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-1">
                          {project.title}
                        </h3>
                        <span className="text-xs text-muted-foreground font-medium">
                          {project.subtitle}
                        </span>
                      </div>
                    </div>
                    <ExternalLink
                      className={`w-5 h-5 text-muted-foreground transition-colors flex-shrink-0 mt-1 ${
                        project.iconColor.includes("blue")
                          ? "group-hover:text-blue-600 dark:group-hover:text-blue-400"
                          : "group-hover:text-purple-600 dark:group-hover:text-purple-400"
                      }`}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 text-xs font-medium ${project.techBg} ${project.techColor} rounded-lg backdrop-blur-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
