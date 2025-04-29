import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  name: string;
  category?: string;
  className?: string;
};

export function SkillBadge({ name, category, className }: SkillBadgeProps) {
  // Define category-based colors
  const getCategoryColor = (category?: string) => {
    switch (category) {
      case "DevOps":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Programming":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Cloud":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "AI":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "Tools":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium transition-colors",
        getCategoryColor(category),
        className
      )}
    >
      {name}
    </span>
  );
}