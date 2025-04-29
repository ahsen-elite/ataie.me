export type Education = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  description?: string;
};

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "Master of Science in Computer Science",
    institution: "Technical University of Vienna",
    location: "Vienna, Austria",
    startYear: 2014,
    endYear: 2016,
    description: "Specialized in Distributed Systems and Cloud Computing. Thesis on Optimization Techniques for Containerized Microservices.",
  },
  {
    id: "edu-2",
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of Technology",
    location: "Berlin, Germany",
    startYear: 2010,
    endYear: 2014,
    description: "Focus on Software Development, Algorithms, and Data Structures. Participated in the ACM ICPC programming contest.",
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  year: number;
  url?: string;
};

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "AWS Certified DevOps Engineer - Professional",
    issuer: "Amazon Web Services",
    year: 2022,
    url: "https://aws.amazon.com/certification/",
  },
  {
    id: "cert-2",
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    year: 2021,
    url: "https://www.cncf.io/certification/cka/",
  },
  {
    id: "cert-3",
    name: "Microsoft Certified: Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    year: 2020,
    url: "https://learn.microsoft.com/en-us/certifications/",
  },
  {
    id: "cert-4",
    name: "Terraform Associate",
    issuer: "HashiCorp",
    year: 2021,
    url: "https://www.hashicorp.com/certification",
  },
  {
    id: "cert-5",
    name: "Micro1 DevOps Professional",
    issuer: "Micro1",
    year: 2023,
  },
];