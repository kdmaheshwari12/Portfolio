"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/data/certificates";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Certifications"
          title="Credentials & Achievements"
          subtitle="Industry-recognized certifications validating technical expertise"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {certificates.map((cert) => (
            <motion.div key={cert.id} variants={staggerItem}>
              <TiltCard>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:shadow-glow">
                  <div className="absolute inset-0 bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
                  >
                    <Award className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="mb-1 text-sm font-semibold leading-snug">{cert.title}</h3>
                  <p className="text-xs text-primary">{cert.issuer}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{cert.date}</p>
                  {cert.credentialId && (
                    <p className="mt-1 font-mono text-[10px] text-muted-foreground/60">
                      ID: {cert.credentialId}
                    </p>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs text-accent hover:underline"
                    >
                      Verify <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  <div className="absolute -bottom-px left-0 h-0.5 w-0 bg-gradient-brand transition-all duration-500 group-hover:w-full" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
