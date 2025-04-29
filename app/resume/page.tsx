import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/lib/data/experience";
import { education, certifications } from "@/lib/data/education";
import { skills } from "@/lib/data/skills";
import { SkillBadge } from "@/components/skill-badge";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume | Abbas Ataie",
  description: "Professional resume of Abbas Ataie, a Senior Software Engineer specializing in DevOps, AI, and full-stack development.",
};

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold">Resume</h1>
          <p className="text-xl text-muted-foreground">
            My professional background and qualifications.
          </p>
        </div>
        <Button size="lg">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div className="mb-12 rounded-lg border bg-card p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold">Abbas Ataie</h2>
            <p className="text-lg text-muted-foreground">Senior Software Engineer</p>
            <p className="mt-4 text-muted-foreground">
              Experienced software engineer specializing in DevOps, AI, and full-stack development with a proven track record of building scalable, resilient systems and optimizing development workflows.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium">Email:</span>
              <Link
                href="mailto:contact@example.com"
                className="text-primary hover:underline"
              >
                contact@example.com
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Location:</span>
              <span>Vienna, Austria</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">LinkedIn:</span>
              <Link
                href="https://linkedin.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/abbasataie
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">GitHub:</span>
              <Link
                href="https://github.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/abbasataie
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Skills</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">DevOps & Cloud</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills
                    .filter(skill => ["DevOps", "Cloud"].includes(skill.category))
                    .map(skill => (
                      <SkillBadge key={skill.name} name={skill.name} />
                    ))}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Programming</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills
                    .filter(skill => skill.category === "Programming")
                    .map(skill => (
                      <SkillBadge key={skill.name} name={skill.name} />
                    ))}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">AI & Data</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills
                    .filter(skill => skill.category === "AI")
                    .map(skill => (
                      <SkillBadge key={skill.name} name={skill.name} />
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tools & Methodologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Tools</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills
                    .filter(skill => skill.category === "Tools")
                    .map(skill => (
                      <SkillBadge key={skill.name} name={skill.name} />
                    ))}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Methodologies</h3>
                <div className="flex flex-wrap gap-1.5">
                  {skills
                    .filter(skill => skill.category === "Other")
                    .map(skill => (
                      <SkillBadge key={skill.name} name={skill.name} />
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Work Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="text-muted-foreground">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {exp.startDate} — {exp.endDate}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution} • {edu.startYear} - {edu.endYear}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">Certifications</h2>
          <div className="space-y-4">
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
        </div>
      </section>
    </div>
  );
}