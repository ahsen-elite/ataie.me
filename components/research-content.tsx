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
import { Download, FileText, Video } from "lucide-react";

const ResearchContent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
            Research & Academic Work
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Investigating the impact of daily habits on student academic
            performance through data analytics and interactive visualizations.
          </p>
        </motion.div>
      </section>

      {/* Research Content */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-5 h-5 text-blue-500" />
                Research Presentation
              </CardTitle>
              <CardDescription>
                Watch my research presentation video covering the study
                methodology, findings, and conclusions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                <video
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src="/research/research-study.mp4" type="video/mp4" />
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

        {/* PDF Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-500" />
                Research Paper
              </CardTitle>
              <CardDescription>
                Download the complete research paper with detailed methodology,
                data analysis, and comprehensive findings.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
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

                <div className="space-y-3">
                  <h4 className="font-medium text-lg">Research Highlights:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Student daily habits analysis (study, sleep, social
                        media)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Interactive Power BI dashboard with data visualizations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Comprehensive data cleaning and analysis methodology
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Educational insights for students and administrators
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
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
              A comprehensive study on the relationship between daily habits and
              academic performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-4">
                In this project, we consider how daily habits of students,
                including the number of hours spent studying, number of sleeping
                hours, and number of social media hours, affect their
                performance at school. We used data from Kaggle covering these
                habits along with other facts like their gender, the quality of
                the internet, whether they have a job, and whether they
                participate in extracurricular activities.
              </p>
              <p className="mb-4">
                We followed a precise process to clean and sanitize the data to
                make it accurate and reliable. We developed an interactive Power
                BI dashboard to present important trends and associations, such
                as average study time, sleep duration, and examination scores.
                The students were classified in terms of their performance to
                study how different habits influence their results.
              </p>
              <p className="mb-4">
                The dashboard enables one to see how various behaviors are
                linked to learning success in various types of students. The
                research shows the importance of the balance between day-to-day
                activities and presents a good resource for students,
                instructors, and school administrators to find habits that
                support learning. Finally, the research seeks to assist in
                making more informed decisions using information that can pave
                way for healthier study habits and improved school outcomes.
              </p>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">
                  Keywords
                </h4>
                <p className="text-sm">
                  Academic habits, student performance, data analytics, sleep,
                  study hours, Power BI, education dashboard
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Contributors Section */}
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
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    GA
                  </span>
                </div>
                <h4 className="font-medium">Ghulam Abbas Ataie</h4>
                <p className="text-sm text-muted-foreground">
                  Department of Data Science
                </p>
                <p className="text-xs text-muted-foreground">
                  University of Europe for Applied Sciences
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                    AS
                  </span>
                </div>
                <h4 className="font-medium">Arnav Singh Bhardwaj</h4>
                <p className="text-sm text-muted-foreground">
                  Department of Data Science
                </p>
                <p className="text-xs text-muted-foreground">
                  University of Europe for Applied Sciences
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">
                    SS
                  </span>
                </div>
                <h4 className="font-medium">Shilpa Sidda Raju</h4>
                <p className="text-sm text-muted-foreground">
                  Department of Data Science
                </p>
                <p className="text-xs text-muted-foreground">
                  University of Europe for Applied Sciences
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">
                    MP
                  </span>
                </div>
                <h4 className="font-medium">Manasi Prabhakar</h4>
                <p className="text-sm text-muted-foreground">
                  Department of Data Science
                </p>
                <p className="text-xs text-muted-foreground">
                  University of Europe for Applied Sciences
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted/30 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Location:</strong> Potsdam, Germany
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Research Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-8"
      >
        <Card>
          <CardHeader>
            <CardTitle>Research Methodology & Impact</CardTitle>
            <CardDescription>
              Key aspects of our research approach and findings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-medium text-blue-600 dark:text-blue-400">
                  Data Source
                </h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive dataset from Kaggle covering student habits,
                  demographics, and academic performance metrics.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-blue-600 dark:text-blue-400">
                  Analysis Tools
                </h4>
                <p className="text-sm text-muted-foreground">
                  Interactive Power BI dashboard for data visualization and
                  trend analysis of study patterns and outcomes.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-blue-600 dark:text-blue-400">
                  Educational Impact
                </h4>
                <p className="text-sm text-muted-foreground">
                  Provides insights for students, instructors, and
                  administrators to optimize learning environments and study
                  habits.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ResearchContent;
