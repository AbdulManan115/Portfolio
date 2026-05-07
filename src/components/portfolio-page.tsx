"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  ExternalLink,
  GitBranch,
  Mail,
  Send,
  Sparkles
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

import { projects, skillGroups, skillIcons } from "@/data/portfolio";

import { Navbar } from "./navbar";
import { Section } from "./section";

const experienceTimeline = [
  {
    role: "Full Stack Developer",
    period: "2025 - Present",
    company: "Freelance + Product Work",
    highlights: ["Built production-grade SaaS dashboards", "Designed secure API modules with Node.js and MongoDB"]
  },
  {
    role: "Frontend Engineer",
    period: "2024 - 2025",
    company: "Client Project Collaborations",
    highlights: ["Crafted design-driven UIs with Next.js", "Improved Lighthouse and Core Web Vitals for shipped apps"]
  },
  {
    role: "JavaScript Developer",
    period: "2023 - 2024",
    company: "Early Professional Projects",
    highlights: ["Delivered reusable component systems", "Contributed to auth workflows and integrations"]
  }
];

const skillMeter = [
  { name: "React / Next.js", level: 92 },
  { name: "Node.js / Express", level: 86 },
  { name: "TypeScript / JavaScript", level: 90 },
  { name: "MongoDB / API Design", level: 82 }
];

export const PortfolioPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = pageHeight <= 0 ? 0 : (window.scrollY / pageHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = useMemo(
    () => [
      { href: "https://github.com/AbdulManan115", label: "GitHub", icon: GitBranch },
      { href: "https://www.linkedin.com/in/abdul-manan-1972a5298/", label: "LinkedIn", icon: Briefcase }
    ],
    []
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSent(true);
    form.reset();

    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-6 py-4">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="text-accent"
              >
                <Sparkles size={20} />
              </motion.span>
              <p className="text-sm text-foreground/80">Loading premium experience...</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Navbar />

      <main id="home" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="relative grid gap-10 overflow-hidden py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.2rem] bg-gradient-to-br from-indigo-500/25 via-transparent to-fuchsia-500/20 blur-3xl" />
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="soft-glass inline-flex rounded-full border border-border px-4 py-1 text-sm text-foreground/80 shadow-soft"
            >
              Full Stack Developer Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Abdul Mannan
              <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-sky-300 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-5 max-w-2xl text-lg text-foreground/85 sm:text-xl"
            >
              I design premium digital products with thoughtful UX, scalable architecture, and polished frontend systems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-accent-foreground shadow-xl shadow-accent/30 transition hover:-translate-y-0.5"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="soft-glass inline-flex items-center rounded-full border border-border px-5 py-3 font-medium transition hover:border-accent">
                Contact Me
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45 }}
              className="mt-8 flex items-center gap-3"
            >
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className="soft-glass inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/75 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    aria-label={item.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="soft-glass relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-border p-7 shadow-soft"
          >
            <motion.div
              animate={{ y: [-6, 8, -6] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -left-10 -top-8 h-28 w-28 rounded-full bg-indigo-500/30 blur-2xl"
            />
            <motion.div
              animate={{ y: [8, -4, 8] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-purple-500/30 blur-2xl"
            />
            <div className="relative space-y-4">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-indigo-500/20 via-card to-fuchsia-400/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-border">
                    <Image src="/images/profile.png" alt="Abdul Mannan" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-foreground/65">Developer Card</p>
                    <p className="mt-2 text-3xl font-semibold">Abdul Mannan</p>
                    <p className="mt-1 text-sm text-foreground/70">React • Next.js • Node.js • TypeScript</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Experience", value: "3+ Years" },
                  { label: "Shipped", value: "15+ Builds" },
                  { label: "Focus", value: "SaaS UX" }
                ].map((stat) => (
                  <article key={stat.label} className="rounded-xl border border-border bg-background/65 px-3 py-3">
                    <p className="text-sm font-semibold">{stat.value}</p>
                    <p className="mt-1 text-xs text-foreground/60">{stat.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <Section
          id="about"
          title="About"
          subtitle="I build digital products that combine engineering quality, performance, and modern product aesthetics."
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="soft-glass rounded-3xl border border-border p-6 shadow-soft sm:p-8">
              <p className="leading-relaxed text-foreground/80">
                I work end-to-end from idea to production: product discovery, design system thinking, component architecture, and backend API engineering.
                My approach balances strong technical foundations with memorable UI polish, resulting in clean and recruiter-friendly experiences.
              </p>
            </article>
            <article className="soft-glass rounded-3xl border border-border p-6 shadow-soft">
              <h3 className="text-lg font-semibold">Core Expertise</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                <li>Design-driven frontend systems</li>
                <li>Scalable REST API architecture</li>
                <li>Reusable component libraries</li>
                <li>Performance-first optimization</li>
              </ul>
            </article>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Categorized stack and confidence indicators for modern full-stack delivery.">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            {skillGroups.map((group) => {
              const Icon = skillIcons[group.category as keyof typeof skillIcons];

              return (
                <motion.article
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="soft-glass rounded-2xl border border-border p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-xl bg-accent/20 p-2 text-accent">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-lg font-semibold">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-border bg-background/80 px-3 py-1 text-sm text-foreground/85">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
          <div className="mt-6 soft-glass rounded-3xl border border-border p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Technical Strength</h3>
            <div className="mt-4 space-y-4">
              {skillMeter.map((item) => (
                <div key={item.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-foreground/80">{item.name}</span>
                    <span className="text-foreground/60">{item.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.9 }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected real-world style projects demonstrating product thinking and engineering quality.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="soft-glass group flex flex-col overflow-hidden rounded-3xl border border-border shadow-soft transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={project.image} alt={project.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="mt-3 text-sm text-foreground/70">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-full bg-background px-2.5 py-1 text-xs text-foreground/80 ring-1 ring-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-foreground/75">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-3">
                    <Link href={project.demoUrl} target="_blank" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                      Live Demo <ExternalLink size={14} />
                    </Link>
                    <Link href={project.repoUrl} target="_blank" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent">
                      GitHub <GitBranch size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" subtitle="Professional milestones represented as a modern animated timeline.">
          <div className="relative space-y-5 before:absolute before:bottom-4 before:left-2.5 before:top-4 before:w-px before:bg-border">
            {experienceTimeline.map((item, index) => (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="soft-glass relative ml-7 rounded-2xl border border-border p-5 shadow-soft"
              >
                <span className="absolute -left-[1.72rem] top-6 h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_16px_var(--accent)]" />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="text-xs uppercase tracking-wider text-foreground/60">{item.period}</p>
                </div>
                <p className="mt-1 text-sm text-foreground/70">{item.company}</p>
                <ul className="mt-3 space-y-1 text-sm text-foreground/75">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>- {highlight}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Open to freelance, internship, and full-time opportunities. Let's build something impactful.">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <aside className="soft-glass rounded-3xl border border-border p-6 shadow-soft">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <div className="mt-5 space-y-4 text-sm">
                <a href="mailto:richmoral2044@gmail.com" className="flex items-center gap-3 text-foreground/85 hover:text-accent">
                  <Mail size={16} /> richmoral2044@gmail.com
                </a>
                <a href="https://github.com/AbdulManan115" target="_blank" className="flex items-center gap-3 text-foreground/85 hover:text-accent">
                  <GitBranch size={16} /> github.com/AbdulManan115
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-manan-1972a5298/"
                  target="_blank"
                  className="flex items-center gap-3 text-foreground/85 hover:text-accent"
                >
                  <Briefcase size={16} /> linkedin.com/in/abdul-manan-1972a5298
                </a>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="soft-glass rounded-3xl border border-border p-6 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Your Name" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-accent transition focus:ring-2" />
                <input required type="email" name="email" placeholder="Your Email" className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-accent transition focus:ring-2" />
              </div>
              <input required name="subject" placeholder="Subject" className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-accent transition focus:ring-2" />
              <textarea required name="message" placeholder="Your Message" rows={5} className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-accent transition focus:ring-2" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 inline-flex min-w-36 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {isSent ? <p className="mt-3 text-sm text-emerald-500">Message sent successfully (demo frontend flow).</p> : null}
            </form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-foreground/70 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Abdul Mannan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} target="_blank" className="transition hover:text-accent" aria-label={item.label}>
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
};
