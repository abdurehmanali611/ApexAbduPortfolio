import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abdurehman Ali — Full‑Stack Developer",
    template: "%s — Abdurehman Ali",
  },
  description:
    "Full‑stack web & mobile app developer building performant, modern systems with Next.js, Django, GraphQL, Prisma, and React Native.",
  openGraph: {
    title: "Abdurehman Ali — Full‑Stack Developer",
    description:
      "Full‑stack web & mobile app developer building performant, modern systems with Next.js, Django, GraphQL, Prisma, and React Native.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdurehman Ali — Full‑Stack Developer",
    description:
      "Full‑stack web & mobile app developer building performant, modern systems with Next.js, Django, GraphQL, Prisma, and React Native.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
