"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { cx } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export function MagneticButton({ href, children, variant = "solid", className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: relX * 0.25, y: relY * 0.4 });
  };

  return (
    <motion.div
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className="inline-block"
    >
      <Link
        ref={ref}
        href={href}
        data-cursor="link"
        className={cx(
          "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors duration-300",
          variant === "solid"
            ? "bg-ink text-paper hover:bg-acid hover:text-ink dark:bg-paper dark:text-ink dark:hover:bg-acid"
            : "border border-ink/20 text-ink hover:border-acid hover:text-acid dark:border-paper/20 dark:text-paper dark:hover:border-acid dark:hover:text-acid",
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
