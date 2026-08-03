import type { Metadata, Viewport } from 'next';

import '@/app/globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { profile } from '@/lib/data';

const title = `${profile.name} | Frontend Developer Portfolio`;
const description =
  'Playful, performance-minded Frontend Developer portfolio by Viet Dung Nguyen, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.';

export const metadata: Metadata = {
  metadataBase: new URL('https://viet-dung-portfolio.pages.dev'),
  title,
  description,
  applicationName: title,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
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
        alt: `${profile.name} Frontend Developer Portfolio`
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
    'React 19',
    'Next.js 16',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'TanStack Query',
    'TanStack Table',
    'Cloudflare Workers',
    'Cloudflare Pages',
    'Accessibility'
  ],
  alumni: {
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
