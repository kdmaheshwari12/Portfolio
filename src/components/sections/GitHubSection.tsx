"use client";

import { motion } from "framer-motion";
import { Star, GitFork, Users } from "lucide-react";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

const stats = [
  { label: "Public Repos", value: "25+", icon: GitHubIcon },
  { label: "Total Stars", value: "150+", icon: Star },
  { label: "Contributions", value: "500+", icon: GitFork },
  { label: "Followers", value: "100+", icon: Users },
];

const topLanguages = [
  { name: "TypeScript", percentage: 35, color: "#3178C6" },
  { name: "JavaScript", percentage: 25, color: "#F7DF1E" },
  { name: "Python", percentage: 20, color: "#3776AB" },
  { name: "Java", percentage: 12, color: "#ED8B00" },
  { name: "Other", percentage: 8, color: "#8B5CF6" },
];

export function GitHubSection() {
  const pinnedProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="github" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="GitHub"
          title="Open Source Activity"
          subtitle={`@${profile.githubUsername} — building in public and contributing to the community`}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <GlassCard className="text-center">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerItem}
          >
            <GlassCard hover={false}>
              <h3 className="mb-4 font-semibold">Contribution Activity</h3>
              <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1">
                {Array.from({ length: 182 }).map((_, i) => {
                  const intensity = ((i * 7 + 13) % 100) / 100;
                  return (
                    <div
                      key={i}
                      className="aspect-square rounded-sm"
                      style={{
                        backgroundColor:
                          intensity > 0.7
                            ? "rgba(99, 102, 241, 0.9)"
                            : intensity > 0.4
                              ? "rgba(99, 102, 241, 0.5)"
                              : intensity > 0.2
                                ? "rgba(99, 102, 241, 0.2)"
                                : "rgba(255, 255, 255, 0.05)",
                      }}
                    />
                  );
                })}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Contributions in the last year
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerItem}
          >
            <GlassCard hover={false}>
              <h3 className="mb-4 font-semibold">Top Languages</h3>
              <div className="space-y-3">
                {topLanguages.map((lang) => (
                  <div key={lang.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{lang.name}</span>
                      <span className="text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mt-10"
        >
          <h3 className="mb-6 text-center text-lg font-semibold">Pinned Projects</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {pinnedProjects.map((project) => (
              <motion.div key={project.id} variants={staggerItem}>
                <GlassCard>
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-primary">{project.title}</h4>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <GitHubIcon className="h-5 w-5 shrink-0 text-muted-foreground" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Button variant="gradient" size="lg" asChild>
            <a
              href={`https://github.com/${profile.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="h-5 w-5" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
