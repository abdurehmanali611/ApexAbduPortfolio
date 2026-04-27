import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/site/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Abdurehman Ali.",
};

export default function ContactPage() {
  return (
    <section className="page-shell py-14">
      <div className="grid gap-10 md:grid-cols-[0.9fr,1.1fr] md:items-start">
        <div className="space-y-6">
          <div className="bento p-6 sm:p-10">
            <div className="pointer-events-none absolute -left-24 -top-24 size-[520px] rounded-full bg-violet-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 -bottom-24 size-[560px] rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative space-y-2">
              <p className="section-kicker">Contact</p>
              <h1 className="section-title">Tell me what you’re building.</h1>
              <p className="muted-lead">
                I’ll reply fast. If it’s a good fit, we’ll ship something that looks expensive — and works perfectly.
              </p>
            </div>
          </div>

          <div className="group bento p-6">
            <div className="bento-glow" />
            <p className="text-sm font-semibold">Direct</p>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Email:</span>{" "}
                <Link className="hover:underline" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </Link>
              </p>
              <p>
                <span className="font-medium text-foreground">Phone:</span>{" "}
                <Link className="hover:underline" href={`tel:${site.contact.phone}`}>
                  {site.contact.phone}
                </Link>
              </p>
              <p>
                <span className="font-medium text-foreground">WhatsApp / Telegram:</span>{" "}
                {site.contact.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="group bento p-6">
          <div className="bento-glow" />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

