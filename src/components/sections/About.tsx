"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Counter } from "@/components/shared/Counter";
import { GlassCard } from "@/components/shared/GlassCard";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Crafting Digital Excellence"
          subtitle="Passionate developer bridging design, engineering, and quality assurance"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.bio}
            </p>

            <GlassCard hover={false}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Career Objective</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {profile.careerObjective}
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard hover={false}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{profile.education.degree}</h3>
                  <p className="text-sm text-primary">{profile.education.institution}</p>
                  <p className="text-xs text-muted-foreground">{profile.education.period}</p>
                  <ul className="mt-3 space-y-1">
                    {profile.education.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground">
                        • {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="space-y-6"
          >
            <GlassCard hover={false}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                  <Sparkles className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="mb-3 font-semibold">Personal Highlights</h3>
                  <ul className="space-y-2">
                    {profile.highlights.map((h) => (
                      <motion.li
                        key={h}
                        variants={staggerItem}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3"
            >
              {profile.stats.map((stat) => (
                <motion.div key={stat.label} variants={staggerItem}>
                  <GlassCard className="text-center">
                    <div className="text-3xl font-bold bg-gradient-brand bg-clip-text text-transparent">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
