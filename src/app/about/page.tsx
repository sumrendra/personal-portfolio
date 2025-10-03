"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Users, Award, Heart, Zap } from "lucide-react";
import skillsData from "@/data/skills.json";
import experienceData from "@/data/experience.json";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that others can understand and build upon"
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Always exploring new technologies and finding better ways to solve problems"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Strong believer in teamwork and knowledge sharing for collective growth"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering high-quality solutions that exceed expectations"
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            Get to know me better - my journey, values, and what drives me
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-3xl font-bold">My Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi! I'm <span className="font-semibold text-foreground">Sumrendra Singh</span>, 
              a passionate Full-Stack Software Engineer with 8 years of experience building 
              scalable web applications that make a difference.
            </p>
            <p>
              My journey in tech started with a Bachelor's degree in Computer Science from 
              <span className="font-semibold text-foreground"> SRM University</span>, and since 
              then, I've had the privilege of working with some amazing companies including 
              <span className="font-semibold text-foreground"> Wayfair, Newgen Software, Wipro, Nucleus Software, and A S Software Services</span>.
            </p>
            <p>
              Currently at <span className="font-semibold text-foreground">Wayfair</span>, I'm 
              working on cutting-edge projects involving GenAI, GraphQL, Kubernetes, and Kafka. 
              One of my proudest achievements is building a GenAI-powered API onboarding platform 
              that reduced integration time by 80%, from a week to just 1-2 days.
            </p>
            <p>
              I've led teams of up to 12 developers, managed multi-country deployments across 5 
              African nations, and successfully migrated critical systems to AWS cloud. Throughout 
              my career, I've consistently focused on delivering high-quality solutions that not 
              only meet technical requirements but also drive real business value.
            </p>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-3xl font-bold">What I Value</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-3xl font-bold">Technical Expertise</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Over the years, I've built expertise across the full stack, from frontend to backend, 
            cloud infrastructure, and everything in between.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {skillsData.categories.slice(0, 4).map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="mb-4 font-semibold text-lg">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fun Facts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16 rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8"
        >
          <h2 className="mb-6 text-3xl font-bold">By The Numbers</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">12+</div>
              <div className="text-sm text-muted-foreground">Team Members Led</div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <p className="mb-6 text-lg text-muted-foreground">
            Want to work together or just chat about tech?
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="/resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent"
            >
              View Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
