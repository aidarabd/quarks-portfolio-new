import { marqueeWords } from "@/data/content";

export function Marquee() {
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-5 dark:border-paper/10 dark:bg-paper">
      <div className="animate-marquee flex w-max items-center gap-10">
        {[...items, ...items].map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-10 font-display text-2xl text-paper/70 dark:text-ink/70"
          >
            {word}
            <span className="h-2 w-2 rounded-full bg-acid" />
          </span>
        ))}
      </div>
    </div>
  );
}
