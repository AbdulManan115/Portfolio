"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

import { navItems } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";

const ThemeToggle = dynamic(() => import("./theme-toggle").then((mod) => mod.ThemeToggle), {
  ssr: false
});

export const Navbar = () => {
  const activeSection = useActiveSection(navItems.map((item) => item.href.slice(1)));

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground">
          <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_var(--accent)]" />
          Abdul Mannan
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const itemSection = item.href.slice(1);
            const isActive = activeSection === itemSection;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25" : "text-foreground/80 hover:bg-card hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <ThemeToggle />
      </div>
      <nav className="scrollbar-hide mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3 md:hidden sm:px-6 lg:px-8">
        {navItems.map((item) => {
          const itemSection = item.href.slice(1);
          const isActive = activeSection === itemSection;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition ${
                isActive ? "bg-accent text-accent-foreground" : "border border-border bg-card text-foreground/80"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};
