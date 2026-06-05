"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="border-b border-white/5 bg-background/80 backdrop-blur-xl"
        aria-label="Main navigation"
      >
        <div className="section-container flex h-16 items-center justify-between">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight transition-colors hover:text-primary"
            aria-label="Krutika Anaganti - Home"
          >
            <span className="gradient-text">KA</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-primary" : "text-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 -z-10 rounded-lg bg-primary/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-foreground md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/5 bg-background/95 backdrop-blur-xl md:hidden"
            >
              <ul className="section-container flex flex-col gap-1 py-4">
                {NAV_ITEMS.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={handleNavClick}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted hover:bg-white/5 hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
