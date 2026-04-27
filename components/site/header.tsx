"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";

import { resume, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/site/theme-toggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-background/70 to-transparent backdrop-blur" />
      <div className="page-shell relative flex items-center justify-between gap-4 py-3">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="relative inline-flex size-7 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <span className="absolute inset-0 rounded-xl bg-linear-to-br from-cyan-400/20 via-violet-400/15 to-emerald-400/15 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative text-sm font-semibold">AA</span>
          </span>
          <span className="text-sm font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/4 p-1 backdrop-blur md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:text-foreground",
                  "hover:bg-white/6",
                  active && "bg-white/10 text-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">
              {site.cta.primary} <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href={resume.publicPath} download>
              {site.cta.resume}
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <SheetHeader>
                <SheetTitle className="text-left">{site.name}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-1">
                {nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-xl px-3 py-2 text-sm transition hover:bg-white/5",
                        active && "bg-white/8",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6 grid gap-2">
                <Button asChild>
                  <Link href="/contact">
                    {site.cta.primary} <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={resume.publicPath} download>
                    {site.cta.resume}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

