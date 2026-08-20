import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { mergeProjects } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CoverMedia } from "@/components/ui/CoverMedia";
import { HorizontalScroller } from "@/components/ui/HorizontalScroller";

export async function FeaturedWork() {
  const t = await getTranslations("FeaturedWork");
  const tRoot = await getTranslations();
  const projects = mergeProjects(tRoot.raw("Projects"));

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading tag={t("tag")} title={t("title")} description={t("description")} />
          <Reveal delay={0.1}>
            <Link
              href="/work"
              data-cursor="link"
              className="flex items-center gap-2 whitespace-nowrap text-sm font-medium uppercase tracking-wide text-ink/70 hover:text-acid dark:text-paper/70"
            >
              {t("viewAll")} <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <HorizontalScroller className="scrollbar-thin mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
            {projects.map((project, i) => (
              <a
                key={project.slug}
                href={project.url ?? `/work/${project.slug}`}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                data-cursor="view"
                className="group block w-[70vw] shrink-0 snap-start sm:w-[300px] lg:w-[320px]"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <CoverMedia
                    project={project}
                    sizes="320px"
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 font-display text-sm text-paper/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-acid">
                      {project.tag}
                    </p>
                    <h3 className="mt-2 truncate font-display text-2xl text-ink transition-colors group-hover:text-acid dark:text-paper">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="mt-1 shrink-0 text-ink/30 transition-colors group-hover:text-acid dark:text-paper/30"
                  />
                </div>
              </a>
            ))}
          </HorizontalScroller>
        </Reveal>
      </div>
    </section>
  );
}
