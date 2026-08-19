import { Reveal } from "@/components/ui/Reveal";

type Props = {
  tag: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ tag, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
          <span className="h-1.5 w-1.5 rounded-full bg-acid" />
          {tag}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl dark:text-paper">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={
              "mt-5 max-w-xl text-base leading-relaxed text-ink/60 dark:text-paper/60" +
              (align === "center" ? " mx-auto" : "")
            }
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
