"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import ProjectCard from "@/components/project-card";

// Project data
const projects = [
  {
    title: "Cloud Station Platform",
    description:
      "Scalable Enterprise Cloud Services Platform with global user base. Implementation of Frontend and Backend with focus on performance",
    tags: ["React.js", "Next.js", "Node.js", "..."],
    image: "/cloudstation.png",
    link: "https://www.cloud-station.io",
    status: "Live",
    github: "http://github.com/thecloudstation/",
    category: "Cloud Architecture",
  },
  {
    title: "5th Wave",
    description:
      "Transform your voice while preserving its unique essence. Break through language barriers without losing what makes you, you.",
    tags: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "..."],
    image: "/5th-wave.png",
    link: "https://wave.cloud-station.io",
    status: "Live",
    github: "http://github.com/thecloudstation/",
    category: "Full Stack Development",
  },
  {
    title: "Tara Solutions Cloud",
    description:
      "Development of the official website for Tara Solutions Inc with focus on performance optimization and security",
    tags: ["Next.js", "React.js", "Node.js"],
    image: "/tarasolutions.png",
    link: "https://www.tarasolutions.cloud",
    status: "Live",
    category: "Web Development",
    github: "https://github.com/tara-Soloution",
  },
  {
    title: "Plant Disease Detection System",
    description:
      "AI-powered deep learning system for plant disease detection using Raspberry Pi and camera for real-time diagnosis",
    tags: ["Deep Learning", "Raspberry Pi", "Python", "Computer Vision"],
    image: "/plant-disease.webp",
    link: "",
    status: "In Progress",
    category: "AI/ML",
    github: "",
  },
  {
    title: "Ahsen Elite",
    description:
      "Design and Optimization of PostgreSQL databases for e-commerce systems with RESTful APIs and microservices",
    tags: ["Medusa JS", "Next.js", "PostgreSQL", "CI/CD", "Node.js"],
    image: "/ecommerce.png",
    link: "https://ahsenelite.com",
    status: "Live",
    github: "https://github.com/ahsen-elite",
    category: "Full Stack Development",
  },

  {
    title: "Roshanayee",
    description:
      "Learn programming languages, web development, and mobile app development through hands-on, project-based courses designed for real-world success.",
    tags: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "..."],
    image: "/roshanayee.png",
    link: "https://roshanayee.com",
    status: "Live",
    category: "Full Stack Development",
    github: "https://github.com/tara-Soloution",
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
  const prefersReducedMotion = useReducedMotion();

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

  const fadeInUp = {
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section
      ref={containerRef}
      id="projects"
      className="py-20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.div style={{ opacity, scale }} className="text-center mb-16">
          {!prefersReducedMotion && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-6xl">🚀</span>
            </motion.div>
          )}
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
                whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
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
                onHoverStart={() =>
                  !prefersReducedMotion && setHoveredProject(index)
                }
                onHoverEnd={() =>
                  !prefersReducedMotion && setHoveredProject(null)
                }
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
                  github={project.github}
                  index={index}
                  isHovered={hoveredProject === index}
                  prefersReducedMotion={prefersReducedMotion}
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
