"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, X, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import { projects, projectCategories, type Project, type ProjectCategory } from "@/data/projects";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import Image from "next/image";

function ImageGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5">
        {images[currentIndex] ? (
          <Image
            src={images[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">No Image</div>
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground hover:bg-background/90 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground hover:bg-background/90 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-all",
                idx === currentIndex ? "border-primary scale-95" : "border-white/10 opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  onReadMore,
}: {
  project: Project;
  onReadMore: (project: Project) => void;
}) {
  return (
    <motion.div variants={staggerItem}>
      <TiltCard>
        <div className="group overflow-hidden rounded-2xl border border-white/10 bg-card backdrop-blur-xl transition-all duration-300 hover:border-primary/20 hover:shadow-glow">
          <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/20">{project.title.charAt(0)}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 right-4 flex translate-y-4 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-10">
              {project.id === "book-bank" || project.id === "student-management" ? (
                <Button variant="glass" size="sm" className="opacity-50 cursor-not-allowed pointer-events-none" disabled>
                  <GitHubIcon className="h-4 w-4" />
                  No Repo
                </Button>
              ) : (
                project.github && (
                  <Button variant="glass" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GitHubIcon className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )
              )}
              <Button variant="glass" size="sm" className="opacity-50 cursor-not-allowed pointer-events-none" disabled>
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
            <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
              {project.description}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onReadMore(project)}
              className="group/btn px-0 hover:bg-transparent"
            >
              Read More
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-card p-6 shadow-glow-lg md:p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 hover:bg-white/5 z-20"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="mb-2 text-2xl font-bold">{project.title}</h2>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-lg bg-primary/10 px-3 py-1 text-xs text-primary">
              {tech}
            </span>
          ))}
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-6">
            <ImageGallery images={project.gallery} />
          </div>
        )}

        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold text-accent">Overview</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.overview}</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-accent">Features</h3>
            <ul className="space-y-1">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-accent">Challenges</h3>
              <ul className="space-y-1">
                {project.challenges.map((c) => (
                  <li key={c} className="text-sm text-muted-foreground">• {c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-accent">Solutions</h3>
              <ul className="space-y-1">
                {project.solutions.map((s) => (
                  <li key={s} className="text-sm text-muted-foreground">• {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.id === "book-bank" || project.id === "student-management" ? (
            <Button variant="default" className="opacity-50 cursor-not-allowed pointer-events-none" disabled>
              <GitHubIcon className="h-4 w-4" /> No Repo
            </Button>
          ) : (
            project.github && (
              <Button variant="default" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="h-4 w-4" /> GitHub
                </a>
              </Button>
            )
          )}
          <Button variant="outline" className="opacity-50 cursor-not-allowed pointer-events-none" disabled>
            <ExternalLink className="h-4 w-4" /> Live Demo
          </Button>
          {project.pdf && (
            <Button variant="secondary" asChild>
              <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" /> View Documentation
              </a>
            </Button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          badge="Projects"
          title="Featured Work"
          subtitle="Production-grade applications spanning AI, full-stack, and frontend development"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                filter === cat
                  ? "bg-primary text-white shadow-glow"
                  : "border border-white/10 bg-white/5 text-muted-foreground hover:border-primary/30 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={filter}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onReadMore={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
