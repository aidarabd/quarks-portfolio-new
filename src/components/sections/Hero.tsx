import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { mergeProjects } from "@/data/content";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { HeroPhotoStack } from "@/components/sections/HeroPhotoStack";

export async function Hero() {
  const t = await getTranslations("Hero");
  const stats = t.raw("stats") as { value: string; label: string }[];

  const tRoot = await getTranslations();
  const projects = mergeProjects(tRoot.raw("Projects"));
  const back = projects.find((p) => p.slug === "atria")!;
  const front = projects.find((p) => p.slug === "kit-forum")!;

  return (
    <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-ink/60 dark:border-paper/15 dark:text-paper/60">
            <span className="h-1.5 w-1.5 rounded-full bg-acid" />
            {t("badge")}
          </span>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1fr] md:gap-10 lg:gap-16">
          <div>
            <Reveal delay={0.08}>
              <h1 className="font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-6xl lg:text-7xl dark:text-paper">
                {t("headlineBefore")}{" "}
                <span className="italic text-acid">{t("headlineAccent")}</span>{" "}
                {t("headlineAfter")}
              </h1>
            </Reveal>

            <Reveal delay={0.16} className="mt-6 max-w-md">
              <p className="text-lg leading-relaxed text-ink/60 dark:text-paper/60">
                {t("description")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticButton href="/work">
                  {t("viewWork")} <ArrowUpRight size={16} />
                </MagneticButton>
                <MagneticButton href="/contact" variant="outline">
                  {t("startProject")}
                </MagneticButton>
              </div>
              <Link
                href="#work"
                data-cursor="link"
                className="mt-10 hidden items-center gap-2 text-sm font-medium uppercase tracking-wide text-ink/50 hover:text-acid md:flex dark:text-paper/50"
              >
                {t("scroll")}
                <ArrowDownRight size={16} />
              </Link>
            </Reveal>
          </div>

          <HeroPhotoStack back={back} front={front} />
        </div>

        <Reveal delay={0.28}>
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3 dark:border-paper/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl text-ink dark:text-paper">{stat.value}</p>
                <p className="mt-1 text-sm text-ink/50 dark:text-paper/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <p className="mt-8 text-sm text-ink/50 dark:text-paper/50">{t("integrations")}</p>
        </Reveal>
      </div>
    </section>
  );
}
