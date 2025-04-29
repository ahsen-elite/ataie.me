export type Skill = {
  name: string;
  category: "DevOps" | "Programming" | "Cloud" | "AI" | "Tools" | "Other";
};

export const skills: Skill[] = [
  // DevOps Skills
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  { name: "GitLab CI", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "Ansible", category: "DevOps" },
  
  // Programming Languages
  { name: "TypeScript", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "Python", category: "Programming" },
  { name: "Go", category: "Programming" },
  { name: "Node.js", category: "Programming" },
  { name: "React", category: "Programming" },
  { name: "Next.js", category: "Programming" },
  { name: "Express", category: "Programming" },
  
  // Cloud Platforms
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "DigitalOcean", category: "Cloud" },
  
  // AI
  { name: "Machine Learning", category: "AI" },
  { name: "Natural Language Processing", category: "AI" },
  { name: "TensorFlow", category: "AI" },
  { name: "PyTorch", category: "AI" },
  
  // Tools
  { name: "Git", category: "Tools" },
  { name: "MongoDB", category: "Tools" },
  { name: "PostgreSQL", category: "Tools" },
  { name: "Redis", category: "Tools" },
  { name: "Prometheus", category: "Tools" },
  { name: "Grafana", category: "Tools" },
  
  // Other
  { name: "Agile", category: "Other" },
  { name: "Scrum", category: "Other" },
  { name: "RESTful APIs", category: "Other" },
  { name: "GraphQL", category: "Other" },
];

export const getSkillsByCategory = (category: Skill["category"]) => {
  return skills.filter(skill => skill.category === category);
};