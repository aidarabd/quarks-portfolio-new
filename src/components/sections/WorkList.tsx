"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/content";
import { CoverMedia } from "@/components/ui/CoverMedia";

export function WorkList({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const activeProject = projects.find((p) => p.slug === active);

  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            data-cursor="view"
            onMouseEnter={() => setActive(project.slug)}
            onMouseLeave={() => setActive(null)}
            className="group grid grid-cols-1 items-center gap-4 border-t border-ink/10 py-8 transition-colors last:border-b hover:bg-ink/[0.02] sm:grid-cols-[auto_1fr_auto_auto] sm:gap-8 dark:border-paper/10 dark:hover:bg-paper/[0.03]"
          >
            <span className="font-display text-sm text-ink/40 dark:text-paper/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-acid">{project.tag}</p>
              <h3 className="mt-2 font-display text-3xl text-ink transition-colors group-hover:text-acid sm:text-4xl md:text-5xl dark:text-paper">
                {project.title}
              </h3>
            </div>
            <span className="text-sm text-ink/40 dark:text-paper/40">{project.year}</span>
            <ArrowUpRight size={28} className="hidden shrink-0 text-ink/30 sm:block dark:text-paper/30" />
          </Link>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="pointer-events-none fixed z-40 hidden h-56 w-80 overflow-hidden rounded-xl md:block"
            style={{ left: pos.x + 24, top: pos.y - 112 }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <CoverMedia project={activeProject} sizes="320px" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
