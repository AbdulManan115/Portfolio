import { BriefcaseBusiness, Database, Layers, Wrench } from "lucide-react";

import type { Project, SkillGroup } from "@/types";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const skillGroups: SkillGroup[] = [
  { category: "Frontend", skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Backend", skills: ["Node.js", "Express.js"] },
  { category: "Database", skills: ["MongoDB"] },
  { category: "Tools", skills: ["Git", "GitHub", "VS Code"] }
];

export const skillIcons = {
  Frontend: Layers,
  Backend: BriefcaseBusiness,
  Database: Database,
  Tools: Wrench
};

export const projects: Project[] = [
  {
    name: "E-commerce Web App",
    description: "A scalable storefront focused on performance, product discovery, and smooth checkout UX.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    features: ["Product catalog with filtering", "Secure cart and checkout flow", "Order tracking and status updates"],
    demoUrl: "",
    repoUrl: "https://github.com/example/ecommerce-app",
    image: "/images/ecommerce.svg"
  },
  {
    name: "Authentication System (JWT आधारित)",
    description: "A production-ready authentication module using JWT with robust route protection.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    features: ["JWT access and refresh tokens", "Role-based protected routes", "Secure password hashing and validation"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/example/jwt-auth-system",
    image: "/images/auth.svg"
  },
  {
    name: "Admin Dashboard",
    description: "A clean analytics dashboard for monitoring app activity, KPIs, and team operations.",
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "Charts"],
    features: ["Responsive KPI cards and charts", "Modular widget-based UI", "API-powered activity feed"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/example/admin-dashboard",
    image: "/images/dashboard.svg"
  }
];
