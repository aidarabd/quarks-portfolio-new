import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/content";
import { CoverMedia } from "@/components/ui/CoverMedia";
import { Reveal } from "@/components/ui/Reveal";

export function WorkList({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={(i % 3) * 0.08}>
          <Link href={`/work/${project.slug}`} data-cursor="view" className="group block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <CoverMedia
                project={project}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 font-display text-sm text-paper/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="absolute right-4 top-4 text-sm text-paper/80">{project.year}</span>
            </div>

            <div className="mt-5 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-acid">{project.tag}</p>
                <h3 className="mt-2 truncate font-display text-2xl text-ink transition-colors group-hover:text-acid dark:text-paper">
                  {project.title}
                </h3>
              </div>
              <ArrowUpRight
                size={22}
                className="mt-1 shrink-0 text-ink/30 transition-colors group-hover:text-acid dark:text-paper/30"
              />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
