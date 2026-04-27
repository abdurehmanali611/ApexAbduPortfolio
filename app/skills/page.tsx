import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Braces, Database, Layers, Sparkles, Smartphone } from "lucide-react";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Skills",
  description: "Core skills and tools used by Abdurehman Ali.",
};

const groups = [
  {
    title: "Frontend",
    icon: Sparkles,
    desc: "Polished UI systems, fast navigation, responsive layouts.",
    items: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend",
    icon: Braces,
    desc: "APIs, auth, scalable architecture, clean domain boundaries.",
    items: ["Django", "NestJS", "GraphQL", "Prisma"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    desc: "Native-feeling apps with modern DX and smooth UX.",
    items: ["React Native (Expo)"],
  },
  {
    title: "Databases",
    icon: Database,
    desc: "Schema design, performance-minded queries, data modeling.",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Business systems",
    icon: Layers,
    desc: "ERP integrations and real-world operations workflows.",
    items: ["Odoo"],
  },
] as const;

export default function SkillsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-6 sm:p-10">
        <div className="pointer-events-none absolute -left-24 -top-24 size-[520px] rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 size-[560px] rounded-full bg-violet-400/10 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-[1.1fr,0.9fr] md:items-end">
          <div className="space-y-3">
            <p className="text-xs font-medium text-muted-foreground">Skills</p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A toolbox built for shipping.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              I combine modern frontend polish with backend architecture and real database work — so products feel fast, look premium, and scale cleanly.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition hover:opacity-90"
            >
              View Projects <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium transition hover:bg-white/8"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-6 transition hover:bg-white/6"
          >
            <div className="pointer-events-none absolute -inset-24 bg-linear-to-br from-cyan-400/10 via-violet-400/8 to-emerald-400/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold">{g.title}</p>
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                </div>
                <div className="inline-flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <g.icon className="size-5 text-muted-foreground" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground transition group-hover:bg-white/8"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-4xl border border-white/10 bg-white/4 p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold">Full list</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              The tech I’m comfortable shipping with.
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {site.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

