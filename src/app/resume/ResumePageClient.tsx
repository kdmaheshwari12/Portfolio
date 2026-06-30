"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Eye, FileText, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GlassCard } from "@/components/shared/GlassCard";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem, fadeInUp, defaultViewport } from "@/lib/animations";

const resumes = [
  {
    id: "resume",
    title: "Resume",
    description: "Kundan Kumar's Resume",
    icon: FileText,
    pdfPath: "/resume/resume.pdf",
    gradient: "from-primary to-accent",
  },
];

function handleDownload(pdfPath: string, filename: string) {
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function handlePreview(pdfPath: string) {
  window.open(pdfPath, "_blank", "noopener,noreferrer");
}

export default function ResumePageClient() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              Resume
            </span>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                My Resume
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Download or preview my resume.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2"
          >
            {resumes.map((resume) => (
              <motion.div key={resume.id} variants={staggerItem}>
                <GlassCard className="group relative h-full overflow-hidden">
                  <div
                    className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${resume.gradient} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`}
                  />

                  <div className="relative">
                    <div className="mb-6 flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${resume.gradient} shadow-glow`}
                      >
                        <resume.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">{resume.title}</h2>
                        <p className="text-sm text-muted-foreground">{resume.description}</p>
                      </div>
                    </div>

                    <div className="mb-8 flex aspect-[3/4] items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
                      <div className="text-center">
                        <FileText className="mx-auto mb-3 h-16 w-16 text-primary/40" />
                        <p className="text-sm text-muted-foreground">PDF Preview</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <MagneticButton
                        as="button"
                        onClick={() =>
                          handleDownload(
                            resume.pdfPath,
                            `${resume.id}-resume.pdf`
                          )
                        }
                      >
                        <Button variant="gradient" className="w-full sm:w-auto">
                          <Download className="h-4 w-4" />
                          Download PDF
                        </Button>
                      </MagneticButton>
                      <MagneticButton
                        as="button"
                        onClick={() => handlePreview(resume.pdfPath)}
                      >
                        <Button variant="outline" className="w-full sm:w-auto">
                          <Eye className="h-4 w-4" />
                          Preview PDF
                        </Button>
                      </MagneticButton>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
