"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import projectsData from "@/data/projects.json";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projectsData.projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/projects" className="text-primary hover:underline mt-4 inline-block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <Link href="/projects">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -4 }}
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </motion.button>
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-secondary/10 text-secondary px-3 py-1 text-sm font-medium">
              {project.category}
            </span>
          </div>
          
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" />
              View Code
            </motion.button>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 rounded-lg overflow-hidden border border-border"
        >
          <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
            <span className="text-9xl font-bold text-muted-foreground/20">
              {project.title.charAt(0)}
            </span>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-2xl font-bold">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-2xl font-bold">Key Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <span className="flex-shrink-0 mt-1 text-primary">✓</span>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Navigation to other projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-border pt-12"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
