"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -left-[20%] -top-[20%] h-[60%] w-[60%] rounded-full bg-secondary/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -right-[20%] h-[60%] w-[60%] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute left-[30%] top-[40%] h-[40%] w-[40%] rounded-full bg-accent/15 blur-[100px]"
      />
    </div>
  );
}
