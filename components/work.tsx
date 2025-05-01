"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with Next.js, TypeScript, and PostgreSQL. Features include real-time updates, authentication, and responsive design.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/project1.jpg",
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/username/project1",
  },
  {
    title: "Project Two",
    description:
      "A cloud-based platform for managing and analyzing data. Built with React, Node.js, and MongoDB, featuring advanced data visualization and reporting tools.",
    technologies: ["React", "Node.js", "MongoDB", "D3.js"],
    image: "/projects/project2.jpg",
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/username/project2",
  },
  {
    title: "Project Three",
    description:
      "An AI-powered application for natural language processing. Developed using Python, TensorFlow, and FastAPI, with a modern React frontend.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    image: "/projects/project3.jpg",
    liveUrl: "https://project3.com",
    githubUrl: "https://github.com/username/project3",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            My Work
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects. Each one is built with a focus
            on performance, accessibility, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-500/5 rounded-2xl overflow-hidden backdrop-blur-sm group"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/60 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-500 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 bg-background/50 hover:bg-background/80"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      Live Site
                      <ExternalLink
                        className="ml-2 w-4 h-4"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 bg-background/50 hover:bg-background/80"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                    >
                      Source Code
                      <Github className="ml-2 w-4 h-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
