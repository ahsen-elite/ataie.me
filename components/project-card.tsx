import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { SkillBadge } from "@/components/skill-badge";
import { type Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          className="object-cover transition-transform duration-500 hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <SkillBadge key={tech} name={tech} />
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs text-muted-foreground">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
        {project.liveUrl && (
          <Button asChild variant="default" size="sm">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}