"use client";

import { motion } from "framer-motion";
import { Crown, Rocket, Calendar, GitBranch, Award } from "lucide-react";
import { leadershipRoles } from "@/data/leadership";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Crown, Rocket, Calendar, GitBranch,
};

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Leadership"
          title="Leading & Inspiring"
          subtitle="Driving community growth and technical excellence through leadership"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {leadershipRoles.map((role, index) => {
            const Icon = iconMap[role.icon] || Award;
            return (
              <motion.div key={role.id} variants={staggerItem}>
                <GlassCard className="relative h-full overflow-hidden">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
                  <div className="relative flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand shadow-glow"
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-xs font-medium text-accent">{role.period}</span>
                      </div>
                      <h3 className="text-lg font-semibold">{role.title}</h3>
                      <p className="text-sm text-primary">{role.organization}</p>
                      <ul className="mt-4 space-y-2">
                        {role.achievements.map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < leadershipRoles.length - 1 && (
                    <div className="absolute -bottom-3 left-1/2 hidden h-6 w-px -translate-x-1/2 bg-gradient-to-b from-primary to-transparent md:block" />
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
