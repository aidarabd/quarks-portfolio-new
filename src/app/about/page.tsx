import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { mergeTeam } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";

type Value = { title: string; description: string };
type TeamText = { name: string; role: string; bio: string; specialties: string[] };

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutPage");
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  const tRoot = await getTranslations();
  const values = tRoot.raw("Values") as Value[];
  const team = mergeTeam(tRoot.raw("Team") as TeamText[]);

  return (
    <div>
      <div className="px-6 pb-16 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeading tag={t("tag")} title={t("title")} />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/60 dark:text-paper/60">
              {t("description")}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-10 max-w-3xl font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl dark:text-paper">
              {t("quoteBefore")} <span className="italic text-acid">{t("quoteAccent")}</span>
            </p>
          </Reveal>
        </div>
      </div>

      <div className="bg-ink-soft/[0.03] px-6 py-20 md:px-10 dark:bg-paper/[0.02]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading tag={t("valuesTag")} title={t("valuesTitle")} />
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.05}>
                <div className="border-t border-ink/10 pt-6 dark:border-paper/10">
                  <h3 className="font-display text-xl text-ink dark:text-paper">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag={t("teamTag")}
            title={t("teamTitle")}
            description={t("teamDescription")}
          />

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.05}>
                <div className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink/5 dark:bg-paper/5">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="360px"
                        className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-display text-5xl text-ink/25 dark:text-paper/25">
                          {initials(member.name)}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ink dark:text-paper">{member.name}</h3>
                  <p className="text-sm uppercase tracking-wide text-acid">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-paper/60">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-ink/10 px-3 py-1 text-xs text-ink/50 dark:border-paper/10 dark:text-paper/50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
