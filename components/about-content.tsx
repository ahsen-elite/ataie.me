"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const AboutContent = () => {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="aspect-square relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg"
              alt="Ghulam Abbas Ataie"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">
                  University of Europe for Applied Sciences
                </h3>
                <p className="text-sm text-muted-foreground">
                  Master in Data Science
                </p>
                <p className="text-sm text-muted-foreground">2025 - Present</p>
              </div>
              <div>
                <h3 className="font-medium">Kabul Polytechnic University</h3>
                <p className="text-sm text-muted-foreground">
                  Bachelor in Computer Science
                </p>
                <p className="text-sm text-muted-foreground">2016 - 2019</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "Python",
                "HTML5",
                "CSS3",
                "React.js",
                "Next.js",
                "Node.js",
                "NestJS",
                "Express.js",
                "PostgreSQL",
                "MongoDB",
                "MySQL",
                "Redis",
                "ElasticSearch",
                "AWS",
                "GCP",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "Microservices",
                "RESTful APIs",
                "GraphQL",
                "Event-Driven Architecture",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-1 bg-secondary/50 rounded-full text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              Hi! I'm Ghulam Abbas Ataie, a Senior Software Developer and
              Technical Lead with over 5 years of experience in developing and
              scaling enterprise applications. I specialize in Full-Stack
              Development, Cloud Architecture, and Technical Leadership.
            </p>

            <p>
              Currently, I'm working as CTO at Tara Solutions Inc, where I focus
              on developing web and mobile applications, implementing technical
              strategies, and leading an international development team. I'm
              passionate about creating scalable and maintainable software
              solutions.
            </p>

            <p>
              My expertise spans across modern web technologies, cloud
              platforms, and architectural patterns. I believe in writing clean,
              efficient code and following best practices to deliver
              high-quality software solutions.
            </p>

            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or mentoring fellow
              developers.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium">Chief Technology Officer (CTO)</h3>
                <p className="text-sm text-muted-foreground">
                  Tara Solutions Inc, Kabul
                </p>
                <p className="text-sm text-muted-foreground">2023 - Present</p>
                <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>
                    Development of Web and Mobile Applications using Node.js,
                    React.js, Nomad, TypeScript
                  </li>
                  <li>
                    Strategic Partnership with Cloud Station LLC FZ for
                    Enterprise Cloud Solutions
                  </li>
                  <li>
                    Technical Team Leadership and Implementation of Code Quality
                    Standards
                  </li>
                  <li>
                    Architecture and Strategic Planning of Microservices and
                    Cloud Infrastructures
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium">Senior Full Stack Developer</h3>
                <p className="text-sm text-muted-foreground">
                  Listoli LLC, USA
                </p>
                <p className="text-sm text-muted-foreground">2022 - 2023</p>
                <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>
                    Design and Optimization of PostgreSQL databases for
                    e-commerce systems
                  </li>
                  <li>
                    Development of RESTful APIs and microservices using NestJS
                    and Next.js
                  </li>
                  <li>
                    CI/CD Automation with GitHub Actions and Google Cloud
                    Platform
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Button className="w-full" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;
