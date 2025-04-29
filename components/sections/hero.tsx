"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Hi, I&apos;m Abbas Ataie
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl font-medium text-muted-foreground sm:text-2xl"
              >
                Senior Software Engineer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-[700px] text-muted-foreground md:text-xl"
              >
                Specializing in DevOps, AI, and full-stack development. With expertise in
                cloud-native technologies, I build scalable, resilient systems that drive
                business value.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link href="/contact">
                  <Send className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resume">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-full border-4 border-primary/20 bg-muted">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="font-medium">Photo Placeholder</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}