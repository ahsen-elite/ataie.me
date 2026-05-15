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
  ArrowLeft,
  Calendar,
  MapPin,
  Building,
} from "lucide-react";
import Link from "next/link";
import ResearchDetailVideoCard from "@/components/research-detail-video-card";

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

function getColorClasses(color: string) {
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
}

const ResearchDetail = ({ project }: ResearchDetailProps) => {
  return (
    <section className="min-h-screen text-foreground bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] research-detail-content">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-20 pb-16 sm:pb-32 relative">
        <div className="mb-4 sm:mb-8">
          <Button variant="ghost" asChild>
            <Link href="/research" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Research</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>
        </div>

        <section className="py-6 sm:py-12 md:py-20">
          <div className="text-center mb-8 sm:mb-16">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 flex-wrap">
              <span className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium rounded-full">
                {project.category}
              </span>
              <span className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium rounded-full">
                {project.year}
              </span>
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600 leading-tight">
              {project.title}
            </h1>
            <p className="text-foreground/60 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed hidden sm:block">
              {project.description}
            </p>
            <p className="text-foreground/60 max-w-3xl mx-auto text-sm leading-relaxed sm:hidden">
              {project.description.length > 120
                ? `${project.description.substring(0, 120)}...`
                : project.description}
            </p>
          </div>
        </section>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-stretch">
          {project.hasVideo && (
            <div className="h-full">
              <ResearchDetailVideoCard title={project.title} />
            </div>
          )}

          {project.hasPDF && (
            <div className="h-full">
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <FileText className="w-5 h-5 text-green-500" />
                    Research Paper
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base hidden sm:block">
                    Download the complete research paper with detailed
                    methodology, data analysis, and comprehensive findings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-muted/50 rounded-lg">
                      <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm sm:text-base">
                          Research Study Paper
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                          Comprehensive academic research document
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-muted-foreground">Pages:</span>
                        <span className="font-medium">9 pages</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-muted-foreground">
                          File Size:
                        </span>
                        <span className="font-medium">942 KB</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-muted-foreground">Language:</span>
                        <span className="font-medium">English</span>
                      </div>
                    </div>

                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hidden sm:block">
                      <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                        This comprehensive research paper includes detailed
                        methodology, statistical analysis, and findings from our
                        study on daily habits and academic performance.
                      </p>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white mt-4 sm:mt-auto text-sm sm:text-base"
                  >
                    <a
                      href="/research/research-study.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">
                        Download Research Paper (PDF)
                      </span>
                      <span className="sm:hidden">Download PDF</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        <div className="mt-12 sm:mt-16">
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <div>
                <CardTitle className="text-lg sm:text-xl">Abstract</CardTitle>
                <CardDescription className="text-sm sm:text-base hidden sm:block">
                  A comprehensive study on the relationship between daily
                  habits and academic performance
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                <p className="mb-4 text-sm sm:text-base">{project.abstract}</p>
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2 text-sm sm:text-base">
                    Keywords
                  </h4>
                  <p className="text-xs sm:text-sm">
                    {project.keywords.join(", ")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 sm:mt-8">
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl">
                Research Team
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Meet the contributors who made this research possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
                {project.team.map((member, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 ${getColorClasses(
                        member.color
                      )} rounded-full flex items-center justify-center mx-auto`}
                    >
                      <span className="font-bold text-sm sm:text-lg">
                        {member.initials}
                      </span>
                    </div>
                    <h4 className="font-medium text-sm sm:text-base">
                      {member.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {project.department}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {project.university}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted/30 rounded-lg text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{project.university}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 sm:mt-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-4 sm:pb-6">
                <div>
                  <CardTitle className="text-lg sm:text-xl">
                    Research Methodology
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base hidden sm:block">
                    The approach and methods used in this study
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3">
                  {project.methodology.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4 sm:pb-6">
                <div>
                  <CardTitle className="text-lg sm:text-xl">
                    Key Findings
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base hidden sm:block">
                    Main discoveries and insights from the research
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3">
                  {project.findings.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 sm:mt-8">
          <Card>
            <CardHeader className="pb-4 sm:pb-6">
              <div>
                <CardTitle className="text-lg sm:text-xl">
                  Research Impact
                </CardTitle>
                <CardDescription className="text-sm sm:text-base hidden sm:block">
                  The significance and potential applications of this research
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {project.impact}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchDetail;
