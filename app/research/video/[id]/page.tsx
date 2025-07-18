"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  ArrowLeft,
  RotateCcw,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import videosData from "@/data/videos.json";

interface VideoPageProps {
  params: {
    id: string;
  };
}

export default function VideoPage({ params }: VideoPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [quality, setQuality] = useState("720p");
  const router = useRouter();

  // Find video data from JSON
  const videoData = videosData.videos.find((video) => video.id === params.id);

  // If video not found, redirect to 404 or show error
  if (!videoData) {
    return (
      <div className="min-h-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Video Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The requested video could not be found.
            </p>
            <Button onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  useEffect(() => {
    // Auto-hide controls after 3 seconds
    const timer = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isPlaying, showControls]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
    setShowControls(true);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
    setShowControls(true);
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          (videoRef.current as any).webkitRequestFullscreen();
        } else if ((videoRef.current as any).msRequestFullscreen) {
          (videoRef.current as any).msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          (document as any).msExitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
    setShowControls(true);
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
    setShowControls(true);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
    setShowControls(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      router.back();
    } else if (e.key === " ") {
      e.preventDefault();
      togglePlay();
    } else if (e.key === "f" || e.key === "F") {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === "r" || e.key === "R") {
      e.preventDefault();
      restartVideo();
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setTimeout(() => setShowControls(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Research
            </Button>
          </motion.div>

          {/* Video container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-black rounded-lg overflow-hidden shadow-2xl"
            onKeyDown={handleKeyDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
          >
            {/* Video element */}
            <video
              ref={videoRef}
              className="w-full aspect-video object-contain"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
              preload="metadata"
              poster={videoData.thumbnail}
            >
              <source src={videoData.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Controls overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showControls ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Top controls */}
              <div className="absolute top-4 right-4 flex items-center gap-2 pointer-events-auto">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={restartVideo}
                  className="text-white hover:bg-white/20"
                >
                  <RotateCcw className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFullscreen}
                  className="text-white hover:bg-white/20"
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-5 h-5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </Button>
              </div>

              {/* Center play button */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                  <div
                    className="bg-white/20 backdrop-blur-sm rounded-full p-8 cursor-pointer hover:bg-white/30 transition-colors"
                    onClick={togglePlay}
                  >
                    <Play className="w-20 h-20 text-white fill-white" />
                  </div>
                </div>
              )}

              {/* Bottom controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pointer-events-auto">
                {/* Progress bar */}
                <div className="mb-4">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-3 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                        (currentTime / (duration || 1)) * 100
                      }%, rgba(255,255,255,0.3) ${
                        (currentTime / (duration || 1)) * 100
                      }%, rgba(255,255,255,0.3) 100%)`,
                    }}
                  />
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={togglePlay}
                      className="text-white hover:bg-white/20"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleMute}
                      className="text-white hover:bg-white/20"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </Button>

                    <span className="text-lg font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white/80">Quality:</span>
                      <span className="text-sm font-medium text-white">
                        {videoData.quality}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="mt-3">
                  <h1 className="text-xl font-semibold text-white">
                    {videoData.title}
                  </h1>
                  <p className="text-white/80 text-sm mt-1">
                    {videoData.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Video info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {videoData.title}
            </h2>
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
          </motion.div>
        </div>
      </main>
    </div>
  );
}
