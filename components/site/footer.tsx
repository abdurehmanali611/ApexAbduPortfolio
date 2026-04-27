import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

import { resume, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-white/2">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex size-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold">
                AA
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">{site.name}</p>
                <p className="text-sm text-muted-foreground">{site.role}</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Full‑stack developer building modern web + mobile systems with premium UI polish and performance-first architecture.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition hover:opacity-90"
              >
                Hire Me <ArrowRight className="ml-2 size-4" />
              </Link>
              <a
                href={resume.publicPath}
                download
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium transition hover:bg-white/8"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Quick links</p>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <Link className="hover:text-foreground" href="/about">About</Link>
              <Link className="hover:text-foreground" href="/projects">Projects</Link>
              <Link className="hover:text-foreground" href="/skills">Skills</Link>
              <Link className="hover:text-foreground" href="/testimonials">Testimonials</Link>
              <Link className="hover:text-foreground" href="/contact">Contact</Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold">Contact</p>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="size-4 opacity-70" />
                <span>{site.location}</span>
              </div>
              <Link className="flex items-center gap-2 hover:text-foreground" href={`mailto:${site.contact.email}`}>
                <Mail className="size-4 opacity-70" />
                <span>{site.contact.email}</span>
              </Link>
              <Link className="flex items-center gap-2 hover:text-foreground" href={`tel:${site.contact.phone}`}>
                <Phone className="size-4 opacity-70" />
                <span>{site.contact.phone}</span>
              </Link>
            </div>

            <div className="pt-2">
              <p className="text-sm font-semibold">Social</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                {site.socials.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="text-xs">
            Built with Next.js + Tailwind + shadcn — optimized for SEO and premium UX.
          </p>
        </div>
      </div>
    </footer>
  );
}

