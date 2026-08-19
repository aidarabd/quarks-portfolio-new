import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";

type InfoItem = { label: string; lines: string[] };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ContactPage");
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");
  const tRoot = await getTranslations();
  const info = tRoot.raw("ContactInfo") as InfoItem[];

  return (
    <div className="px-6 pb-24 pt-40 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag={t("tag")} title={t("title")} description={t("description")} />

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="flex flex-col gap-10">
              {info.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
                    {item.label}
                  </p>
                  <div className="mt-2 space-y-1">
                    {item.lines.map((line) => (
                      <p key={line} className="text-lg text-ink dark:text-paper">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border-t border-ink/10 pt-6 dark:border-paper/10">
                <p className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
                  {t("responseLabel")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                  {t("responseBody")}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
