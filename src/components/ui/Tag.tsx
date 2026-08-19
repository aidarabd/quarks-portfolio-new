import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-ink/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink/60 dark:border-paper/15 dark:text-paper/60",
        className
      )}
    >
      {children}
    </span>
  );
}
