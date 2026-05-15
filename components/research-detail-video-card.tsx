"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Video, Play, ExternalLink } from "lucide-react";
import Link from "next/link";
import VideoModal from "@/components/video-modal";

type ResearchDetailVideoCardProps = {
  title: string;
  videoSrc?: string;
  thumbnailSrc?: string;
  fullPageHref?: string;
};

export default function ResearchDetailVideoCard({
  title,
  videoSrc = "/research/research-study.mp4",
  thumbnailSrc = "/research/studey-research-thumbnail.jpg",
  fullPageHref = "/research/video/research-study",
}: ResearchDetailVideoCardProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <Card className="h-full flex flex-col" id="video">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Video className="w-5 h-5 text-blue-500" />
            Research Presentation
          </CardTitle>
          <CardDescription className="text-sm sm:text-base hidden sm:block">
            Watch the research presentation video covering the study
            methodology, findings, and conclusions in high quality.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted flex-1 group cursor-pointer">
            <div className="absolute inset-0">
              <img
                src={thumbnailSrc}
                alt="Research Study Video Thumbnail"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.nextElementSibling?.classList.remove("hidden");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white" />
                    </div>
                    <p className="text-white font-medium text-sm sm:text-base">
                      Research Presentation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-0 p-0 cursor-pointer"
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Play research presentation video"
            >
              <span className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 group-hover:scale-110 transition-transform duration-200">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white" />
              </span>
            </button>

            <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded pointer-events-none">
              720p HD
            </div>
          </div>
          <div className="mt-3 sm:mt-4 space-y-2">
            <Button
              type="button"
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link
                href={fullPageHref}
                className="flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Open Full Page</span>
                <span className="sm:hidden">Full Page</span>
              </Link>
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground text-center hidden sm:block">
              Choose between modal view or dedicated full-page experience
            </p>
          </div>
        </CardContent>
      </Card>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc={videoSrc}
        title={title}
      />
    </>
  );
}
