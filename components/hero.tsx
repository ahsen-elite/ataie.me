"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-lg md:text-xl font-medium mb-2">
          Hi! I&apos;m <span className="italic">Ghulam Abbas Ataie</span>,
        </h2>
        <p className="text-muted-foreground mb-8">
          Senior Software Developer & Technical Lead based in Tehran
        </p>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Building scalable{" "}
            <span className="inline-flex items-center">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 mx-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 8L21 12M21 12L17 16M21 12H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            enterprise solutions with{" "}
            <span className="inline-flex items-center">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 mx-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            modern technologies
          </h1>

          <div className="relative text-3xl md:text-4xl lg:text-5xl font-bold leading-tight inline-block">
            <span
              className={cn(
                "relative z-10",
                "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
              )}
            >
              Full-Stack Development & Cloud Architecture
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Currently @</span>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 flex items-center justify-center bg-blue-100 rounded">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="#0078D4" />
                  <path d="M11.5 4H4V11.5H11.5V4Z" fill="white" />
                  <path d="M11.5 12.5H4V20H11.5V12.5Z" fill="white" />
                  <path d="M12.5 4H20V11.5H12.5V4Z" fill="white" />
                  <path d="M12.5 12.5H20V20H12.5V12.5Z" fill="white" />
                </svg>
              </div>
              <span>Tara Solutions</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span>Previously @</span>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 flex items-center justify-center bg-blue-100 rounded">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" fill="#444" />
                  <path d="M35 65H65V35H35V65Z" fill="white" />
                </svg>
              </div>
              <span>Listoli LLC</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
