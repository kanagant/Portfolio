import type { Education, NavItem, Project, SkillCategory, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Krutika Anaganti",
  title: "Krutika Anaganti | CS Portfolio",
  description:
    "Computer Science senior at Arizona State University interested in Machine Learning, AI Engineering, Full-Stack Development, and Intelligent Systems.",
  url: "https://portfolio.vercel.app",
  email: "krutika1126@gmail.com",
  github: "https://github.com/kanagant",
  linkedin: "https://www.linkedin.com/in/krutika-anaganti-961102335/",
  resumeML:
    "https://drive.google.com/file/d/1pDWW2z4D4y2tI37R-hZPQWhSiZT4vFif/view?usp=sharing",
  resumeBackend:
    "https://drive.google.com/file/d/1Vzs9RFBYYqMV-5h8qPaXF6BA9TPNP_CV/view?usp=sharing",
  headline:
    "Computer Science Senior at Arizona State University interested in Machine Learning, AI Engineering, Full-Stack Development, and Intelligent Systems.",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Python", "Java", "C", "C++", "C#", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Machine Learning & AI",
    icon: "brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing (NLP)",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Predictive Modeling",
      "Data Analysis",
    ],
  },
  {
    title: "AI Tools & Platforms",
    icon: "bot",
    skills: [
      "OpenAI API",
      "LangChain",
      "AI Agents",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "AI Automation",
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React", "Next.js", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Java Spring Boot", "ASP.NET", "REST APIs", "Node.js"],
  },
  {
    title: "Developer Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "Linux", "Jupyter Notebook", "VS Code"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "healthcare-xgboost",
    title: "Healthcare Risk Prediction Using XGBoost",
    description:
      "Built an end-to-end machine learning pipeline to predict 48-hour CRRT risk in burn patients using synthetic clinical data.",
    highlights: [
      "XGBoost model development",
      "Patient-level train/validation/test split",
      "Data leakage prevention",
      "ROC-AUC and PR-AUC evaluation",
      "Reproducible experimentation",
    ],
    technologies: ["Python", "XGBoost", "Scikit-learn"],
    githubUrl: "https://github.com/kanagant",
  },
  {
    id: "ai-automation-agent",
    title: "AI Automation Agent",
    description:
      "Built an AI-powered automation agent capable of performing multi-step workflows using LLMs, prompt engineering, and tool integrations.",
    highlights: [
      "AI agent architecture",
      "Prompt engineering",
      "Workflow automation",
      "API integrations",
      "Intelligent task execution",
    ],
    technologies: ["Python", "OpenAI API", "LangChain", "AI Automation"],
    githubUrl: "https://github.com/kanagant/ai-workflow-agent",
    demoPlaceholder: true,
  },
  {
    id: "lstm-pytorch",
    title: "Custom LSTM From Scratch in PyTorch",
    description:
      "Implemented an LSTM architecture entirely from scratch without using built-in recurrent modules.",
    highlights: [
      "Manual gate implementation",
      "Forget gate, input gate, output gate",
      "Synthetic dataset generation",
      "Gate interpretability analysis",
      "Achieved 90%+ test accuracy",
    ],
    technologies: ["Python", "PyTorch", "Deep Learning"],
    githubUrl: "https://github.com/kanagant",
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack Application",
    description:
      "Developed a full-stack web application with a Java backend and modern frontend architecture.",
    highlights: [
      "Full-stack development",
      "REST API design",
      "Database integration",
      "Authentication and authorization",
      "Responsive user interface",
    ],
    technologies: ["Java", "Spring Boot", "SQL", "React"],
    githubUrl: "https://github.com/kanagant",
    demoPlaceholder: true,
  },
  {
    id: "ner-nlp",
    title: "Named Entity Recognition Using Language Modeling",
    description:
      "Developed a trigram language model with add-k smoothing and integrated it into a Named Entity Recognition pipeline.",
    highlights: [
      "Trigram language modeling",
      "Logistic regression classifier",
      "Feature engineering",
      "Hyperparameter tuning",
      "NLP pipeline development",
    ],
    technologies: ["Python", "NLP", "Scikit-learn"],
    githubUrl: "https://github.com/kanagant",
  },
  {
    id: "sat-planning",
    title: "SAT-Based AI Planning System",
    description:
      "Implemented intelligent planning algorithms using propositional logic and SAT solving techniques.",
    highlights: [
      "CNF constraints",
      "Successor axioms",
      "Knowledge base construction",
      "Logical reasoning",
      "Path planning",
    ],
    technologies: ["Python", "Artificial Intelligence"],
    githubUrl: "https://github.com/kanagant/cse476-reasoning-agent-",
  },
  {
    id: "restaurant-app",
    title: "Restaurant Reservation Web Application",
    description:
      "Developed a responsive restaurant booking platform with modern frontend architecture.",
    highlights: [
      "Responsive design",
      "Reservation workflow",
      "Form validation",
      "API integration",
      "User-friendly UI",
    ],
    technologies: ["React", "JavaScript"],
    githubUrl: "https://github.com/kanagant/labseat",
  },
];

export const EDUCATION: Education = {
  institution: "Arizona State University",
  degree: "Bachelor of Science in Computer Science",
  expectedGraduation: "Dec 2026",
  coursework: [
    "Machine Learning",
    "Artificial Intelligence",
    "Natural Language Processing",
    "Data Structures and Algorithms",
    "Database Systems",
    "Software Engineering",
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Email", href: `mailto:${SITE_CONFIG.email}`, icon: "mail" },
  { label: "LinkedIn", href: SITE_CONFIG.linkedin, icon: "linkedin" },
  { label: "GitHub", href: SITE_CONFIG.github, icon: "github" },
];
