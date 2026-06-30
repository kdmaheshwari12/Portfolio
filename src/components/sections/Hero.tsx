"use client";

import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  Mail,
  Briefcase,
  Phone,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { Typewriter } from "@/components/shared/Typewriter";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";
import profileImage from "@/../Profile/portfolio image.jpg";

const floatingTech = [
  { name: "React", x: "10%", y: "20%", delay: 0 },
  { name: "Next.js", x: "85%", y: "15%", delay: 0.5 },
  { name: "TS", x: "90%", y: "60%", delay: 1 },
  { name: "Node", x: "5%", y: "70%", delay: 1.5 },
  { name: "AI", x: "75%", y: "80%", delay: 2 },
  { name: "Python", x: "15%", y: "45%", delay: 2.5 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {floatingTech.map((tech) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: tech.delay + 0.5, duration: 0.5 }}
          className="absolute hidden md:block"
          style={{ left: tech.x, top: tech.y }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4 + tech.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium backdrop-blur-sm"
          >
            {tech.name}
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <motion.div variants={staggerItem}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="mb-2 text-lg text-muted-foreground md:text-xl"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            {profile.firstName}{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              {profile.lastName}
            </span>
          </motion.h1>

          <motion.div variants={staggerItem} className="mb-6 h-10 md:h-12">
            <span className="text-xl font-medium md:text-2xl lg:text-3xl">
              <Typewriter words={profile.titles} />
            </span>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {profile.tagline} I specialize in building intelligent, scalable
            applications with modern technologies — from AI-powered tools to
            pixel-perfect interfaces.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mb-8 flex flex-wrap gap-3"
          >
            <MagneticButton as="a" href="/resume/resume.pdf" download="Kundan_Kumar_Resume.pdf">
              <Button variant="gradient" size="lg">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </MagneticButton>
            <MagneticButton as="a" href="#projects">
              <Button variant="glass" size="lg">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div variants={staggerItem} className="flex flex-wrap gap-3">
            <MagneticButton as="a" href="#contact">
              <Button variant="default" size="default">
                <Briefcase className="h-4 w-4" />
                Hire Me
              </Button>
            </MagneticButton>
            <MagneticButton as="a" href="#contact">
              <Button variant="accent" size="default">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex items-center gap-4"
          >
            {socials.map((social) => (
              <MagneticButton key={social.name} as="a" href={social.href} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-white/10 hover:border-primary/30 hover:bg-primary/10"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex lg:items-center lg:justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full bg-gradient-brand opacity-20 blur-3xl"
            />
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 p-1 shadow-glow-lg backdrop-blur-xl">
              <div className="flex h-full flex-col items-center justify-center rounded-[22px] bg-background/80 p-8 backdrop-blur-xl">
                <div className="relative mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-brand shadow-glow">
                  <Image
                    src={profileImage}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold">{profile.name}</h3>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Full Stack · AI · QA Engineer
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["React", "Next.js", "AI", "Node.js", "QA"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {[GitHubIcon, LinkedInIcon, Mail, Phone].map((Icon, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
                className="absolute flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                style={{
                  top: `${15 + i * 20}%`,
                  right: i % 2 === 0 ? "-5%" : undefined,
                  left: i % 2 !== 0 ? "-5%" : undefined,
                }}
              >
                <Icon className="h-4 w-4 text-primary" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1"
        >
          <motion.div className="h-2 w-1 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
