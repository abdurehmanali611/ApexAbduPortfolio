import type { Metadata } from "next";

import { AboutContent } from "@/components/site/about-content";

export const metadata: Metadata = {
  title: "About",
  description: "About Abdurehman Ali — full‑stack developer for web and mobile.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <AboutContent />
    </section>
  );
}

