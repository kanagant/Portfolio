"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Code,
  Database,
  Layout,
  Server,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SKILL_CATEGORIES } from "@/data/portfolio";

const iconMap = {
  code: Code,
  database: Database,
  brain: Brain,
  bot: Bot,
  layout: Layout,
  server: Server,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-card/30" aria-label="Skills">
      <div className="section-container">
        <SectionHeading
          title="Skills"
          subtitle="A balanced toolkit across AI, software engineering, and full-stack development"
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {SKILL_CATEGORIES.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Code;

            return (
              <GlassCard key={category.title} delay={categoryIndex * 0.08}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-2.5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.04 + skillIndex * 0.02 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="cursor-default rounded-lg border border-white/10 bg-background/50 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
