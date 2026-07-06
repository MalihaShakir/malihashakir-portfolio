import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'
import { Navigation } from '@/components/Navigation'
import { CursorGlow } from '@/components/CursorGlow'
import { ScrollProgress } from '@/components/ScrollProgress'
import { PageLoader } from '@/components/PageLoader'
import { personSchema, organizationSchema, websiteSchema } from './structured-data'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const inter = Inter({ 
  variable: '--font-inter', 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Maliha Shakir — Full-Stack Engineer & Developer',
  description: 'Full-stack web developer specializing in premium websites, eCommerce platforms, and AI automation. Building scalable, high-performance digital experiences.',
  keywords: ['Full Stack Developer', 'Web Developer', 'React Developer', 'Next.js', 'Mobile Developer', 'AI Automation', 'eCommerce'],
  authors: [{ name: 'Maliha Shakir' }],
  creator: 'Maliha Shakir',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://malihashakir.dev',
    siteName: 'Maliha Shakir',
    title: 'Maliha Shakir — Full-Stack Engineer',
    description: 'Full-stack web developer specializing in premium websites, eCommerce platforms, and AI automation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maliha Shakir Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maliha Shakir — Full-Stack Engineer',
    description: 'Full-stack web developer building premium digital experiences.',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <PageLoader />
        <ScrollProgress />
        <CursorGlow />
        <Navigation />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
