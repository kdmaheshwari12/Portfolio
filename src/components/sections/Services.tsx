"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Services"
          title="What I Offer"
          subtitle="End-to-end development services from concept to deployment"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={staggerItem}>
              <GlassCard className="group h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow"
                >
                  <service.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs transition-colors group-hover:border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
