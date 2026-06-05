"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SITE_CONFIG } from "@/data/portfolio";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning & AI",
    description: "Deep learning, NLP, and intelligent automation systems",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Java Spring Boot, React, and REST API architecture",
  },
  {
    icon: Layers,
    title: "Intelligent Systems",
    description: "End-to-end pipelines from data to deployed applications",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding" aria-label="About me">
      <div className="section-container">
        <SectionHeading title="About Me" />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <GlassCard className="space-y-5 text-base leading-relaxed text-muted">
              <p>{SITE_CONFIG.headline}</p>
              <p>
                My work spans predictive machine learning pipelines, AI automation
                agents, custom deep learning architectures, full-stack web applications,
                and intelligent planning systems — combining strong engineering
                fundamentals with practical, real-world impact.
              </p>
              <p>
                I enjoy tackling complex problems across the stack, from model
                development and NLP pipelines to backend APIs and responsive frontends,
                and I&apos;m always looking to build systems that are both technically
                rigorous and user-focused.
              </p>
            </GlassCard>
          </motion.div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            {highlights.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.1} className="group">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-3 transition-transform group-hover:scale-110">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
