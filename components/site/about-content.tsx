"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";

import { site } from "@/lib/site";

const timeline = [
  {
    title: "Product thinking",
    body: "I translate business goals into flows that feel natural — fast navigation, clear states, and strong UI hierarchy.",
  },
  {
    title: "Architecture that scales",
    body: "From database schema to API boundaries, I design for growth: maintainable code, stable patterns, and performance.",
  },
  {
    title: "Premium UI execution",
    body: "I care about the details — spacing, typography, motion, and responsiveness across devices.",
  },
  {
    title: "Ship + iterate",
    body: "Deliver, measure, refine. I like shipping features that users actually feel.",
  },
] as const;

export function AboutContent() {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
      {/* Left rail: portrait + quick facts */}
      <motion.aside
        className="lg:col-span-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-6">
          <div className="pointer-events-none absolute -left-24 -top-24 size-[420px] rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 size-[440px] rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative flex items-start gap-4">
            <div className="relative size-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <Image
                src="/assets/abdu.jpg"
                alt="Abdurehman Ali portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-semibold">{site.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{site.role}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <BadgeCheck className="size-3.5 opacity-80" /> Available
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  <MapPin className="size-3.5 opacity-80" /> {site.location}
                </span>
              </div>
            </div>
          </div>

          <div className="relative mt-6 grid gap-3">
            <div className="rounded-3xl border border-white/10 bg-white/4 p-4">
              <p className="text-xs font-medium text-muted-foreground">Signature</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                I build systems that feel <span className="text-foreground">fast</span>, look{" "}
                <span className="text-foreground">premium</span>, and scale cleanly.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { k: "Focus", v: "SaaS + dashboards" },
                { k: "Stack", v: "Next.js / Django / GraphQL" },
                { k: "Mobile", v: "React Native (Expo)" },
                { k: "DB", v: "Postgres / MySQL / MongoDB" },
              ].map((x) => (
                <div key={x.k} className="rounded-3xl border border-white/10 bg-white/4 p-4">
                  <p className="text-xs font-medium text-muted-foreground">{x.k}</p>
                  <p className="mt-1 text-sm font-semibold">{x.v}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition hover:opacity-90"
              >
                Hire Me <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-medium transition hover:bg-white/8"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main: bento narrative + timeline */}
      <div className="lg:col-span-8">
        <motion.div
          className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-6 sm:p-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="pointer-events-none absolute -left-24 -top-24 size-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 size-[560px] rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-medium text-muted-foreground">About</p>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Full‑stack developer who ships production systems — with premium UI.
            </h1>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-4xl border border-white/10 bg-white/4 p-5">
                <p className="text-sm font-semibold">What I do</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{site.about[0]}</p>
              </div>
              <div className="rounded-4xl border border-white/10 bg-white/4 p-5">
                <p className="text-sm font-semibold">How I work</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{site.about[1]}</p>
              </div>
              <div className="rounded-4xl border border-white/10 bg-white/4 p-5 md:col-span-2">
                <p className="text-sm font-semibold">What you get</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{site.about[2]}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 rounded-4xl border border-white/10 bg-white/4 p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Timeline</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                How I build
              </h2>
            </div>
            <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              See proof →
            </Link>
          </div>

          <div className="mt-6 grid gap-4">
            {timeline.map((step, i) => (
              <motion.div
                key={step.title}
                className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-5"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <div className="pointer-events-none absolute -inset-24 bg-linear-to-br from-cyan-400/10 via-violet-400/8 to-emerald-400/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <p className="text-sm font-semibold">{step.title}</p>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

