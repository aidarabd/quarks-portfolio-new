"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      data-cursor="link"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-acid hover:text-acid dark:border-paper/15 dark:text-paper dark:hover:border-acid dark:hover:text-acid"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
