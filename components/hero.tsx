"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const scaleIn = {
    initial: prefersReducedMotion ? { opacity: 1 } : { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="relative  py-20 md:py-32 text-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <motion.div {...fadeInUp} className="max-w-4xl mx-auto px-4">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            {...scaleIn}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -top-8 -left-8 text-6xl"
          >
            👋
          </motion.div>
          <h2
            className="text-lg md:text-xl font-medium mb-3 relative group"
            onMouseEnter={() => !prefersReducedMotion && setIsHovered(true)}
            onMouseLeave={() => !prefersReducedMotion && setIsHovered(false)}
          >
            Hi! I&apos;m{" "}
            <motion.span
              className="italic text-blue-600 inline-block"
              animate={
                !prefersReducedMotion && isHovered
                  ? { rotate: [0, -10, 10, -10, 0] }
                  : {}
              }
              transition={{ duration: 0.5 }}
            >
              Ghulam Abbas Ataie
            </motion.span>
            {!prefersReducedMotion && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isHovered
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.3 }}
                className="absolute -right-8 top-0 text-2xl"
              >
                🚀
              </motion.span>
            )}
          </h2>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg mb-10 relative"
          >
            <span className="inline-block">
              Senior Software Developer & Technical Lead
            </span>{" "}
            {!prefersReducedMotion && (
              <motion.span
                className="inline-flex items-center"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                based in Tehran
              </motion.span>
            )}
            {!prefersReducedMotion && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-4 top-0 flex flex-col items-center"
              >
                <motion.img
                  src="/abbas.jpg"
                  alt="Ghulam Abbas Ataie"
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="text-2xl -mt-3 relative z-0">💻</span>
              </motion.div>
            )}
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Building scalable{" "}
            <span className="inline-flex items-center">
              <svg
                className="w-7 h-7 md:w-9 md:h-9 mx-2"
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
                className="w-7 h-7 md:w-9 md:h-9 mx-2"
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
          </motion.h1>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative text-3xl md:text-4xl lg:text-5xl font-bold leading-tight inline-block"
          >
            <span
              className={cn(
                "relative z-10",
                "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700"
              )}
            >
              Full-Stack Developer & Cloud Architect
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30 rounded-full"></div>
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
          >
            Let&apos;s work together
            {!prefersReducedMotion && (
              <motion.svg
                className="ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
            )}
          </Link>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-muted-foreground">
            <motion.div
              className="flex items-center gap-2 group"
              whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-sm">Currently @</span>
              <div className="flex items-center gap-2">
                {!prefersReducedMotion && (
                  <motion.div
                    className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg
                      width="16"
                      height="16"
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
                  </motion.div>
                )}
                <Link
                  href="https://tarasolutions.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium group-hover:text-blue-600 transition-colors"
                >
                  Tara Solutions
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-sm">Previously @</span>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="50" fill="#444" />
                    <path d="M35 65H65V35H35V65Z" fill="white" />
                  </svg>
                </motion.div>
                <Link
                  href="https://listoli.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium group-hover:text-blue-600 transition-colors"
                >
                  Listoli LLC
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
