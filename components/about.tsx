"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Download,
  Code,
  Database,
  Server,
  GraduationCap,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <motion.div {...fadeInUp} className="space-y-6">
            <Card className="bg-[#0A0F1C] border-[#1a2236] hover:border-blue-500/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Briefcase className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Professional Summary
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  I am a Senior Software Developer and Technical Lead with over
                  5 years of experience in full-stack development, cloud
                  architecture, and technical leadership. I specialize in
                  building scalable web applications using modern technologies
                  and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0A0F1C] border-[#1a2236] hover:border-blue-500/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Code className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Technical Skills
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2 text-blue-500">
                        <Sparkles className="w-4 h-4" />
                        Frontend & Mobile
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React.js",
                          "Next.js",
                          "TypeScript",
                          "React Native",
                          "Tailwind CSS",
                          "HTML5",
                          "CSS3",
                          "Vue.js",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2 text-blue-500">
                        <Database className="w-4 h-4" />
                        Backend & Cloud
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Node.js",
                          "Python",
                          "AWS",
                          "Docker",
                          "NestJS",
                          "Express.js",
                          "Django",
                          "Kubernetes",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2 text-blue-500">
                        <Server className="w-4 h-4" />
                        Databases & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "PostgreSQL",
                          "MongoDB",
                          "Git",
                          "CI/CD",
                          "MySQL",
                          "Redis",
                          "ElasticSearch",
                          "GitHub Actions",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2 text-blue-500">
                        <GraduationCap className="w-4 h-4" />
                        Architecture
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Microservices",
                          "REST APIs",
                          "GraphQL",
                          "Agile",
                          "TDD",
                          "Event-Driven",
                          "Cloud Architecture",
                          "DevOps",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex justify-center"
            >
              <Button
                asChild
                className="bg-blue-500 hover:bg-blue-600 h-12 px-8 text-base font-medium"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Download Resume
                  <Download className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div {...fadeInUp} className="space-y-6">
            <Card className="bg-[#0A0F1C] border-[#1a2236] hover:border-blue-500/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Server className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Experience
                  </h3>
                </div>
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-[#1a2236]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                    <h4 className="font-medium text-white">
                      Chief Technology Officer
                    </h4>
                    <p className="text-gray-500">
                      Tara Solutions • 2023 - Present
                    </p>
                    <ul className="mt-2 space-y-2">
                      {[
                        "Led development of cloud-based applications",
                        "Implemented CI/CD pipelines",
                        "Mentored junior developers",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative pl-6 border-l-2 border-[#1a2236]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                    <h4 className="font-medium text-white">
                      Senior Software Developer
                    </h4>
                    <p className="text-gray-500">
                      Listoli LLC (USA) • 2022 - 2023
                    </p>
                    <ul className="mt-2 space-y-2">
                      {[
                        "Developed full-stack web applications",
                        "Optimized database performance",
                        "Implemented responsive designs",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0A0F1C] border-[#1a2236] hover:border-blue-500/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Education
                  </h3>
                </div>
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-[#1a2236]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                    <h4 className="font-medium text-white">
                      Master of Science in Data Science
                    </h4>
                    <p className="text-gray-500">
                      University of Europe for Applied Sciences • 2023 - Present
                    </p>
                    <p className="mt-2 text-gray-400">
                      Currently pursuing advanced studies in Data Science,
                      focusing on machine learning, artificial intelligence, and
                      big data analytics.
                    </p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-[#1a2236]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                    <h4 className="font-medium text-white">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-gray-500">
                      Kabul Polytechnic University • 2015 - 2019
                    </p>
                    <p className="mt-2 text-gray-400">
                      Graduated with a strong foundation in computer science,
                      software engineering, and programming fundamentals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
