import Link from "next/link";
import Image from "next/image";
import { GraduationCap, FileText, Video } from "lucide-react";

export default function HomeRecentResearch() {
  return (
    <section className="py-16">
      <div className="mb-10">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Recent Research</h2>
            <p className="text-muted-foreground">
              Data analytics research at University of Europe for Applied
              Sciences
            </p>
          </div>
          <Link
            href="/research"
            className="text-sm text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 font-medium hidden sm:block"
          >
            View all →
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-gradient-to-br from-background to-muted/20 overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Research Content */}
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                  University of Europe (UE)
                </span>
                <span className="text-xs text-muted-foreground ml-2">2025</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Impact of Daily Habits on Student Academic Performance
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A comprehensive study analyzing how study hours, sleep patterns,
              and social media usage affect student performance using data
              analytics and interactive visualizations. Developed an interactive
              Power BI dashboard to present trends and correlations.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Data Analytics",
                "Power BI",
                "Student Behavior",
                "Education",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-md font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/research/student-habits-performance"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Read Research
              </Link>
              <Link
                href="/research/student-habits-performance"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-muted transition-colors"
              >
                <Video className="w-4 h-4" />
                Watch Video
              </Link>
            </div>
          </div>

          {/* Research Image/Thumbnail */}
          <div className="relative bg-gradient-to-br from-purple-500/5 to-blue-500/5 p-8 flex items-center justify-center">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border/50 bg-muted/30">
              <Image
                src="/research/studey-research-thumbnail.jpg"
                alt="Student Habits Research Dashboard"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
