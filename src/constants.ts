import { Project, Skill } from "./types";

export const DEV_NAME = "Ibrahim Barry";
export const DEV_ROLE = "Full Stack Developer | React · TypeScript · Node.js · FastAPI";
export const DEV_LOCATION = "Conakry, Guinée";
export const DEV_EMAIL = "ib362392@gmail.com";
export const DEV_PHONE = "+224 623 93 63 13";

export const SOCIAL_LINKS = {
  github: "https://github.com/kushtati",
  email: "mailto:ib362392@gmail.com"
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 82, category: "Frontend" },
  { name: "HTML5 / CSS3", level: 90, category: "Frontend" },

  // Backend
  { name: "Node.js / Express", level: 75, category: "Backend" },
  { name: "FastAPI (Python)", level: 72, category: "Backend" },
  { name: "REST API", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "Prisma ORM", level: 70, category: "Backend" },

  // DevOps & Outils
  { name: "Docker", level: 70, category: "Outils" },
  { name: "Git / GitHub", level: 90, category: "Outils" },
  { name: "Figma", level: 75, category: "Outils" },
  { name: "Linux / Unix", level: 65, category: "Outils" },

  // IA
  { name: "Google Gemini API", level: 70, category: "Intelligence Artificielle" },
  { name: "OpenCV", level: 60, category: "Intelligence Artificielle" },
  { name: "Tesseract OCR", level: 65, category: "Intelligence Artificielle" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "eTrans – Transit Management ERP",
    description:
      "Complete ERP for customs transit agencies: shipment tracking with 15 workflow stages, automated customs duty calculation (Guinea), PDF invoice generation with custom templates, JWT authentication with refresh tokens, AI assistant (Google Gemini), audit trail, and unit tests (Vitest). Built with React, TypeScript, Node.js, Prisma, and PostgreSQL.",
    techStack: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker", "Google Gemini"],
    repoUrl: "https://github.com/kushtati",
    demoUrl: "https://github.com/kushtati",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: "2",
    title: "Image Analysis REST API",
    description:
      "Full REST API for image analysis: object detection, facial recognition, multilingual OCR, explicit content detection, logo detection, and dynamic PDF overlay. Fully Dockerized with Swagger UI documentation.",
    techStack: ["Python", "FastAPI", "OpenCV", "Tesseract", "Docker"],
    repoUrl: "https://github.com/kushtati",
    demoUrl: "https://github.com/kushtati",
    imageUrl: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: "3",
    title: "Kushtati Immo – Real Estate Platform",
    description:
      "Full real estate management platform for Guinea: owner/tenant dashboards, property listings, PDF report generation, AI chatbot integration, and complete JWT authentication with role-based access control.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Google AI"],
    repoUrl: "https://github.com/kushtati/kushtati-immo",
    demoUrl: "https://kushtati-immo.onrender.com",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&q=80"
  },
  {
    id: "4",
    title: "Portfolio Personnel",
    description:
      "Modern responsive portfolio with smooth animations, bidirectional scroll reveal, and sunset gradient design optimized for performance.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    repoUrl: "https://github.com/kushtati/porfolio.kushtati",
    demoUrl: "https://porfolio-kushtati.onrender.com",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop&q=80"
  }
];
