"use client";

import { motion } from "framer-motion";
import {
  Layout, Server, Brain, Database, Code2, TestTube2,
  Cloud, Wrench, Users,
} from "lucide-react";
import { skillCategories, marqueeSkills } from "@/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { Progress } from "@/components/ui/progress";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout, Server, Brain, Database, Code2, TestTube2, Cloud, Wrench, Users,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Skills"
          title="Technical Expertise"
          subtitle="A comprehensive toolkit spanning full-stack development, AI, and quality assurance"
        />

        <div className="mb-12 overflow-hidden">
          <div className="flex animate-marquee gap-4 whitespace-nowrap">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div key={category.id} variants={staggerItem}>
                <GlassCard className="h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="text-muted-foreground">{skill.name}</span>
                          <span className="text-xs text-primary">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} />
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
