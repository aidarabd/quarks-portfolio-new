import { getTranslations } from "next-intl/server";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

export async function CTASection() {
  const t = await getTranslations("CTA");

  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl dark:text-paper">
            {t("titleBefore")} <span className="italic text-acid">{t("titleAccent")}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ink/60 dark:text-paper/60">
            {t("description")}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/contact">{t("startConversation")}</MagneticButton>
            <MagneticButton href="/work" variant="outline">
              {t("seeWork")}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
