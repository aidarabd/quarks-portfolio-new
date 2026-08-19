"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { locales, localeCookieName, type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    document.cookie = `${localeCookieName}=${next}; path=/; max-age=31536000`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-ink/15 p-1 text-xs font-medium uppercase tracking-wide dark:border-paper/15"
      aria-disabled={isPending}
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          data-cursor="link"
          onClick={() => switchTo(l)}
          className={
            l === locale
              ? "rounded-full bg-ink px-2.5 py-1 text-paper dark:bg-paper dark:text-ink"
              : "rounded-full px-2.5 py-1 text-ink/50 hover:text-ink dark:text-paper/50 dark:hover:text-paper"
          }
        >
          {l}
        </button>
      ))}
    </div>
  );
}
