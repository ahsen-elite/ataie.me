import { Metadata } from "next";
import { notFound } from "next/navigation";
import videosData from "@/data/videos.json";
import Script from "next/script";
import VideoPlayer from "@/components/video-player";
import { SITE_URL, toIsoDuration, yearToIsoDate } from "@/lib/seo";

interface VideoPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: VideoPageProps): Promise<Metadata> {
  const videoData = videosData.videos.find((video) => video.id === params.id);

  if (!videoData) {
    return {
      title: "Video Not Found",
      description: "The requested video could not be found.",
      robots: { index: false, follow: true },
    };
  }

  const title = `${videoData.title} | Research Video`;
  const description = videoData.description;
  const videoUrl = `${SITE_URL}/research/video/${params.id}`;
  const imageUrl = `${SITE_URL}${videoData.thumbnail}`;

  return {
    title,
    description,
    keywords: [
      videoData.category,
      "research",
      "video",
      "data science",
      "Abbas Ataie",
      ...videoData.title.toLowerCase().split(" "),
    ],
    authors: [{ name: "Abbas Ataie", url: SITE_URL }],
    creator: "Abbas Ataie",
    publisher: "Abbas Ataie",
    openGraph: {
      type: "video.other",
      locale: "en_US",
      url: videoUrl,
      title,
      description,
      siteName: "Abbas Ataie",
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
          url: `${SITE_URL}${videoData.videoSrc}`,
          width: 1920,
          height: 1080,
          type: "video/mp4",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
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
      "video:release_date": yearToIsoDate(videoData.year),
      "video:tag": videoData.category,
    },
  };
}

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoData.title,
    description: videoData.description,
    thumbnailUrl: `${SITE_URL}${videoData.thumbnail}`,
    uploadDate: yearToIsoDate(videoData.year),
    duration: toIsoDuration(videoData.duration),
    contentUrl: `${SITE_URL}${videoData.videoSrc}`,
    embedUrl: `${SITE_URL}/research/video/${params.id}`,
    author: {
      "@type": "Person",
      name: "Abbas Ataie",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Abbas Ataie",
      url: SITE_URL,
    },
    genre: videoData.category,
    keywords: [
      videoData.category,
      "research",
      "video",
      "data science",
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
      <div className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <VideoPlayer videoData={videoData} />

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
      </div>
    </>
  );
}
