"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Loader } from "@/components/effects/Loader";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Leadership } from "@/components/sections/Leadership";
import { Certifications } from "@/components/sections/Certifications";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <SmoothScroll>
          <CursorGlow />
          <AuroraBackground />
          <ParticleBackground />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Leadership />
            <Certifications />
            <GitHubSection />
            <Services />
            <Contact />
          </main>
          <Footer />
        </SmoothScroll>
      )}
    </>
  );
}
