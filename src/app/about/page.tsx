import type { Metadata } from "next";
import Image from "next/image";
import { team, values } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Quarks Code team — senior engineers and project managers with deep experience delivering national-scale government systems and enterprise platforms.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function AboutPage() {
  return (
    <div>
      <div className="px-6 pb-16 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeading tag="About Us" title="Built by engineers who understand business" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/60 dark:text-paper/60">
              Quarks Code is a software development company focused on helping
              organizations automate processes, streamline operations, and
              build scalable digital products. Our experience spans
              government, finance, and healthcare — where reliability,
              security, and efficiency are non-negotiable.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-10 max-w-3xl font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl dark:text-paper">
              We believe software should do more than solve today&rsquo;s
              problems — it should create a foundation for future growth. Our
              goal is simple:{" "}
              <span className="italic text-acid">
                transform complex business challenges into efficient digital
                systems that create measurable value.
              </span>
            </p>
          </Reveal>
        </div>
      </div>

      <div className="bg-ink-soft/[0.03] px-6 py-20 md:px-10 dark:bg-paper/[0.02]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading tag="What We Stand For" title="Our principles" />
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
            tag="The Team"
            title="People who build your software"
            description="A small, focused team of senior specialists — every person who works on your project is experienced, accountable, and committed to the outcome."
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
