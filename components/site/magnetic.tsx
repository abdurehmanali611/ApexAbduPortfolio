"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type MagneticProps = React.PropsWithChildren<{
  className?: string;
  strength?: number; // px
}>;

export function Magnetic({ children, className, strength = 10 }: MagneticProps) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const dx = (x / rect.width) * strength * 2;
      const dy = (y / rect.height) * strength * 2;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };

    const onLeave = () => {
      el.style.transform = "translate3d(0, 0, 0)";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, strength]);

  return (
    <div
      ref={ref}
      className={cn("will-change-transform transition-transform duration-200 ease-out", className)}
    >
      {children}
    </div>
  );
}

