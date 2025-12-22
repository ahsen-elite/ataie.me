const bachelorStats = [
  { label: "Final Percentage", value: "81.47%", icon: "📊" },
  { label: "Best Semester", value: "94.00%", icon: "🏆" },
  { label: "Total Credits", value: "151", icon: "📚" },
  { label: "Graduation Year", value: "2019", icon: "🎓" },
];

export default function AboutBachelorsSection() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 py-20 relative"
      aria-label="Academic Excellence"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent blur-3xl -z-10"></div>

      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200 dark:border-blue-800">
          <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            The Foundation of My Tech Journey
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400">
          Bachelor's in Computer Science
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Graduated from Kabul Polytechnic University (2016-2019) with a strong
          foundation in software engineering and computer science, achieving
          second place in my graduating class.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {bachelorStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-blue-100 dark:border-blue-900 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {stat.value}
            </div>
            <div className="text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

