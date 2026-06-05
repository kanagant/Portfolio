"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/data/portfolio";

const iconComponents = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  resume: Mail,
};

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-card/30" aria-label="Contact">
      <div className="section-container">
        <SectionHeading title="Let's Connect" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-muted sm:text-lg"
        >
          I&apos;m actively seeking opportunities in Machine Learning Engineering, AI
          Engineering, Full-Stack Development, and Software Engineering. Feel free to
          reach out regarding internships, collaborations, or networking opportunities.
        </motion.p>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {SOCIAL_LINKS.map((link, index) => {
            const Icon = iconComponents[link.icon];
            const displayValue =
              link.icon === "mail" ? SITE_CONFIG.email : link.label;

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.icon !== "mail" ? "_blank" : undefined}
                rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group"
              >
                <GlassCard className="flex h-full flex-col items-center text-center transition-all group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <div className="mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-4 transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{link.label}</h3>
                  <p className="mt-2 break-all text-sm text-muted group-hover:text-primary">
                    {displayValue}
                  </p>
                </GlassCard>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href={SITE_CONFIG.resumeML}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            ML Resume
          </a>
          <a
            href={SITE_CONFIG.resumeBackend}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-secondary/50 hover:text-secondary"
          >
            Backend Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
