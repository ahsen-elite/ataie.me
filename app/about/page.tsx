import { Metadata } from "next";
import { experiences } from "@/lib/data/experience";
import { education, certifications } from "@/lib/data/education";
import { skills } from "@/lib/data/skills";
import { Timeline } from "@/components/sections/timeline";
import { SkillBadge } from "@/components/skill-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About | Abbas Ataie",
  description: "Learn more about Abbas Ataie, a Senior Software Engineer specializing in DevOps, AI, and full-stack development.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-xl text-muted-foreground">
          Senior Software Engineer with expertise in DevOps, AI, and full-stack development.
        </p>
      </div>

      {/* Bio Section */}
      <section className="mb-16 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">My Journey</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              With over 8 years of experience in software engineering, I specialize in building scalable, cloud-native applications and implementing DevOps practices to streamline development workflows.
            </p>
            <p>
              My journey began with a passion for solving complex problems through code. As I progressed in my career, I developed a deep interest in automation, infrastructure as code, and cloud technologies, which led me to specialize in DevOps.
            </p>
            <p>
              In recent years, I&apos;ve expanded my expertise to include AI and machine learning, particularly in the context of optimizing software delivery pipelines and creating intelligent tools for developers.
            </p>
            <p>
              I believe in continuous learning and staying updated with the latest technologies and best practices. My goal is to create robust, efficient, and maintainable systems that deliver real value to users and businesses.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[400px] w-full max-w-md overflow-hidden rounded-lg bg-muted">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <span className="font-medium">Photo Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Skills & Expertise</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {["DevOps", "Programming", "Cloud", "AI", "Tools", "Other"].map((category) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <SkillBadge 
                        key={skill.name} 
                        name={skill.name} 
                        category={skill.category}
                      />
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Work Experience</h2>
        <Timeline experiences={experiences} />
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <Card key={edu.id}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <p className="text-muted-foreground">
                  {edu.institution} • {edu.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  {edu.startYear} — {edu.endYear}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Certifications</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.id}>
              <CardHeader>
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.year}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}