"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { EDUCATION } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="section-padding bg-card/30" aria-label="Education">
      <div className="section-container">
        <SectionHeading title="Education" />

        <div className="mx-auto max-w-3xl">
          <GlassCard className="relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-foreground"
                  >
                    {EDUCATION.institution}
                  </motion.h3>
                  <p className="mt-1 text-lg text-primary">{EDUCATION.degree}</p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} className="text-secondary" />
                      Tempe, Arizona
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} className="text-secondary" />
                      Expected Graduation: {EDUCATION.expectedGraduation}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.coursework.map((course, index) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="rounded-lg border border-white/10 bg-background/50 px-3 py-2 text-sm transition-colors hover:border-primary/30 hover:text-primary"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="mx-auto mt-8 flex justify-center">
            <div className="h-16 w-0.5 bg-gradient-to-b from-primary to-secondary opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
