import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl dark:text-paper">
            Ready to automate and{" "}
            <span className="italic text-acid">scale your operations?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ink/60 dark:text-paper/60">
            Tell us about your challenge. We&rsquo;ll design a solution that
            fits your organization, timeline, and budget.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href="/contact">Start a Conversation</MagneticButton>
            <MagneticButton href="/work" variant="outline">
              See Our Work
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
