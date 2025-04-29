export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Senior DevOps Engineer",
    company: "TaraSolutions",
    location: "Remote",
    startDate: "June 2022",
    endDate: "Present",
    description: [
      "Lead the DevOps team in implementing CI/CD pipelines for cloud-native applications",
      "Migrated legacy applications to containerized microservices architecture using Docker and Kubernetes",
      "Reduced deployment time by 70% through automation and infrastructure as code",
      "Implemented robust monitoring and alerting systems with Prometheus and Grafana",
      "Managed multi-cloud infrastructure across AWS, Azure, and GCP",
    ],
    technologies: ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD", "Prometheus", "Grafana", "GitOps"],
  },
  {
    id: "exp-2",
    title: "Full Stack Developer",
    company: "Tech Innovations",
    location: "Berlin, Germany",
    startDate: "August 2019",
    endDate: "May 2022",
    description: [
      "Developed and maintained web applications using React, Node.js, and TypeScript",
      "Implemented serverless architecture using AWS Lambda and API Gateway",
      "Created RESTful APIs and GraphQL endpoints for frontend consumption",
      "Collaborated with UX designers to implement responsive, accessible web interfaces",
      "Participated in code reviews and mentored junior developers",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS Lambda", "MongoDB", "GraphQL", "Express"],
  },
  {
    id: "exp-3",
    title: "Software Engineer",
    company: "Global Systems",
    location: "Vienna, Austria",
    startDate: "January 2017",
    endDate: "July 2019",
    description: [
      "Built and maintained backend services using Python and Django",
      "Designed and implemented database schemas using PostgreSQL",
      "Integrated third-party APIs and payment gateways",
      "Implemented automated testing with pytest and CI/CD pipelines",
      "Participated in agile ceremonies and sprint planning",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Docker", "Git", "RESTful APIs", "CI/CD"],
  },
];