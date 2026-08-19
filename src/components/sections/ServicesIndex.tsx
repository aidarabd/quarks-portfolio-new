import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesIndex() {
  return (
    <section className="bg-ink-soft/[0.03] px-6 py-24 md:px-10 md:py-32 dark:bg-paper/[0.02]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="What We Do"
          title="Software solutions that drive real results"
          description="We focus on the intersection of engineering excellence and business impact — building systems that work reliably, scale smoothly, and deliver measurable value."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.04}>
              <div className="group flex items-start justify-between gap-6 border-t border-ink/10 py-7 dark:border-paper/10">
                <div className="flex items-start gap-6">
                  <span className="font-display text-sm text-ink/30 dark:text-paper/30">
                    {service.index}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-acid dark:text-paper">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/55 dark:text-paper/55">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/services"
            data-cursor="link"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-ink/70 hover:text-acid dark:text-paper/70"
          >
            Explore all services <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
