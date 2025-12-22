import Image from "next/image";

export default function AboutMastersSection() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 py-20 relative"
      aria-label="Master's Journey"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent blur-3xl -z-10"></div>

      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-200 dark:border-blue-800">
          <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            Current Academic Pursuit
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400">
          Master's in Data Science
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          University of Europe for Applied Sciences (2025-Present)
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-card rounded-2xl p-6 border border-border">
            <h3 className="text-2xl font-semibold mb-4">Core Focus Areas</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  📊
                </span>
                <p>Data Science & Analytics</p>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  🤖
                </span>
                <p>Machine Learning & AI</p>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  ☁️
                </span>
                <p>Cloud Computing</p>
              </div>
              <div className="flex items-start gap-3 group">
                <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  📈
                </span>
                <p>Decision Support Systems</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full aspect-video">
            <Image
              src="/ue-germany.webp"
              alt="Data Science and Machine Learning Visualization"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}

