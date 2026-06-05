"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NeuralNetworkVisual } from "@/components/ui/NeuralNetworkVisual";
import { SITE_CONFIG } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-16"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

      <div className="section-container relative flex min-h-[calc(100vh-4rem)] flex-col items-center gap-12 py-16 lg:flex-row lg:gap-8 lg:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 text-center lg:text-left"
        >
          <motion.p variants={item} className="mb-4 font-mono text-sm text-primary">
            Computer Science Senior @ Arizona State University
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">KRUTIKA</span>
            <span className="gradient-text">ANAGANTI</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg font-medium text-muted sm:text-xl"
          >
            Machine Learning • AI Engineering • Full-Stack Development
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted lg:mx-0"
          >
            Building intelligent systems at the intersection of machine learning, AI
            automation, and scalable full-stack software.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href={SITE_CONFIG.resumeML} variant="secondary" external ariaLabel="Download ML resume">
              <Download size={18} />
              Download Resume
            </Button>
            <Button href={SITE_CONFIG.github} variant="outline" external ariaLabel="GitHub profile">
              <Github size={18} />
              GitHub
            </Button>
            <Button href={SITE_CONFIG.linkedin} variant="outline" external ariaLabel="LinkedIn profile">
              <Linkedin size={18} />
              LinkedIn
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex-1"
        >
          <div className="glass-card overflow-hidden p-4">
            <NeuralNetworkVisual />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
