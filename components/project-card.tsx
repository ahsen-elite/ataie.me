"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  image: string;
  status?: string;
  cta?: string;
  link?: string;
  index: number;
  isHovered?: boolean;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  tags,
  image,
  status,
  cta = "View Project",
  link = "#",
  index,
  isHovered = false,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative"
    >
      <Card className="overflow-hidden group bg-card/50 backdrop-blur-sm border-card/20 hover:border-card/40 transition-all duration-300">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {status && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className={cn(
                "absolute top-3 right-3 text-xs px-3 py-1 rounded-full backdrop-blur-sm",
                status === "Live" && "bg-green-500/90 text-white",
                status === "In Progress" && "bg-yellow-500/90 text-white",
                status === "Completed" && "bg-blue-500/90 text-white"
              )}
            >
              {status}
            </motion.div>
          )}

          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div className="relative z-10 flex gap-3">
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 hover:bg-white text-black px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                {cta}
              </Link>
              <motion.button
                className="bg-white/90 hover:bg-white text-black p-2 rounded-md transition-all duration-300 hover:scale-105"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Github className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Badge
                  variant="secondary"
                  className="text-xs font-normal bg-secondary/50 hover:bg-secondary/70 transition-colors"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>

          <motion.h3
            className="text-xl font-semibold mb-1 group-hover:text-blue-500 transition-colors"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h3>

          {subtitle && (
            <p className="text-sm font-medium mb-2 italic text-muted-foreground">
              {subtitle}
            </p>
          )}

          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {description}
          </p>

          <motion.div
            className="flex items-center gap-2 text-sm text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ x: 5 }}
          >
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/20 rounded-lg transition-colors duration-300"
          initial={false}
          animate={{
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
