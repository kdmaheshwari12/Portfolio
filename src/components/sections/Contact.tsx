"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactInfo = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key"
      );
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="space-y-4 lg:col-span-2"
          >
            {contactInfo.map((info) => (
              <motion.div key={info.label} variants={staggerItem}>
                <GlassCard hover={false} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium hover:text-primary">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{info.value}</p>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            <motion.div variants={staggerItem} className="flex gap-3 pt-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-primary/30 hover:bg-primary/10"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <GlassCard hover={false}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="mt-1.5"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="mt-1.5"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project inquiry"
                    className="mt-1.5"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="mt-1.5"
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 10, message: "Message must be at least 10 characters" },
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto"
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-green-400"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-red-400"
                  >
                    <AlertCircle className="h-4 w-4" />
                    Failed to send message. Please try again or email directly.
                  </motion.p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
