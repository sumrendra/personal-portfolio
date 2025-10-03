"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import skillsData from "@/data/skills.json";
import experienceData from "@/data/experience.json";

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header with Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-between"
        >
          <div>
            <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Resume
            </h1>
            <p className="text-lg text-muted-foreground">
              Full-Stack Software Engineer
            </p>
          </div>
          <motion.a
            href="/resume/Resume_Sumrendra.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 rounded-lg border border-border bg-card p-6"
        >
          <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a href="mailto:sumrendra111@gmail.com" className="hover:text-primary">
                sumrendra111@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>(437) 808-1528</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Mississauga, Ontario, Canada</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Linkedin className="h-4 w-4 text-muted-foreground" />
              <a
                href="https://www.linkedin.com/in/sumrendra/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                linkedin.com/in/sumrendra
              </a>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="mb-4 text-2xl font-bold">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            Full-Stack Software Engineer with 7+ years of experience building enterprise-scale 
            applications. Expert in Java, Spring Boot, React, Next.js, and cloud technologies. 
            Proven track record of leading teams, migrating legacy systems to AWS, and delivering 
            high-impact solutions. Currently at Wayfair, working with GenAI, GraphQL, Kubernetes, 
            and Kafka to build microservices serving millions of users.
          </p>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-2xl font-bold">Work Experience</h2>
          <div className="space-y-8">
            {experienceData.experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="border-l-2 border-primary pl-6"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">{exp.location}</p>
                <ul className="mb-3 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-2xl font-bold">Technical Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillsData.categories.map((category) => (
              <div key={category.name} className="rounded-lg border border-border bg-card p-4">
                <h3 className="mb-3 font-semibold">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-2xl font-bold">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-lg font-bold">Backend and Blockchain Development</h3>
              <p className="text-primary font-medium">York University, Toronto, Canada</p>
              <p className="text-sm text-muted-foreground">January 2024 - September 2024</p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-lg font-bold">Bachelor of Technology - Computer Science</h3>
              <p className="text-primary font-medium">SRM University, Chennai, India</p>
              <p className="text-sm text-muted-foreground">May 2013 - April 2017</p>
            </div>
          </div>
        </motion.section>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="rounded-lg border border-border bg-muted/30 p-8 text-center"
        >
          <p className="mb-4 text-lg">Want a PDF copy of this resume?</p>
          <motion.a
            href="/resume/Resume_Sumrendra.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            Download PDF Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
