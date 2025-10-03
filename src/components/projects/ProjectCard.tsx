"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  category: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-lg border border-border bg-card overflow-hidden transition-all hover:shadow-xl"
    >
      <Link href={`/projects/${project.id}`}>
        {/* Project Image Placeholder */}
        <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
          <span className="text-6xl font-bold text-muted-foreground/20">
            {project.title.charAt(0)}
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </div>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block rounded-full bg-secondary/10 text-secondary px-3 py-1 text-xs font-medium">
              {project.category}
            </span>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-full bg-muted px-2 py-1 text-xs font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* View Details Link */}
          <div className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            View Details
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
