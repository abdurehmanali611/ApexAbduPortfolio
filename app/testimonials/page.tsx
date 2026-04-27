import type { Metadata } from "next";
import { Star } from "lucide-react";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What people say about working with Abdurehman Ali.",
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4"
          fill={i < rating ? "currentColor" : "none"}
          opacity={i < rating ? 1 : 0.25}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <section className="page-shell py-14">
      <div className="bento p-6 sm:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 size-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 size-[560px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative space-y-2">
          <p className="section-kicker">Testimonials</p>
          <h1 className="section-title">What people say after we ship.</h1>
          <p className="muted-lead max-w-2xl">
            The goal is simple: clean execution, fast delivery, and work that feels premium.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {site.testimonials.map((t) => (
          <article key={t.name} className="group bento p-6">
            <div className="bento-glow" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
              <Stars rating={t.rating} />
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">“{t.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}

