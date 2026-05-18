import ResearchDetail from "@/components/research-detail";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { researchProjects } from "@/lib/research-projects";
import { SITE_URL, yearToIsoDate } from "@/lib/seo";

interface ResearchPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return researchProjects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ResearchPageProps): Promise<Metadata> {
  const project = researchProjects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Research Not Found",
      robots: { index: false, follow: true },
    };
  }

  const url = `${SITE_URL}/research/${params.id}`;
  const imageUrl = `${SITE_URL}${project.ogImage || "/research-og.png"}`;
  const publishedDate = yearToIsoDate(project.year);

  return {
    title: `${project.title} | Research`,
    description: project.description,
    keywords: [
      ...project.keywords,
      "Abbas Ataie Research",
      "Data Science Research",
      "Academic Research",
      "University Research",
      "Student Performance Analysis",
      "Educational Data Analytics",
    ],
    authors: [{ name: "Abbas Ataie", url: SITE_URL }],
    creator: "Abbas Ataie",
    publisher: "Abbas Ataie",
    openGraph: {
      type: "article",
      title: `${project.title} | Research`,
      description: project.description,
      url: url,
      siteName: "Abbas Ataie",
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      publishedTime: publishedDate,
      authors: ["Abbas Ataie"],
      section: project.category,
      tags: project.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Research`,
      description: project.description,
      creator: "@abbasataie",
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function ResearchPage({ params }: ResearchPageProps) {
  const project = researchProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: project.title,
    description: project.description,
    abstract: project.abstract,
    author: project.team.map((member) => ({
      "@type": "Person",
      name: member.name,
    })),
    publisher: {
      "@type": "Organization",
      name: project.university,
      url: "https://www.ue-germany.com",
    },
    datePublished: yearToIsoDate(project.year),
    image: `${SITE_URL}${project.ogImage || "/research-og.png"}`,
    keywords: project.keywords.join(", "),
    about: {
      "@type": "Thing",
      name: project.category,
    },
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/research/${params.id}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <ResearchDetail project={project} />
    </>
  );
}
