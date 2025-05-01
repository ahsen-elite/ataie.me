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
} from "lucide-react";
import { useRef } from "react";

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
      className="py-20 bg-gradient-to-b from-background to-background/80 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div style={{ opacity, scale }} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">👨‍💻</span>
          </motion.div>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            About Me
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            A passionate software developer with a strong focus on creating
            efficient, scalable, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeInUp} className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-blue-500/5 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/20 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-500" />
                Professional Summary
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                I am a Senior Software Developer and Technical Lead with over 5
                years of experience in full-stack development, cloud
                architecture, and technical leadership. I specialize in building
                scalable web applications using modern technologies and best
                practices.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-blue-500/5 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/20 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-500" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <span className="text-blue-500">Frontend</span>
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    {["React.js", "Next.js", "TypeScript", "Tailwind CSS"].map(
                      (skill) => (
                        <motion.li
                          key={skill}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {skill}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <span className="text-blue-500">Backend</span>
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    {["Node.js", "Python", "PostgreSQL", "MongoDB"].map(
                      (skill) => (
                        <motion.li
                          key={skill}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {skill}
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center"
            >
              <Button
                asChild
                className="bg-blue-500 hover:bg-blue-600 h-12 text-base font-medium group relative overflow-hidden"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download my resume"
                >
                  <span className="relative z-10 flex items-center">
                    Download Resume
                    <Download
                      className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform"
                      aria-hidden="true"
                    />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-blue-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-blue-500/5 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/20 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Server className="w-6 h-6 text-blue-500" />
                Experience
              </h3>
              <div className="space-y-8">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="relative pl-6 border-l-2 border-blue-500/20"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                  <h4 className="font-medium">Senior Software Developer</h4>
                  <p className="text-foreground/60">
                    Tara Solutions • 2021 - Present
                  </p>
                  <ul className="mt-2 space-y-2 text-foreground/80">
                    {[
                      "Led development of cloud-based applications",
                      "Implemented CI/CD pipelines",
                      "Mentored junior developers",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="relative pl-6 border-l-2 border-blue-500/20"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                  <h4 className="font-medium">Software Developer</h4>
                  <p className="text-foreground/60">
                    Tech Company • 2019 - 2021
                  </p>
                  <ul className="mt-2 space-y-2 text-foreground/80">
                    {[
                      "Developed full-stack web applications",
                      "Optimized database performance",
                      "Implemented responsive designs",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-blue-500/5 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/10 hover:border-blue-500/20 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-500" />
                Education
              </h3>
              <div className="space-y-8">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="relative pl-6 border-l-2 border-blue-500/20"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                  <h4 className="font-medium">
                    Master of Science in Data Science
                  </h4>
                  <p className="text-foreground/60">
                    University of Europe for Applied Sciences • 2023 - Present
                  </p>
                  <p className="mt-2 text-foreground/80">
                    Currently pursuing advanced studies in Data Science,
                    focusing on machine learning, artificial intelligence, and
                    big data analytics.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="relative pl-6 border-l-2 border-blue-500/20"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                  <h4 className="font-medium">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-foreground/60">
                    Kabul Polytechnic University • 2015 - 2019
                  </p>
                  <p className="mt-2 text-foreground/80">
                    Graduated with a strong foundation in computer science,
                    software engineering, and programming fundamentals.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
