"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Calendar,
  FileText,
  Video,
  MapPin,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const researchProjects = [
  {
    id: "student-habits-performance",
    title: "Impact of Daily Habits on Student Academic Performance",
    description:
      "A comprehensive study analyzing how study hours, sleep patterns, and social media usage affect student performance using data analytics and interactive visualizations.",
    abstract:
      "In this project, we consider how daily habits of students, including the number of hours spent studying, number of sleeping hours, and number of social media hours, affect their performance at school...",
    keywords: [
      "Academic habits",
      "student performance",
      "data analytics",
      "sleep",
      "study hours",
      "Power BI",
      "education dashboard",
    ],
    team: [
      "Ghulam Abbas Ataie",
      "Arnav Singh Bhardwaj",
      "Shilpa Sidda Raju",
      "Manasi Prabhakar",
    ],
    department: "Department of Data Science",
    university: "University of Europe for Applied Sciences",
    location: "Potsdam, Germany",
    hasVideo: true,
    hasPDF: true,
    year: "2025",
    category: "Data Science & Education",
  },
  // Add more research projects here as needed
];

const ResearchListing = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pt-20 pb-32 relative">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <motion.div {...fadeInUp} className="text-center mb-16">
          {!prefersReducedMotion && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-6xl">📚</span>
            </motion.div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            Research & Academic Work
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Exploring the intersection of data science, education, and
            technology through rigorous academic research and practical
            applications.
          </p>
        </motion.div>
      </section>

      {/* Research Projects Grid */}
      <div className="space-y-8">
        {researchProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={index === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index === 0 ? 0 : index * 0.1 }}
            whileHover={!prefersReducedMotion ? { y: -2 } : {}}
          >
            <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors">
                        {project.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {project.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Abstract Preview */}
                <div className="bg-muted/30 rounded-lg p-4 border border-muted/50">
                  <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Abstract Preview
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.abstract}
                  </p>
                </div>

                {/* Research Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-muted-foreground">
                      {project.team.length} Researchers
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-500" />
                    <span className="text-sm text-muted-foreground">
                      {project.university}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-muted-foreground">
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {project.keywords.slice(0, 4).map((keyword, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                      >
                        {keyword}
                      </Badge>
                    </motion.div>
                  ))}
                  {project.keywords.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.keywords.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2 relative z-10">
                  <Link href={`/research/${project.id}`} className="flex-1">
                    <Button className="w-full group/btn cursor-pointer hover:bg-blue-600 transition-colors">
                      View Full Research
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <div className="flex gap-2">
                    {project.hasVideo && (
                      <Link href={`/research/${project.id}#video`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors"
                        >
                          <Video className="w-4 h-4 mr-2" />
                          Video
                        </Button>
                      </Link>
                    )}
                    {project.hasPDF && (
                      <a
                        href="/research/research-study.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="cursor-pointer hover:bg-green-50 dark:hover:bg-green-950/30 transition-colors"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          PDF
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>

              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-lg transition-colors duration-300 pointer-events-none"
                initial={false}
              />
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16"
      >
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-blue-200 dark:border-blue-800 overflow-hidden">
          <CardContent className="py-8 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-4xl">🤝</span>
            </motion.div>
            <h3 className="text-xl font-semibold mb-3">
              Interested in Research Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing research opportunities, academic
              collaborations, and innovative projects in data science and
              educational technology.
            </p>
            <Button asChild className="group cursor-pointer">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ResearchListing;
