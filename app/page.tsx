import { HeroParticles } from "@/components/site/particles";
import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";
import { Reveal } from "@/components/site/motion";
import { Magnetic } from "@/components/site/magnetic";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 size-[520px] rounded-full bg-cyan-400/18 blur-3xl" />
        <div className="absolute -right-24 top-20 size-[560px] rounded-full bg-violet-400/14 blur-3xl" />
        <div className="absolute left-1/3 -bottom-40 size-[620px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>
      <HeroParticles />

      <div className="page-shell py-16 sm:py-20">
        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-400/80" />
              Available for freelance / full‑time
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Abdurehman Ali
              <span className="block text-muted-foreground">Full‑Stack Web & Mobile Developer</span>
            </h1>

            <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              I build end‑to‑end products — from database design and APIs to polished interfaces.
              Fast, scalable, and visually sharp. Let’s ship something unforgettable.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition hover:opacity-90"
                >
                  Hire Me
                </Link>
              </Magnetic>
              <Link
                href="/projects"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium transition hover:bg-white/8"
              >
                View Projects
              </Link>
              <Link
                href="/resume/Abdurehman-Ali-CV.pdf"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-medium transition hover:bg-white/5"
              >
                Download CV
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Next.js</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Django</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">GraphQL</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Prisma</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">React Native</span>
            </div>
          </Reveal>

          <Reveal className="relative" delay={0.08}>
            <div className="group bento p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="bento-glow" />
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium">Selected work</p>
                <p className="text-xs text-muted-foreground">SaaS • Admin • Systems</p>
              </div>
              <div className="mt-5 grid gap-3">
                <Link
                  href="/projects"
                  className="group rounded-2xl border border-white/10 bg-black/10 p-4 transition hover:bg-white/6"
                >
                  <p className="text-sm font-semibold">CarePack</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Patient management system (Next.js + NestJS + MongoDB)
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground group-hover:text-foreground">
                    View case study →
                  </p>
                </Link>
                <Link
                  href="/projects"
                  className="group rounded-2xl border border-white/10 bg-black/10 p-4 transition hover:bg-white/6"
                >
                  <p className="text-sm font-semibold">HotCol</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Hotel management SaaS (Next.js + GraphQL + Prisma + MySQL)
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground group-hover:text-foreground">
                    View case study →
                  </p>
                </Link>
                <Link
                  href="/projects"
                  className="group rounded-2xl border border-white/10 bg-black/10 p-4 transition hover:bg-white/6"
                >
                  <p className="text-sm font-semibold">Medicare</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pharmacy operations SaaS (Next.js + Django)
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground group-hover:text-foreground">
                    View case study →
                  </p>
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px] bg-linear-to-br from-cyan-400/10 via-violet-400/8 to-emerald-400/8 blur-2xl" />
          </Reveal>
        </div>
      </div>

      <div className="page-shell pb-16">
        <div className="grid gap-4 rounded-4xl border border-white/10 bg-white/4 p-6 md:grid-cols-3">
          <div className="space-y-1">
            <p className="text-sm font-semibold">Systems-first</p>
            <p className="text-sm text-muted-foreground">Clean architecture, predictable performance, scalable patterns.</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold">Design polish</p>
            <p className="text-sm text-muted-foreground">Premium UI details — responsive, accessible, and fast.</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold">Ship mindset</p>
            <p className="text-sm text-muted-foreground">Iterate quickly, keep quality high, deliver reliably.</p>
          </div>
        </div>
      </div>

      {/* Overview sections */}
      <div className="page-shell space-y-16 pb-20">
        {/* About preview */}
        <section className="grid items-start gap-6 rounded-4xl border border-white/10 bg-white/4 p-6 md:grid-cols-[0.9fr,1.1fr]">
        <Reveal>
          <div className="space-y-3">
            <p className="text-xs font-medium text-muted-foreground">About</p>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Built for real systems — not just demos.
            </h2>
            <p className="text-sm leading-7 text-muted-foreground">
              {site.about[0]}
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium transition hover:bg-white/8"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
            <div className="grid gap-3 p-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
                <p className="text-sm font-semibold">Full‑stack</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Web + mobile end‑to‑end delivery.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
                <p className="text-sm font-semibold">SaaS & dashboards</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fast operator flows & clean UX.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
                <p className="text-sm font-semibold">APIs</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  GraphQL + REST patterns that scale.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
                <p className="text-sm font-semibold">Polish</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Motion, spacing, and accessibility.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        </section>

        {/* Projects preview */}
        <section className="space-y-6">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Projects</p>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Selected work</h2>
            </div>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {site.projects.slice(0, 4).map((p) => (
              <Link
                key={p.slug}
                href="/projects"
                className="group bento transition hover:bg-white/6"
              >
                <div className="bento-glow" />
                <div className="relative aspect-video overflow-hidden border-b border-white/10">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <div>
                    <p className="text-sm font-semibold">{p.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
        </section>

        {/* Skills preview */}
        <section className="space-y-6">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Skills</p>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Toolbox</h2>
            </div>
            <Link
              href="/skills"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              See all →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-6">
              <div className="pointer-events-none absolute -inset-24 bg-linear-to-br from-cyan-400/10 via-violet-400/8 to-emerald-400/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <p className="text-sm font-semibold">Frontend</p>
                <p className="text-sm text-muted-foreground">Next.js • React • Tailwind • shadcn</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Next.js", "React", "Tailwind CSS", "shadcn/ui"].map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-6">
              <div className="pointer-events-none absolute -inset-24 bg-linear-to-br from-cyan-400/10 via-violet-400/8 to-emerald-400/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <p className="text-sm font-semibold">Backend</p>
                <p className="text-sm text-muted-foreground">Django • NestJS • GraphQL • Prisma</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Django", "NestJS", "GraphQL", "Prisma"].map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-6">
              <div className="pointer-events-none absolute -inset-24 bg-linear-to-br from-cyan-400/10 via-violet-400/8 to-emerald-400/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative space-y-3">
                <p className="text-sm font-semibold">Data + Mobile</p>
                <p className="text-sm text-muted-foreground">MongoDB • PostgreSQL • MySQL • Expo</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["MongoDB", "PostgreSQL", "MySQL", "React Native (Expo)"].map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        </section>

        {/* Testimonials preview */}
        <section className="space-y-6">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Testimonials</p>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">People I worked with</h2>
            </div>
            <Link
              href="/testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              View →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {site.testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl border border-white/10 bg-white/4 p-6">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </Reveal>
        </section>

        {/* Contact preview */}
        <section className="rounded-4xl border border-white/10 bg-white/4 p-6">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">Contact</p>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Let’s build something that looks expensive — and works perfectly.
              </h2>
              <p className="text-sm text-muted-foreground">
                Email me at{" "}
                <span className="font-medium text-foreground">{site.contact.email}</span> or use the contact form.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition hover:opacity-90"
                >
                  Hire Me
                </Link>
              </Magnetic>
              <Link
                href="/resume/Abdurehman-Ali-CV.pdf"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 px-5 text-sm font-medium transition hover:bg-white/5"
              >
                Download CV
              </Link>
            </div>
          </div>
        </Reveal>
        </section>
      </div>
    </section>
  );
}
