"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Download,
  FileText,
  Video,
  ArrowLeft,
  Users,
  Calendar,
  MapPin,
  Building,
} from "lucide-react";
import Link from "next/link";

interface TeamMember {
  name: string;
  initials: string;
  color: string;
}

interface ResearchProject {
  id: string;
  title: string;
  description: string;
  abstract: string;
  keywords: string[];
  team: TeamMember[];
  department: string;
  university: string;
  location: string;
  hasVideo: boolean;
  hasPDF: boolean;
  year: string;
  category: string;
  methodology: string[];
  findings: string[];
  impact: string;
}

interface ResearchDetailProps {
  project: ResearchProject;
}

const ResearchDetail = ({ project }: ResearchDetailProps) => {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      green:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      purple:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      orange:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="min-h-screen text-foreground bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-32 relative">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild>
            <Link href="/research" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Research
            </Link>
          </Button>
        </motion.div>

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium rounded-full">
                {project.year}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
              {project.title}
            </h1>
            <p className="text-foreground/60 max-w-3xl mx-auto text-lg">
              {project.description}
            </p>
          </motion.div>
        </section>

        {/* Research Content */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Video Section */}
          {project.hasVideo && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-blue-500" />
                    Research Presentation
                  </CardTitle>
                  <CardDescription>
                    Watch the research presentation video covering the study
                    methodology, findings, and conclusions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted flex-1">
                    <video
                      controls
                      className="w-full h-full object-cover"
                      preload="metadata"
                      id="video"
                    >
                      <source
                        src="/research/research-study.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Use the video controls to play, pause, and adjust volume
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* PDF Section */}
          {project.hasPDF && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-500" />
                    Research Paper
                  </CardTitle>
                  <CardDescription>
                    Download the complete research paper with detailed
                    methodology, data analysis, and comprehensive findings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <FileText className="w-8 h-8 text-green-500" />
                      <div className="flex-1">
                        <h4 className="font-medium">Research Study Paper</h4>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive academic research document
                        </p>
                      </div>
                    </div>

                    {/* Paper Details */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Pages:</span>
                        <span className="font-medium">9 pages</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          File Size:
                        </span>
                        <span className="font-medium">942 KB</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Language:</span>
                        <span className="font-medium">English</span>
                      </div>
                    </div>

                    {/* Brief Description */}
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <p className="text-sm text-green-700 dark:text-green-300">
                        This comprehensive research paper includes detailed
                        methodology, statistical analysis, and findings from our
                        study on daily habits and academic performance.
                      </p>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white mt-auto"
                  >
                    <a
                      href="/research/research-study.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download Research Paper (PDF)
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Abstract Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Card>
            <CardHeader>
              <CardTitle>Abstract</CardTitle>
              <CardDescription>
                A comprehensive study on the relationship between daily habits
                and academic performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                <p className="mb-4">{project.abstract}</p>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">
                    Keywords
                  </h4>
                  <p className="text-sm">{project.keywords.join(", ")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Research Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Research Team</CardTitle>
              <CardDescription>
                Meet the contributors who made this research possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {project.team.map((member, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div
                      className={`w-16 h-16 ${getColorClasses(
                        member.color
                      )} rounded-full flex items-center justify-center mx-auto`}
                    >
                      <span className="font-bold text-lg">
                        {member.initials}
                      </span>
                    </div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {project.department}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.university}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted/30 rounded-lg text-center">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span>{project.university}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Methodology & Findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8"
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* Methodology */}
            <Card>
              <CardHeader>
                <CardTitle>Research Methodology</CardTitle>
                <CardDescription>
                  The approach and methods used in this study
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.methodology.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Findings */}
            <Card>
              <CardHeader>
                <CardTitle>Key Findings</CardTitle>
                <CardDescription>
                  Main discoveries and insights from the research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.findings.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Research Impact</CardTitle>
              <CardDescription>
                The significance and potential applications of this research
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {project.impact}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchDetail;
