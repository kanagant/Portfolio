"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-padding" aria-label="Featured projects">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="AI, machine learning, full-stack, and intelligent systems engineering"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass-card flex flex-col overflow-hidden p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-20" />

              <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-4 flex-1 space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-background/80 px-2.5 py-1 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="secondary"
                    external
                    className="text-xs"
                    ariaLabel={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} />
                    GitHub
                  </Button>
                )}
                {project.demoUrl && (
                  <Button
                    href={project.demoUrl}
                    variant="outline"
                    external
                    className="text-xs"
                    ariaLabel={`View ${project.title} demo`}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                )}
                {project.demoPlaceholder && !project.demoUrl && (
                  <span
                    className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-xs font-medium text-muted opacity-60"
                    aria-label={`${project.title} demo coming soon`}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
