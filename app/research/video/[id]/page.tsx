import { Metadata } from "next";
import { notFound } from "next/navigation";
import videosData from "@/data/videos.json";

import Script from "next/script";
import VideoPlayer from "@/components/video-player";

interface VideoPageProps {
  params: {
    id: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: VideoPageProps): Promise<Metadata> {
  const videoData = videosData.videos.find((video) => video.id === params.id);

  if (!videoData) {
    return {
      title: "Video Not Found | Ghulam Abbas Ataie",
      description: "The requested video could not be found.",
    };
  }

  const title = `${videoData.title} | Research Video | Ghulam Abbas Ataie`;
  const description = videoData.description;
  const videoUrl = `https://ataie.me/research/video/${params.id}`;
  const imageUrl = `https://ataie.me/research/studey-research-thumbnail.jpg`;

  return {
    title,
    description,
    keywords: [
      videoData.category,
      "research",
      "video",
      "data science",
      "machine learning",
      "web development",
      "Ghulam Abbas Ataie",
      ...videoData.title.toLowerCase().split(" "),
    ],
    authors: [{ name: "Ghulam Abbas Ataie", url: "https://ataie.me" }],
    creator: "Ghulam Abbas Ataie",
    publisher: "Ghulam Abbas Ataie",
    openGraph: {
      type: "video.other",
      locale: "en_US",
      url: videoUrl,
      title,
      description,
      siteName: "Ghulam Abbas Ataie",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: videoData.title,
        },
      ],
      videos: [
        {
          url: `https://ataie.me${videoData.videoSrc}`,
          width: 1920,
          height: 1080,
          type: "video/mp4",
        },
      ],
    },
    twitter: {
      card: "player",
      title,
      description,
      creator: "@abbasataie",
      images: [imageUrl],
      site: "@abbasataie",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: videoUrl,
    },
    other: {
      "video:duration": videoData.duration,
      "video:release_date": videoData.year,
      "video:tag": videoData.category,
    },
  };
}

// Generate static params for all videos
export async function generateStaticParams() {
  return videosData.videos.map((video) => ({
    id: video.id,
  }));
}

export default function VideoPage({ params }: VideoPageProps) {
  const videoData = videosData.videos.find((video) => video.id === params.id);

  if (!videoData) {
    notFound();
  }

  // Generate structured data for the video
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoData.title,
    description: videoData.description,
    thumbnailUrl: `https://ataie.me${videoData.thumbnail}`,
    uploadDate: `${videoData.year}-01-01`,
    duration: `PT${videoData.duration.replace(":", "M")}S`,
    contentUrl: `https://ataie.me${videoData.videoSrc}`,
    embedUrl: `https://ataie.me/research/video/${params.id}`,
    author: {
      "@type": "Person",
      name: "Ghulam Abbas Ataie",
      url: "https://ataie.me",
    },
    publisher: {
      "@type": "Organization",
      name: "Ghulam Abbas Ataie",
      url: "https://ataie.me",
    },
    genre: videoData.category,
    keywords: [
      videoData.category,
      "research",
      "video",
      "data science",
      "machine learning",
      "web development",
      ...videoData.title.toLowerCase().split(" "),
    ],
  };

  return (
    <>
      <Script
        id="video-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <VideoPlayer videoData={videoData} />

          {/* Video info */}
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {videoData.title}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              {videoData.description}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                {videoData.category}
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                {videoData.year}
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                {videoData.duration}
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
