import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type Experience } from "@/lib/data/experience";

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <div key={experience.id} className="relative">
          {index !== experiences.length - 1 && (
            <div className="absolute left-6 top-12 h-full w-[2px] bg-border" />
          )}
          <Card>
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>
                    {experience.company} • {experience.location}
                  </CardDescription>
                </div>
                <div className="text-sm text-muted-foreground">
                  {experience.startDate} — {experience.endDate}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}