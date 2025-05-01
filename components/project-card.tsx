"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

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
}

const ProjectCard = ({ 
  title, 
  subtitle, 
  description, 
  tags, 
  image, 
  status, 
  cta = "Read more", 
  link = "#",
  index 
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group bg-card/50 backdrop-blur-sm border-card/20 hover:border-card/40 transition-colors">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {status && (
            <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              {status}
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs font-normal bg-secondary/50">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          {subtitle && (
            <p className="text-sm font-medium mb-2 italic">{subtitle}</p>
          )}
          
          <p className="text-sm text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: description }}></p>
          
          <Link href={link} className="text-sm font-medium inline-flex items-center text-primary">
            {cta} <span className="ml-1">→</span>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;