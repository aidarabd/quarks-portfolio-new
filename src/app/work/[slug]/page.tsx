import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { mergeProjects, projectsMeta } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CoverMedia } from "@/components/ui/CoverMedia";
import { FlowDiagram } from "@/components/ui/FlowDiagram";

// Locale is resolved per-request from a cookie, so this route can't be
// statically prerendered without freezing whichever locale was active at
// build time.
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return projectsMeta.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTranslations();
  const projects = mergeProjects(t.raw("Projects"));
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.overview,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tCase = await getTranslations("CaseStudy");
  const t = await getTranslations();
  const projects = mergeProjects(t.raw("Projects"));
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <div className="px-6 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link
              href="/work"
              data-cursor="link"
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-ink/60 hover:text-acid dark:text-paper/60"
            >
              <ArrowLeft size={16} /> {tCase("allWork")}
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm font-medium uppercase tracking-wide text-acid">{project.tag}</p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-ink/60 transition-colors hover:border-acid hover:text-acid dark:border-paper/15 dark:text-paper/60"
                >
                  {tCase("visitSite")} <ArrowUpRight size={12} />
                </a>
              )}
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl dark:text-paper">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/60 dark:text-paper/60">
              {project.overview}
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.16}>
        <div className="mx-auto mt-14 max-w-7xl px-6 md:px-10">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <CoverMedia project={project} sizes="100vw" priority />
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl text-ink dark:text-paper">{tCase("theProblem")}</h2>
            <p className="mt-4 leading-relaxed text-ink/60 dark:text-paper/60">{project.problem}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-2xl text-ink dark:text-paper">{tCase("theSolution")}</h2>
            <p className="mt-4 leading-relaxed text-ink/60 dark:text-paper/60">{project.solution}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </Reveal>

        {project.flow && (
          <Reveal delay={0.12}>
            <div className="mt-16 border-t border-ink/10 pt-10 dark:border-paper/10">
              <p className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
                {tCase("howItWorks")}
              </p>
              <div className="mt-6">
                <FlowDiagram steps={project.flow} />
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.14}>
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3 dark:border-paper/10">
            {project.results.map((result) => (
              <div key={result.label}>
                <p className="font-display text-3xl text-ink dark:text-paper">{result.metric}</p>
                <p className="mt-2 text-sm text-ink/50 dark:text-paper/50">{result.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="border-t border-ink/10 px-6 py-10 md:px-10 dark:border-paper/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href={`/work/${prev.slug}`}
            data-cursor="link"
            className="group flex items-center gap-3 text-sm text-ink/60 hover:text-acid dark:text-paper/60"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">{prev.title}</span>
          </Link>
          <Link
            href="/work"
            data-cursor="link"
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-ink/60 hover:text-acid dark:text-paper/60"
          >
            {tCase("allWork")} <ArrowUpRight size={14} />
          </Link>
          <Link
            href={`/work/${next.slug}`}
            data-cursor="link"
            className="group flex items-center gap-3 text-sm text-ink/60 hover:text-acid dark:text-paper/60"
          >
            <span className="hidden sm:inline">{next.title}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="px-6 py-24 text-center md:px-10">
        <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl dark:text-paper">
          {tCase("haveChallenge")}
        </h2>
        <div className="mt-8 flex justify-center">
          <MagneticButton href="/contact">{tCase("startConversation")}</MagneticButton>
        </div>
      </div>
    </article>
  );
}
