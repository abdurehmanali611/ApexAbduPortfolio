"use client";

import * as React from "react";
import { motion, type MotionProps, useReducedMotion } from "framer-motion";

type RevealProps = MotionProps & {
  className?: string;
  children: React.ReactNode;
  delay?: number;
};

export function Reveal({
  className,
  children,
  delay = 0,
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

