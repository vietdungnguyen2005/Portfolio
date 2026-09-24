import type { Metadata, Viewport } from 'next';

import '@/app/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { profile } from '@/lib/data';

const title = `${profile.name} | Java Backend & Full-stack Developer`;
const description =
  `Portfolio of ${profile.name}, an Information Security student and full-stack developer intern building production web applications and Java/Spring Boot services with React, Next.js, PostgreSQL, and Redis.`;

export const metadata: Metadata = {
  metadataBase: new URL('https://viet-dung-portfolio.pages.dev'),
  title,
  description,
  applicationName: title,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    'Software Developer',
    'Software Engineer',
    'Full-stack Developer',
    'Backend Developer',
    'Java Developer',
    'Java 21',
    'Spring Boot',
    'PostgreSQL',
    'Redis',
    'REST API',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio'
  ],
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: title,
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: `${profile.name} Software Developer Portfolio`
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff5cc' },
    { media: '(prefers-color-scheme: dark)', color: '#121124' }
  ]
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  url: 'https://viet-dung-portfolio.pages.dev/',
  email: profile.email,
  telephone: profile.phone,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    'Java 21',
    'Spring Boot',
    'TypeScript',
    'React',
    'Next.js',
    'PostgreSQL',
    'Redis',
    'REST API design',
    'Software testing',
    'Web application development'
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Information Technology — VNU-HCM'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
