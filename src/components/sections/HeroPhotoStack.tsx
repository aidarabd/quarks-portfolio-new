"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/content";
import { CoverMedia } from "@/components/ui/CoverMedia";

export function HeroPhotoStack({ back, front }: { back: Project; front: Project }) {
  const t = useTranslations("Hero");

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[520px]">
      <motion.a
        href={back.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="view"
        className="absolute right-0 top-0 h-80 w-64 -rotate-[4deg] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-ink/10 sm:h-[26rem] sm:w-80 dark:ring-paper/10"
        initial={{ opacity: 0, y: 24, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: -4 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <CoverMedia project={back} sizes="(min-width: 640px) 320px, 260px" />
      </motion.a>

      <motion.a
        href={front.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="view"
        className="absolute bottom-0 left-0 h-72 w-56 rotate-[5deg] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-ink/10 sm:h-96 sm:w-72 dark:ring-paper/10"
        initial={{ opacity: 0, y: 24, rotate: 5 }}
        whileInView={{ opacity: 1, y: 0, rotate: 5 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <CoverMedia project={front} sizes="(min-width: 640px) 288px, 230px" />
      </motion.a>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-4 right-6"
      >
        <Link
          href="/work"
          data-cursor="link"
          className="flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-xs font-medium uppercase tracking-wide text-ink shadow-xl dark:bg-ink dark:text-paper"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-acid" />
          {t("selectedWork")}
          <ArrowUpRight size={14} />
        </Link>
      </motion.div>
    </div>
  );
}
