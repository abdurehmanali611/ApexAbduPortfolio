"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function HeroParticles() {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready || reduceMotion) return null;

  return (
    <Particles
      id="hero-particles"
      className="pointer-events-none absolute inset-0 -z-10"
      options={{
        fpsLimit: 60,
        fullScreen: { enable: false },
        particles: {
          number: { value: 68, density: { enable: true } },
          color: { value: ["#22d3ee", "#a78bfa", "#34d399", "#e5e7eb"] },
          opacity: { value: 0.25 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.65, direction: "none", outModes: { default: "out" } },
          links: { enable: true, distance: 120, opacity: 0.12, width: 1, color: "#ffffff" },
        },
        detectRetina: true,
      }}
    />
  );
}

