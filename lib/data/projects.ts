export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Cloud-Native Microservices Platform",
    description: "A scalable microservices platform built with Kubernetes, featuring automated deployment, monitoring, and self-healing capabilities. Includes service mesh integration with Istio for advanced networking features.",
    technologies: ["Kubernetes", "Docker", "Istio", "Prometheus", "Grafana", "Terraform", "Go"],
    imageUrl: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "AI-Powered DevOps Assistant",
    description: "An intelligent assistant that leverages machine learning to analyze CI/CD pipelines, suggest optimizations, predict failures, and automate routine DevOps tasks. Reduced incident response time by 45%.",
    technologies: ["Python", "TensorFlow", "Docker", "FastAPI", "GitLab CI", "React"],
    imageUrl: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Serverless E-commerce Platform",
    description: "A fully serverless e-commerce solution built on AWS Lambda with event-driven architecture. Features include product catalog, shopping cart, payment processing, and order management.",
    technologies: ["AWS Lambda", "DynamoDB", "API Gateway", "S3", "CloudFront", "React", "Node.js"],
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "project-4",
    title: "Infrastructure Monitoring Dashboard",
    description: "A comprehensive monitoring solution that aggregates metrics and logs from various sources. Provides real-time insights, configurable alerts, and historical data analysis.",
    technologies: ["Grafana", "Prometheus", "ELK Stack", "Node.js", "PostgreSQL", "Docker"],
    imageUrl: "https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-5",
    title: "Automated Security Scanner",
    description: "A security scanning tool that identifies vulnerabilities in infrastructure code, container images, and application dependencies. Integrates with CI/CD pipelines to prevent deployment of insecure code.",
    technologies: ["Python", "Docker", "Kubernetes", "GitLab CI", "Trivy", "Anchore"],
    imageUrl: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "project-6",
    title: "Multi-Cloud Cost Optimizer",
    description: "A tool that analyzes cloud resource usage across multiple providers and recommends cost optimization strategies. Saved clients an average of 30% on cloud spending.",
    technologies: ["Python", "AWS", "Azure", "GCP", "Terraform", "React", "Node.js"],
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};