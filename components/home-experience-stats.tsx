import { Code, Brain, TrendingUp } from "lucide-react";

export default function HomeExperienceStats() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4 max-w-md">
      {/* Software Engineering Experience */}
      <div className="relative group">
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all">
          <div className="flex items-start justify-between mb-2">
            <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <TrendingUp className="w-4 h-4 text-blue-600/60 dark:text-blue-400/60" />
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              6
            </div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Years
            </div>
            <div className="text-xs text-muted-foreground">
              Software Engineering
            </div>
          </div>
          {/* Progress bar indicator */}
          <div className="mt-3 h-1.5 bg-blue-500/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Data Science Experience */}
      <div className="relative group">
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all">
          <div className="flex items-start justify-between mb-2">
            <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <TrendingUp className="w-4 h-4 text-purple-600/60 dark:text-purple-400/60" />
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              1
            </div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Year
            </div>
            <div className="text-xs text-muted-foreground">
              Data Science & ML
            </div>
          </div>
          {/* Progress bar indicator - showing growth */}
          <div className="mt-3 h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-purple-500 rounded-full"
              style={{ width: "16.67%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
