"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  download?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  onClick,
  as = "button",
  href,
  target,
  rel,
  download,
  type = "button",
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * strength;
    const y = (clientY - top - height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Component
        className={cn(className)}
        onClick={onClick}
        href={href}
        target={target}
        rel={rel}
        download={download}
        type={as === "button" ? type : undefined}
        disabled={disabled}
      >
        {children}
      </Component>
    </motion.div>
  );
}
