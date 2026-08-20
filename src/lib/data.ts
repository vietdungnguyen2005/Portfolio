import { Database, Github, Linkedin, Mail, Repeat2, ShieldCheck } from 'lucide-react';

export const profile = {
  name: 'Viet Dung Nguyen',
  role: 'Backend Engineer Intern',
  headline: 'I build reliable Java services around the business rules that cannot be allowed to fail.',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'vietdungnguyen2005@gmail.com',
  phone: '(+84) 972 347 459',
  github: 'https://github.com/vietdungnguyen2005',
  linkedin: 'https://www.linkedin.com/in/nguyen-viet-dung-b4a723355',
  portfolio: 'https://viet-dung-portfolio.pages.dev'
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export const skillTags = [
  'Java 21',
  'Spring Boot',
  'REST APIs',
  'PostgreSQL',
  'Redis',
  'SQL',
  'JPA / JDBC',
  'Spring Security',
  'Flyway',
  'Maven',
  'JUnit 5',
  'Testcontainers'
];

export const highlights = [
  {
    icon: Database,
    title: 'Data correctness',
    text: 'Transactions, row locks, idempotency, and explicit invariants keep state correct under retries and concurrency.'
  },
  {
    icon: Repeat2,
    title: 'Controlled recovery',
    text: 'Failures become visible work with bounded retries, quarantine, reconciliation, and auditable recovery paths.'
  },
  {
    icon: ShieldCheck,
    title: 'Trust boundaries',
    text: 'Authorization, server-owned decisions, validation, and integration tests protect business operations end to end.'
  }
];

export const techFilters = ['All', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Spring Batch', 'Resilience4j'];

export const projects = [
  {
    title: 'V-Core SaaS',
    focus: 'Concurrency & consistency',
    description:
      'A multi-tenant project workspace whose backend keeps concurrent Kanban operations correct under contention, retries, and stale client state.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/vietdungnguyen2005/Project1',
    demo: 'https://v-core-saas.pages.dev',
    evidence: 'https://github.com/vietdungnguyen2005/Project1/blob/main/docs/evidence/README.md',
    image: '/images/project-vcore.webp',
    accent: 'bg-lemon',
    role: 'Backend case study',
    period: '2026',
    challenge: 'Prevent two valid concurrent task moves from silently exceeding a column WIP limit while preserving tenant isolation and retry safety.',
    solution: 'Implemented short PostgreSQL transactions with deterministic row locking, optimistic versions, durable idempotency records, role-based workspace access, and transactional audit/outbox writes.',
    results: [
      'Concurrent moves resolve to exactly one success and one conflict',
      'Committed task count never exceeds the configured WIP limit',
      'Retried mutations reuse their original result without duplicating state'
    ]
  },
  {
    title: 'V-Market',
    focus: 'Legacy modernization',
    description:
      'A commerce backend that combines transactional checkout with a controlled migration path for Japanese CP932 inventory feeds.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Spring Batch'],
    github: 'https://github.com/vietdungnguyen2005/Project2',
    demo: 'https://v-market.vmarket-vietdung2005.workers.dev',
    evidence: 'https://github.com/vietdungnguyen2005/Project2/blob/main/docs/EVIDENCE.md',
    image: '/images/project-vmarket.webp',
    accent: 'bg-mint',
    role: 'Backend case study',
    period: '2026',
    challenge: 'Modernize a fragile legacy file exchange without letting malformed rows poison valid inventory updates or interrupt daily commerce.',
    solution: 'Built restartable Spring Batch ingestion with explicit Windows-31J decoding, staged validation, quarantine, checksum deduplication, checkpoints, and post-import reconciliation. Checkout locks inventory in deterministic SKU order.',
    results: [
      'Valid rows apply while invalid rows remain quarantined and explainable',
      'Concurrent checkout cannot oversell inventory',
      'Reconciliation exposes migration drift instead of hiding it'
    ]
  },
  {
    title: 'V-Pulse',
    focus: 'Failure containment',
    description:
      'A payment reliability backend that contains slow or unhealthy downstream rails and makes uncertain work recoverable by operators.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Resilience4j'],
    github: 'https://github.com/vietdungnguyen2005/Project3',
    demo: 'https://v-pulse-payment-ops.vmarket-vietdung2005.workers.dev',
    evidence: 'https://github.com/vietdungnguyen2005/Project3/blob/main/docs/PAIN_POINT_PROOF.md',
    image: '/images/project-vpulse.webp',
    accent: 'bg-lilac',
    role: 'Backend case study',
    period: '2026',
    challenge: 'Handle ambiguous payment timeouts without blind retries, duplicate effects, long database transactions, or invisible stuck work.',
    solution: 'Separated short state transitions from downstream I/O, bounded calls with timeouts, circuit breakers and bulkheads, parked uncertain instructions, and claimed authorized replay atomically.',
    results: [
      'A timed-out payment is persisted as PARKED rather than lost',
      'Authorized replay transitions the same instruction to SUCCEEDED',
      'Attempt history preserves TIMEOUT then AUTHORIZED for auditability'
    ]
  }
];

export const experiences = [
  {
    title: 'Full-stack Developer Intern',
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
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail }
];
