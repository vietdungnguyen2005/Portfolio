import type { Metadata, Viewport } from 'next';

import '@/app/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { profile } from '@/lib/data';

const title = `${profile.name} | Backend Engineer Intern`;
const description =
  `Backend Engineer Intern portfolio by ${profile.name}, featuring Java, Spring Boot, PostgreSQL, Redis, concurrency control, legacy modernization, and resilient payment workflows.`;

export const metadata: Metadata = {
  metadataBase: new URL('https://viet-dung-portfolio.pages.dev'),
  title,
  description,
  applicationName: title,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    'Backend Engineer',
    'Backend Engineer Intern',
    'Java Developer',
    'Java 21',
    'Spring Boot',
    'PostgreSQL',
    'Redis',
    'REST API',
    'Testcontainers',
    'Spring Batch',
    'Resilience4j',
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
        alt: `${profile.name} Backend Engineer Portfolio`
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
    'PostgreSQL',
    'Redis',
    'REST API design',
    'Transaction management',
    'Concurrency control',
    'Spring Batch',
    'Resilience4j',
    'Testcontainers'
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
