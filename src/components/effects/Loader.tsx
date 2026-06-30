"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/95 backdrop-blur-2xl"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] animate-aurora rounded-full bg-secondary/20 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] animate-aurora rounded-full bg-primary/20 blur-[120px]" />
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col items-center gap-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="relative flex h-24 w-24 items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-20 blur-xl" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <span className="bg-gradient-brand bg-clip-text text-3xl font-bold text-transparent">
                KK
              </span>
            </div>
          </motion.div>

          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-semibold tracking-wide"
            >
              Kundan Kumar
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-1 text-sm text-muted-foreground"
            >
              Crafting digital excellence...
            </motion.p>
          </div>

          <div className="w-64">
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-brand"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              {Math.round(progress)}%
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
