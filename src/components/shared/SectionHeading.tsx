"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, defaultViewport } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        <span className="bg-gradient-brand bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
