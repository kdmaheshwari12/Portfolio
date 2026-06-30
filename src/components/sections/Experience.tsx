"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { fadeInUp, defaultViewport } from "@/lib/animations";

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Internship: Briefcase,
  "Teaching Assistant": GraduationCap,
};

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Experience"
          title="Professional Journey"
          subtitle="Building expertise through internships, teaching, and hands-on development"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-secondary md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const Icon = typeIcons[exp.type] || Briefcase;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={fadeInUp}
                className={`relative mb-12 flex items-start gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden w-1/2 md:block" />

                <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-glow md:left-1/2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <div className="ml-16 w-full md:ml-0 md:w-1/2">
                  <GlassCard>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                        {exp.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm text-primary">{exp.company}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
