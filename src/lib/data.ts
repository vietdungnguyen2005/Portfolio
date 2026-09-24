import { Braces, Database, Github, Linkedin, Mail, PackageCheck } from 'lucide-react';

export const profile = {
  name: 'Nguyen Viet Dung',
  brand: 'vietdung',
  role: 'Software Developer',
  headline:
    'Information Security student and full-stack developer intern with production web experience and hands-on Java/Spring Boot projects across APIs, data, testing, and deployment.',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'vietdungnguyen2005@gmail.com',
  phone: '(+84) 972 347 459',
  github: 'https://github.com/vietdungnguyen2005',
  linkedin: 'https://www.linkedin.com/in/nguy%E1%BB%85n-vi%E1%BB%87t-d%C5%A9ng-b4a723355/',
  portfolio: 'https://viet-dung-portfolio.pages.dev'
};

export function emailUrl(subject?: string) {
  if (!subject) return `mailto:${profile.email}`;
  return `mailto:${profile.email}?${new URLSearchParams({ subject }).toString()}`;
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export const skillGroups = [
  { title: 'Backend', accent: 'bg-mint', skills: ['Java 21', 'Spring Boot', 'REST APIs', 'JPA / Hibernate'] },
  { title: 'Web', accent: 'bg-peach', skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'HTML / CSS'] },
  { title: 'Data, testing & delivery', accent: 'bg-lemon', skills: ['PostgreSQL', 'Redis', 'SQL', 'JUnit 5', 'Testcontainers', 'Git', 'Docker'] }
];

export const highlights = [
  {
    icon: Braces,
    title: 'Backend development',
    text: 'REST APIs, business logic, validation, persistence, and third-party integrations.'
  },
  {
    icon: Database,
    title: 'Data & reliability',
    text: 'Transactions, concurrency handling, caching, idempotency, and data processing.'
  },
  {
    icon: PackageCheck,
    title: 'Testing & delivery',
    text: 'JUnit, Testcontainers, Git, CI, Docker, and production deployment.'
  }
];

export const techFilters = ['All', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Spring Batch', 'Resilience4j'];

export const projects = [
  {
    title: 'V-Market',
    focus: 'Transactional commerce & data ingestion',
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
    challenge: 'Model checkout and Japanese vendor-file ingestion so concurrent orders cannot oversell stock and invalid rows stay visible.',
    solution: 'Built transactional checkout with PostgreSQL row locks and a Spring Batch tasklet that decodes Windows-31J files, stages rows, applies small committed groups, and records rejects and reconciliation differences.',
    results: [
      'Valid rows apply while invalid rows remain quarantined and explainable',
      'Concurrent checkout cannot oversell inventory',
      'Reconciliation exposes migration drift instead of hiding it'
    ]
  },
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
    solution: 'Implemented short PostgreSQL transactions with target-column locking, optimistic versions, durable idempotency records, workspace access checks, and transactional audit/outbox writes.',
    results: [
      'Concurrent moves resolve to exactly one success and one conflict in the tested scenario',
      'Committed task count stays within the configured WIP limit in the concurrency test',
      'Retried mutations reuse their original result without duplicating state'
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
    challenge: 'Make slow and uncertain payment operations visible without holding a database transaction during the downstream call.',
    solution: 'Separated short state transitions from downstream I/O, bounded calls with timeouts, circuit breakers and bulkheads, parked uncertain instructions, and claimed authorized replay atomically.',
    results: [
      'A timed-out payment is persisted as PARKED rather than lost',
      'Authorized replay transitions the same instruction to SUCCEEDED',
      'Attempt history preserves TIMEOUT then AUTHORIZED for auditability'
    ]
  }
];

type ExperienceHighlight = {
  before: string;
  link?: { label: string; href: string };
  after?: string;
};

export const experiences: {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: ExperienceHighlight[];
}[] = [
  {
    title: 'Full-stack Developer Intern',
    company: 'Phu Quoc Times Company Limited',
    location: 'Phu Quoc, Vietnam',
    period: 'July 2026 – Present',
    highlights: [
      {
        before: 'Independently built, deployed, and maintain ',
        link: { label: 'ValentinaPhuQuoc.com', href: 'https://valentinaphuquoc.com/' },
        after: ', a production bilingual resort website and booking platform using Next.js, TypeScript, Payload CMS, PostgreSQL, and Redis.'
      },
      {
        before: 'Developed booking and room-availability workflows integrated with ezCloud, including availability checks, email verification, duplicate-request protection, and staff-managed booking processing.'
      },
      {
        before: 'Implemented PostgreSQL transactions, Redis caching and rate limiting, automated testing in CI, and Docker-based deployment.'
      },
      {
        before: 'Contributed frontend features to ',
        link: { label: 'PhuQuocTimes.com', href: 'https://phuquoctimes.com/' },
        after: ', including a responsive Tour page and reusable filtering components built with React, Next.js, TypeScript, and SCSS Modules.'
      }
    ]
  }
];

export const education = [
  {
    degree: "Bachelor's Degree in Information Security",
    school: 'University of Information Technology — VNU-HCM',
    location: 'Ho Chi Minh City, Vietnam',
    period: '2023 – Expected Mar 2027',
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
  { label: 'Email', href: emailUrl(), icon: Mail }
];
