import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { Project } from "@/data/content";
import { CoverMedia } from "@/components/ui/CoverMedia";
import { Reveal } from "@/components/ui/Reveal";

export async function WorkList({ projects }: { projects: Project[] }) {
  const t = await getTranslations("WorkPage");

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={(i % 3) * 0.08}>
          <Link
            href={`/work/${project.slug}`}
            data-cursor="view"
            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <CoverMedia
              project={project}
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
              className="transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <span className="absolute left-4 top-4 font-display text-sm text-paper/80">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="absolute right-4 top-4 text-sm text-paper/80">{project.year}</span>

            {/* Darkens on hover (desktop); stays subtly on for readability on touch devices */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink from-0% via-ink/70 via-45% to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100" />

            {/* Title/tag/description/CTA reveal on hover (desktop); always shown on touch devices */}
            <div className="absolute inset-x-0 bottom-0 translate-y-0 p-6 opacity-100 transition-all duration-300 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
              <p className="text-xs font-medium uppercase tracking-wide text-acid">{project.tag}</p>
              <h3 className="mt-2 font-display text-2xl text-paper">{project.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-paper/90">
                {project.overview}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-paper/30 px-4 py-2 text-xs font-medium uppercase tracking-wide text-paper transition-colors group-hover:border-acid group-hover:text-acid">
                {t("explore")} <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
