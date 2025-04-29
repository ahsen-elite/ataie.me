import { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Projects | Abbas Ataie",
  description: "Explore the projects created by Abbas Ataie, showcasing expertise in DevOps, AI, and full-stack development.",
};

// Get all unique technologies from projects
const getAllTechnologies = () => {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      techSet.add(tech);
    });
  });
  return Array.from(techSet).sort();
};

export default function ProjectsPage() {
  const allTechnologies = getAllTechnologies();

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A showcase of my recent work and notable projects.
        </p>
      </div>

      {/* Technology filter section - static for now, would be interactive with client components */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Filter by Technology</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="cursor-pointer bg-primary/10">
            All
          </Badge>
          {allTechnologies.map((tech) => (
            <Badge key={tech} variant="outline" className="cursor-pointer">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}