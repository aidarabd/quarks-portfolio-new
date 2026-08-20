import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  BarChart3,
  Landmark,
  LayoutDashboard,
  LayoutTemplate,
  LifeBuoy,
  Puzzle,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";

type Service = { index: string; title: string; subtitle: string; description: string; outcomes: string[] };
type ProcessStep = { step: string; title: string; description: string };
type PricingPlan = { title: string; price: string; description: string };

const serviceIcons: LucideIcon[] = [Workflow, LayoutTemplate, Puzzle, Landmark, LayoutDashboard, BarChart3];
const featureIcons: LucideIcon[] = [Sparkles, Users, Workflow, LifeBuoy];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ServicesPage");
  return { title: t("title"), description: t("description") };
}

export default async function ServicesPage() {
  const t = await getTranslations("ServicesPage");
  const tPricing = await getTranslations("PricingSection");
  const tRoot = await getTranslations();
  const services = tRoot.raw("Services") as Service[];
  const process = tRoot.raw("Process") as ProcessStep[];
  const pricing = tRoot.raw("Pricing") as PricingPlan[];
  const features = tRoot.raw("ServiceFeatures") as string[];

  return (
    <div>
      <div className="px-6 pb-16 pt-40 md:px-10 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <SectionHeading tag={t("tag")} title={t("title")} description={t("description")} />

          <Reveal delay={0.14}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {features.map((feature, i) => {
                const Icon = featureIcons[i];
                return (
                  <div key={feature} className="flex items-center gap-2.5 text-sm text-ink/70 dark:text-paper/70">
                    <Icon size={18} className="text-acid" strokeWidth={1.75} />
                    {feature}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading tag={tPricing("tag")} description={tPricing("description")} />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {pricing.map((plan, i) => (
              <Reveal key={plan.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 p-8 dark:border-paper/10">
                  <p className="text-sm font-medium uppercase tracking-wide text-ink/50 dark:text-paper/50">
                    {plan.title}
                  </p>
                  <p className="mt-3 font-display text-4xl text-ink dark:text-paper">{plan.price}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                    {plan.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-16 pt-8 md:px-10 md:pb-20 md:pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <Reveal key={service.title} delay={i * 0.04}>
                  <div className="grid grid-cols-1 gap-8 border-t border-ink/10 py-12 last:border-b sm:grid-cols-[auto_1fr] md:grid-cols-[56px_140px_1fr_1fr] dark:border-paper/10">
                    <span className="font-display text-lg text-ink/30 dark:text-paper/30">
                      {service.index}
                    </span>
                    <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-acid/10 sm:h-36 sm:w-36">
                      <Icon size={68} className="text-acid" strokeWidth={1.25} />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl text-ink dark:text-paper">{service.title}</h3>
                      <p className="mt-1 text-sm uppercase tracking-wide text-acid">{service.subtitle}</p>
                      <p className="mt-4 max-w-md leading-relaxed text-ink/60 dark:text-paper/60">
                        {service.description}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
                        {t("whatYouGet")}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-3 text-sm text-ink/70 dark:text-paper/70">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-ink-soft/[0.03] px-6 py-24 md:px-10 md:py-32 dark:bg-paper/[0.02]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            tag={t("processTag")}
            title={t("processTitle")}
            description={t("processDescription")}
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <p className="font-display text-4xl text-acid">{step.step}</p>
                <h3 className="mt-4 font-display text-xl text-ink dark:text-paper">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
