"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "7+ Years Experience",
    description: "Building enterprise-scale applications"
  },
  {
    icon: Rocket,
    title: "Modern Stack",
    description: "React, Next.js, TypeScript, Cloud"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Led teams of 12+ developers"
  }
];

export function About() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building scalable, performant applications that solve real-world problems
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm <span className="font-semibold text-foreground">Sumrendra Singh</span>, a Full-Stack Software Engineer with{" "}
                <span className="font-semibold text-foreground">7+ years</span> of experience building web applications that scale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently at <span className="font-semibold text-foreground">Wayfair</span>, I work with cutting-edge technologies like{" "}
                <span className="font-semibold text-foreground">Kotlin, GraphQL, Kubernetes, and GenAI</span> to build microservices that serve millions of users.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans the entire stack - from React frontends to Spring Boot backends, cloud infrastructure on AWS, and everything in between.
              </p>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 mt-6"
                >
                  Learn More About Me
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
