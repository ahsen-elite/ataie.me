import { getFeaturedProjects } from "@/lib/data/projects";
import { getSkillsByCategory } from "@/lib/data/skills";
import { Hero } from "@/components/sections/hero";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const devopsSkills = getSkillsByCategory("DevOps");
  const programmingSkills = getSkillsByCategory("Programming");
  const cloudSkills = getSkillsByCategory("Cloud");

  return (
    <div className="flex flex-col">
      <Hero />

      {/* Featured Projects Section */}
      <section className="bg-muted/50 py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              A selection of my most recent and notable projects showcasing my expertise in DevOps, AI, and full-stack development.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Skills & Expertise
            </h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              A comprehensive overview of my technical skills and areas of expertise.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {devopsSkills.map((skill) => (
                  <SkillBadge 
                    key={skill.name} 
                    name={skill.name} 
                    category={skill.category} 
                  />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {programmingSkills.map((skill) => (
                  <SkillBadge 
                    key={skill.name} 
                    name={skill.name} 
                    category={skill.category} 
                  />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {cloudSkills.map((skill) => (
                  <SkillBadge 
                    key={skill.name} 
                    name={skill.name} 
                    category={skill.category} 
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 max-w-[700px]">
              I&apos;m currently available for freelance work and consulting. If you have a project that needs my expertise, don&apos;t hesitate to get in touch.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}