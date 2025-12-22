import { Code, Brain, FileCode, Database } from "lucide-react";

const stats = [
  {
    icon: Code,
    value: "6+",
    label: "Years Software Engineering",
    color: "blue",
    gradient: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: Brain,
    value: "1+",
    label: "Year Data Science & ML",
    color: "purple",
    gradient: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: FileCode,
    value: "50+",
    label: "Projects Completed",
    color: "blue",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: Database,
    value: "100%",
    label: "Data-Driven Solutions",
    color: "purple",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
];

export default function AboutStatsSection() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 py-12 relative"
      aria-label="Professional Stats"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-background to-muted/30 rounded-xl p-6 border border-border/50 hover:border-blue-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div
              className={`p-3 rounded-lg bg-gradient-to-br ${stat.gradient} mb-4 w-fit`}
            >
              <stat.icon
                className={`w-6 h-6 ${
                  stat.color === "blue"
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-purple-600 dark:text-purple-400"
                }`}
              />
            </div>
            <div
              className={`text-3xl font-bold mb-1 ${
                stat.color === "blue"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-purple-600 dark:text-purple-400"
              }`}
            >
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

