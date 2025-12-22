import { Code, Brain, Database, BarChart3 } from "lucide-react";

const keyAreas = [
  { icon: Code, label: "Software Engineering" },
  { icon: Brain, label: "Machine Learning" },
  { icon: Database, label: "Data Science" },
  { icon: BarChart3, label: "Analytics" },
];

export default function HomeKeyAreas() {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {keyAreas.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50 hover:bg-muted transition-colors"
        >
          <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
