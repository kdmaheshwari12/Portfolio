"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-glass backdrop-blur-xl",
        hover && "transition-shadow duration-300 hover:border-primary/20 hover:shadow-glow",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
