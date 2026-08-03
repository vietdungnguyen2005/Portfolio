import { Code2, Figma, Gauge, Github, Layers3, Linkedin, Mail, MapPin, Phone, Rocket, Sparkles } from 'lucide-react';

export const profile = {
  name: 'Viet Dung Nguyen',
  role: 'Frontend Developer',
  headline: 'I turn wild interface ideas into fast, friendly web experiences.',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'vietdungnguyen2005@gmail.com',
  phone: '(+84) 972 347 459',
  github: 'https://github.com/vietdungnguyen2005',
  linkedin: 'https://www.linkedin.com/in/nguyen-viet-dung-b4a723355',
  portfolio: 'https://viet-dung-portfolio.pages.dev',
  resume: '/cv-nguyen-viet-dung.pdf'
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export const skillTags = [
  'React 19',
  'Next.js 16',
  'TypeScript',
  'Tailwind CSS v4',
  'Framer Motion',
  'TanStack Query',
  'TanStack Table',
  'TanStack Virtual',
  'Zustand',
  'Cloudflare Workers',
  'Cloudflare Pages',
  'Cloudflare D1',
  'Cloudflare R2',
  'Playwright',
  'Vitest',
  'Sanity CMS',
  'Google Maps API',
  'Accessibility',
  'Git',
  'Figma'
];

export const highlights = [
  {
    icon: Rocket,
    title: 'Product-minded',
    text: 'I care about the job behind each screen, not only the pixels on top of it.'
  },
  {
    icon: Gauge,
    title: 'Performance-first',
    text: 'Lighthouse 100/100/100/100 on production. I keep motion playful while protecting Core Web Vitals.'
  },
  {
    icon: Layers3,
    title: 'Clean systems',
    text: 'Reusable components, typed data, and design tokens keep the codebase easy to extend.'
  }
];

export const techFilters = ['All', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'Cloudflare', 'TanStack'];

export const projects = [
  {
    title: 'V-Core SaaS',
    description:
      'A Kanban project management workspace deployed on Cloudflare Pages with a D1-backed Worker API. Achieved perfect Lighthouse scores on the live production deployment.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Cloudflare'],
    github: 'https://github.com/vietdungnguyen2005/Project1',
    demo: 'https://v-core-saas.pages.dev',
    image: '/images/project-vcore.webp',
    accent: 'bg-lemon',
    role: 'Solo Developer',
    period: '2025',
    challenge: 'Build a production-grade Kanban SaaS with real-time updates, persistent storage, and zero backend infrastructure costs.',
    solution: 'Used Cloudflare Pages + D1 Worker API for serverless backend. Implemented debounced commits, transition-wrapped state updates, and memoized rendering to keep inline task updates under 50ms for 10,000+ items.',
    results: [
      'Lighthouse 100/100/100/100 on live production',
      '10,000+ items with inline updates under 50ms',
      'Single cleanup registry prevents memory leaks on long-lived tabs'
    ]
  },
  {
    title: 'V-Market',
    description:
      'A multi-vendor e-commerce storefront deployed on Cloudflare Workers with server-validated order persistence to Cloudflare R2 and Playwright E2E tests across 3 viewports.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Cloudflare'],
    github: 'https://github.com/vietdungnguyen2005/Project2',
    demo: 'https://v-market.vmarket-vietdung2005.workers.dev',
    image: '/images/project-vmarket.webp',
    accent: 'bg-mint',
    role: 'Solo Developer',
    period: '2025',
    challenge: 'Build a full e-commerce platform with cart persistence, order validation, and responsive design — all on edge infrastructure.',
    solution: 'Deployed on Cloudflare Workers via OpenNext. Server-validated orders persisted to R2. Eliminated CLS with next/image AVIF/WebP responsive srcset and fixed aspect-ratio wrappers. Resolved cart API race conditions using per-product AbortController cancellation and sequenced optimistic TanStack Query mutations.',
    results: [
      'Zero CLS, optimized LCP on 3G/4G networks',
      'Playwright E2E tests across 320px, 390px, and desktop viewports',
      'Provable stale-payload rejection on cart mutations'
    ]
  },
  {
    title: 'V-Pulse',
    description:
      'An enterprise fintech transaction ledger dashboard rendering 100,000 rows using TanStack Table with row virtualization and server-windowed fetching.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'TanStack'],
    github: 'https://github.com/vietdungnguyen2005/Project3',
    demo: 'https://v-pulse-ledger-dashboard.vmarket-vietdung2005.workers.dev',
    image: '/images/project-vpulse.webp',
    accent: 'bg-lilac',
    role: 'Solo Developer',
    period: '2025',
    challenge: 'Render and interact with 100,000+ transaction rows in a fintech dashboard without exposing backend tokens to the client.',
    solution: 'Built with TanStack Table + TanStack Virtual for row virtualization and server-windowed fetching. Implemented a server-side Next.js API brokerage layer that proxies sensitive ledger endpoints — no backend tokens ever reach the client. Added nonce-based Content Security Policy and console removal.',
    results: [
      '100,000 rows rendered with smooth virtualization',
      'Zero backend token exposure via server-side API proxy',
      'Realtime transaction streaming with synthetic demo mode fallback'
    ]
  }
];

export const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Phu Quoc Times',
    location: 'Phu Quoc, Vietnam',
    period: 'July 2026 – Present',
    highlights: [
      'Developed a multilingual (English/Vietnamese) travel website from Figma designs using Next.js (App Router), React 19, and TypeScript, translating mockups into 30+ reusable, responsive components styled with SCSS Modules and Tailwind CSS',
      'Integrated Sanity headless CMS via GROQ queries for dynamic, editor-managed content (pages, blogs, attractions), and implemented i18n with next-intl for localized routing in 2 languages',
      'Built an accommodation discovery page consuming a REST API with search, multi-criteria filters, sorting, and pagination',
      'Integrated Google Maps API for interactive maps and reverse geocoding; added animations and carousels with Framer Motion and Swiper'
    ]
  }
];

export const education = [
  {
    degree: 'Bachelor of Science in Information Security',
    school: 'University of Information Technology — VNU-HCM',
    location: 'Ho Chi Minh City, Vietnam',
    period: '2023 – Present',
    details: [
      'GPA: 8.24/10',
      'English: IELTS 6.0 (20/08/2022)',
      'Relevant Coursework: Web-Based Application Development, Web and Application Security, Data Structures and Algorithms'
    ]
  }
];

export const socials = [
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Download CV', href: profile.resume, icon: Code2 }
];