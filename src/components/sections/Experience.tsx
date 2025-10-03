"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import experienceData from "@/data/experience.json";

export function Experience() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey across leading tech companies
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experienceData.experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-6 h-4 w-4 rounded-full border-4 border-background bg-primary md:left-1/2 md:-translate-x-1/2" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="ml-16 md:ml-0">
                      <div className="rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                          <p className="text-primary font-medium">{exp.position}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                            <span>•</span>
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                        {/* Achievements */}
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.slice(0, 3).map((achievement, i) => (
                            <li key={i} className="text-sm flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for timeline alignment */}
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
