import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitBranch } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects built by Abdurehman Ali.",
};

export default function ProjectsPage() {
  return (
    <section className="page-shell py-14">
      <div className="bento p-6 sm:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 size-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 size-[560px] rounded-full bg-violet-400/10 blur-3xl" />
        <div className="relative space-y-2">
          <p className="section-kicker">Projects</p>
          <h1 className="section-title">Systems, dashboards, SaaS — shipped with polish.</h1>
          <p className="muted-lead max-w-2xl">
            Real products with clean architecture, fast flows, and premium UI detail.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {site.projects.map((p) => (
          <article
            key={p.slug}
            className="group bento"
          >
            <div className="bento-glow" />
            <div className="relative aspect-video overflow-hidden border-b border-white/10">
              <Image
                src={p.image.src}
                alt={p.image.alt}
                fill
                className={[
                  "object-cover transition duration-500 group-hover:scale-[1.02]",
                  p.slug === "carepack" ? "contrast-110 saturate-125" : "contrast-105 saturate-110",
                ].join(" ")}
                priority={p.slug === "carepack"}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
              {p.slug === "carepack" ? (
                <div className="pointer-events-none absolute -inset-12 bg-linear-to-br from-cyan-400/10 via-violet-400/10 to-emerald-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              ) : null}
            </div>
            <div className="space-y-4 p-6">
              <div>
                <h2 className="text-lg font-semibold">{p.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
              </div>

              <p className="text-sm leading-7 text-muted-foreground">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <ul className="grid gap-2 text-sm text-muted-foreground">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/60" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {p.href ? (
                  <Button asChild variant="outline" className="gap-2">
                    <Link href={p.href} target="_blank" rel="noreferrer">
                      Live <ExternalLink className="size-4" />
                    </Link>
                  </Button>
                ) : null}
                {p.github ? (
                  <Button asChild variant="outline" className="gap-2">
                    <Link href={p.github} target="_blank" rel="noreferrer">
                      Frontend <GitBranch className="size-4" />
                    </Link>
                  </Button>
                ) : null}
                {p.githubBackend ? (
                  <Button asChild variant="outline" className="gap-2">
                    <Link href={p.githubBackend} target="_blank" rel="noreferrer">
                      Backend <GitBranch className="size-4" />
                    </Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

