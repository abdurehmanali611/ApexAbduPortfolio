export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  href?: string;
  github?: string;
  githubBackend?: string;
  image: {
    src: string;
    alt: string;
  };
  highlights: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
};

export const site = {
  name: "Abdurehman Ali",
  role: "Full‑Stack Web & Mobile App Developer",
  location: "Addis Ababa, Ethiopia",
  cta: {
    primary: "Hire Me",
    resume: "Download CV",
  },
  contact: {
    email: "abdurehmanali611@gmail.com",
    phone: "+251935000642",
    whatsapp: "+251935000642",
    telegram: "+251935000642",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/abdurehmanali611" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abdurehman-ali-592238281" },
  ] satisfies SocialLink[],
  skills: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "shadcn/ui",
    "Django",
    "GraphQL",
    "Prisma",
    "NestJS",
    "React Native (Expo)",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Odoo",
  ],
  about: [
    "I’m Abdurehman Ali — a full‑stack developer who ships production‑ready web and mobile products with a focus on speed, clarity, and real-world usability.",
    "I build end‑to‑end systems: dashboards, SaaS platforms, APIs, auth flows, and data models — then polish the UX until it feels effortless.",
    "My sweet spot is turning messy requirements into clean architecture, predictable performance, and interfaces that look premium on every screen size.",
  ],
  projects: [
    {
      slug: "carepack",
      title: "CarePack — Patient Management System",
      tagline: "Full‑stack health workflow platform (in progress / private deployment).",
      description:
        "A patient management system designed to streamline intake, patient records, and internal workflows with a modern UI and scalable API foundation.",
      stack: ["Next.js", "NestJS", "MongoDB"],
      github: "https://github.com/abdurehmanali611/CarePack",
      githubBackend: "https://github.com/abdurehmanali611/CarePack_BackEnd",
      image: {
        src: "/assets/carepack.svg",
        alt: "CarePack project placeholder preview",
      },
      highlights: [
        "Modern component-driven UI with reusable form patterns",
        "Backend designed for clean domain boundaries and growth",
        "Built as a full‑stack system with real product constraints",
      ],
    },
    {
      slug: "cafi",
      title: "Cafi — Cafe Portfolio Website",
      tagline: "A moody, modern brand site with polished sections.",
      description:
        "A responsive marketing site built end‑to‑end with a strong visual identity, smooth section transitions, and content designed to convert visitors.",
      stack: ["Next.js"],
      href: "https://cafe-rho-seven.vercel.app/",
      image: {
        src: "/assets/cafi.PNG",
        alt: "Cafi project placeholder preview",
      },
      highlights: ["High-end landing page layout", "Responsive gallery + menu sections", "Production-ready UI polish"],
    },
    {
      slug: "hotcol",
      title: "HotCol — SaaS Hotel Management",
      tagline: "Operations dashboard with auth-first workflow.",
      description:
        "A SaaS-style hotel management system that focuses on fast operator flows, clean data boundaries, and a modern admin experience.",
      stack: ["Next.js", "GraphQL", "Prisma", "MySQL"],
      href: "https://hotcol.vercel.app/",
      image: {
        src: "/assets/hotcol.PNG",
        alt: "HotCol project placeholder preview",
      },
      highlights: ["GraphQL-driven data layer", "Prisma-backed schema design", "Admin UX optimized for speed"],
    },
    {
      slug: "medicare",
      title: "Medicare — SaaS Pharmacy Management",
      tagline: "Inventory + sales register + reporting.",
      description:
        "A SaaS pharmacy system built to track inventory, run sales quickly, and surface revenue/profit insights with a clean dashboard UI.",
      stack: ["Next.js", "Django"],
      href: "https://pharmacy-pi-fawn.vercel.app/",
      image: {
        src: "/assets/pharmacy.PNG",
        alt: "Medicare project placeholder preview",
      },
      highlights: ["Inventory + sales workflows", "Reporting-focused UI", "Designed for real operations"],
    },
  ] satisfies Project[],
  testimonials: [
    {
      name: "Atlabachew Tadesse",
      role: "Coworker",
      rating: 5,
      quote:
        "Abdurehman is the kind of developer who finishes the hard parts — clean architecture, sharp UI, and reliable delivery. He’s fast, focused, and always improves the product beyond the spec.",
    },
    {
      name: "Bereket Shimekt",
      role: "CEO of Strivein",
      rating: 5,
      quote:
        "Strong ownership, excellent problem-solving, and premium UI execution. Abdurehman consistently turns ideas into working systems that feel polished and professional.",
    },
  ] satisfies Testimonial[],
} as const;

export const resume = {
  filename: "Abdurehman-Ali-CV.pdf",
  // Put a PDF at `public/resume/Abdurehman-Ali-CV.pdf` for production deployments.
  publicPath: "/resume/Abdurehman-Ali-CV.pdf",
} as const;

