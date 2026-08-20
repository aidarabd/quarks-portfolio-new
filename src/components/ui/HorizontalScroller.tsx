"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function HorizontalScroller({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Only take over for a predominantly vertical scroll gesture (a normal
      // mouse wheel) — leave trackpad horizontal swipes alone.
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      const scrollingForward = e.deltaY > 0;

      // Release control back to normal page scroll once the row has nowhere
      // left to go, so the gesture doesn't get trapped here.
      if ((scrollingForward && atEnd) || (!scrollingForward && atStart)) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
