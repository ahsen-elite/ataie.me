import { Code, BarChart3 } from "lucide-react";

export default function AboutExpertiseSection() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 py-20 relative"
      aria-label="Skills & Expertise"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent blur-3xl -z-10"></div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400">
          Core Expertise
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Combining software engineering and data science to deliver impactful
          solutions
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Software Engineering */}
        <div className="bg-gradient-to-br from-blue-500/10 via-background to-background rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20">
              <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold">Software Engineering</h3>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Building scalable, maintainable applications with modern technologies
            and best practices. Expertise in full-stack development, cloud
            architecture, and system design.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Full-Stack",
              "Cloud Architecture",
              "System Design",
              "API Development",
              "DevOps",
              "Microservices",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Data Science */}
        <div className="bg-gradient-to-br from-purple-500/10 via-background to-background rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20">
              <BarChart3 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold">Data Science</h3>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Extracting insights from complex datasets using machine learning,
            statistical analysis, and data visualization. Transforming raw data
            into actionable business intelligence.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Machine Learning",
              "Data Analytics",
              "Power BI",
              "Python",
              "Statistical Analysis",
              "Data Visualization",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

