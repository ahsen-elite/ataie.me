import ResearchDetail from "@/components/research-detail";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// This would typically come from a database or CMS
const researchProjects = [
  {
    id: "student-habits-performance",
    title: "Impact of Daily Habits on Student Academic Performance",
    description:
      "A comprehensive study analyzing how study hours, sleep patterns, and social media usage affect student performance using data analytics and interactive visualizations.",
    abstract:
      "In this project, we consider how daily habits of students, including the number of hours spent studying, number of sleeping hours, and number of social media hours, affect their performance at school. We used data from Kaggle covering these habits along with other facts like their gender, the quality of the internet, whether they have a job, and whether they participate in extracurricular activities. We followed a precise process to clean and sanitize the data to make it accurate and reliable. We developed an interactive Power BI dashboard to present important trends and associations, such as average study time, sleep duration, and examination scores. The students were classified in terms of their performance to study how different habits influence their results. The dashboard enables one to see how various behaviors are linked to learning success in various types of students. The research shows the importance of the balance between day-to-day activities and presents a good resource for students, instructors, and school administrators to find habits that support learning. Finally, the research seeks to assist in making more informed decisions using information that can pave way for healthier study habits and improved school outcomes.",
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
      {
        name: "Ghulam Abbas Ataie",
        initials: "GA",
        color: "blue",
      },
      {
        name: "Arnav Singh Bhardwaj",
        initials: "AS",
        color: "green",
      },
      {
        name: "Shilpa Sidda Raju",
        initials: "SS",
        color: "purple",
      },
      {
        name: "Manasi Prabhakar",
        initials: "MP",
        color: "orange",
      },
    ],
    ogImage: "/image-study-og.png",
    department: "Department of Data Science",
    university: "University of Europe for Applied Sciences",
    location: "Potsdam, Germany",
    hasVideo: true,
    hasPDF: true,
    year: "2025",
    category: "Data Science & Education",
    methodology: [
      "Data collection from Kaggle dataset",
      "Data cleaning and preprocessing",
      "Statistical analysis and visualization",
      "Interactive dashboard development",
      "Performance correlation analysis",
    ],
    findings: [
      "Study hours have a direct correlation with academic performance",
      "Sleep quality significantly impacts learning outcomes",
      "Social media usage shows inverse relationship with grades",
      "Balanced daily routines lead to better academic results",
      "Interactive dashboards help identify optimal study patterns",
    ],
    impact:
      "This research provides valuable insights for educational institutions, helping them develop better strategies for student support and academic improvement.",
  },
];

interface ResearchPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ResearchPageProps): Promise<Metadata> {
  const project = researchProjects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Research Not Found",
    };
  }

  return {
    title: `${project.title} | Research`,
    description: project.description,
    keywords: project.keywords,
    openGraph: {
      title: `${project.title} | Research`,
      description: project.description,
      images: [
        {
          url: project.ogImage || "/research-og.png",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      title: `${project.title} | Research`,
      description: project.description,
      images: [project.ogImage || "/research-og.png"],
    },
  };
}

export default function ResearchPage({ params }: ResearchPageProps) {
  const project = researchProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ResearchDetail project={project} />;
}
