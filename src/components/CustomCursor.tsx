"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 30, stiffness: 250, mass: 0.4 });
  const ringY = useSpring(y, { damping: 30, stiffness: 250, mass: 0.4 });

  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "link" | "view">("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement;
      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      setVariant((cursorTarget?.dataset.cursor as "link" | "view") ?? "default");
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-acid mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: variant === "view" ? 96 : 8,
          height: variant === "view" ? 96 : 8,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] flex items-center justify-center rounded-full border border-acid/70"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: variant === "default" ? 32 : variant === "link" ? 56 : 96,
          height: variant === "default" ? 32 : variant === "link" ? 56 : 96,
          opacity: visible ? (variant === "view" ? 0 : 0.8) : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      />
      {variant === "view" && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[101] flex items-center justify-center text-[11px] font-medium uppercase tracking-wide text-ink"
          style={{ x, y, translateX: "-50%", translateY: "-50%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
        >
          View
        </motion.div>
      )}
    </>
  );
}
