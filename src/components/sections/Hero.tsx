"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading with Parallax */}
          <motion.div style={{ x, y }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Sumrendra Singh
              </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-xl text-muted-foreground sm:text-2xl md:text-3xl"
          >
            Full-Stack Software Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            Building scalable, performant web applications with{" "}
            <span className="font-semibold text-foreground">7+ years</span> of experience
            in React, Next.js, TypeScript, and cloud technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </motion.button>
            </Link>

            <Link href="/resume">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </motion.button>
            </Link>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {["React", "Next.js", "TypeScript", "Node.js", "AWS", "GraphQL"].map(
              (tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </section>
  );
}
