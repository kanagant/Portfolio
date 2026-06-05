export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  demoPlaceholder?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "resume";
}

export interface Education {
  institution: string;
  degree: string;
  expectedGraduation: string;
  coursework: string[];
}
