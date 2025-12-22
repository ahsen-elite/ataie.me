const specializations = [
  {
    title: "Data Science & ML",
    description:
      "Machine learning models, predictive analytics, and data-driven decision making for business intelligence",
    technologies: [
      "Python",
      "PyTorch",
      "Pandas",
      "Scikit-learn",
      "Data Analytics",
      "Data Visualization",
      "Data Engineering",
    ],
    icon: "📊",
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end application development with modern frameworks and best practices",
    technologies: [
      "Node.js",
      "TypeScript",
      "Next.js",
      "React",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "ElasticSearch",
      "GitHub Actions",
    ],
    icon: "⚡",
  },
  {
    title: "Cloud Architecture",
    description:
      "Scalable cloud solutions and infrastructure design for enterprise applications",
    technologies: [
      "AWS",
      "AWS Lambda",
      "AWS RDS",
      "GCP",
      "Docker",
      "Terraform",
      "CI/CD",
      "DevOps",
    ],
    icon: "☁️",
  },
];

export default function HomeSpecializations() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Specializations</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Deep expertise across software engineering and data science, from
          building scalable applications to extracting actionable insights from
          complex datasets
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specializations.map((specialization) => (
          <div
            key={specialization.title}
            className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{specialization.icon}</span>
              <h3 className="text-lg font-semibold">{specialization.title}</h3>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {specialization.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {specialization.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
