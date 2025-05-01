"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import ProjectCard from "@/components/project-card";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Project data
const projects = [
  {
    title: "Tara Solutions Cloud",
    description:
      "Development of the official website for Tara Solutions Inc with focus on performance optimization and security",
    tags: ["Next.js", "React.js", "Node.js"],
    image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg",
    link: "https://www.tarasolutions.cloud",
    status: "Live",
    category: "Web Development",
  },
  {
    title: "Cloud Station Platform",
    description:
      "Scalable Enterprise Cloud Services Platform with global user base. Implementation of Frontend and Backend with focus on performance",
    tags: ["React.js", "Next.js", "Node.js", "Kafka", "Nats"],
    image: "https://images.pexels.com/photos/6266317/pexels-photo-6266317.jpeg",
    link: "https://www.cloud-station.io",
    status: "Live",
    category: "Cloud Architecture",
  },
  {
    title: "Plant Disease Detection System",
    description:
      "AI-powered deep learning system for plant disease detection using Raspberry Pi and camera for real-time diagnosis",
    tags: ["Deep Learning", "Raspberry Pi", "Python", "Computer Vision"],
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    link: "#",
    status: "In Progress",
    category: "AI/ML",
  },
  {
    title: "E-commerce System",
    description:
      "Design and Optimization of PostgreSQL databases for e-commerce systems with RESTful APIs and microservices",
    tags: ["NestJS", "Next.js", "PostgreSQL", "CI/CD"],
    image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg",
    link: "#",
    status: "Completed",
    category: "Backend Development",
  },
  {
    title: "Petition Management System",
    description:
      "Development of Petition Management System for the Ministry of Defense focusing on process optimization and workflow improvement",
    tags: ["Python", "Django", "React Native", "MySQL"],
    image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg",
    link: "#",
    status: "Completed",
    category: "Full Stack",
  },
  {
    title: "MOEC Socio-Economic System",
    description:
      "Development of MOEC Socio-Economic Provincial Profiles Digitization System in collaboration with Tetra Tech",
    tags: ["PHP", "Laravel", "MySQL", "Vue.js"],
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
    link: "#",
    status: "Completed",
    category: "Full Stack",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

const ProjectShowcase = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent" />
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div style={{ opacity, scale }} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">🚀</span>
          </motion.div>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            Featured Projects
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            A collection of my recent work, showcasing my expertise in
            full-stack development, cloud architecture, and innovative
            solutions.
          </p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/10 hover:bg-white/20 text-foreground/60"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  link={project.link}
                  status={project.status}
                  index={index}
                  isHovered={hoveredProject === index}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;
