"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  id: string;
  title: string;
  subtitle?: string;
}

export const Section = ({ id, title, subtitle, children }: SectionProps) => {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground drop-shadow-[0_1px_10px_rgba(99,102,241,0.18)] sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-2xl text-foreground/75">{subtitle}</p> : null}
        <div className="mt-8">{children}</div>
      </motion.div>
    </section>
  );
};
