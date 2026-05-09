import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'
import { SmoothScroll } from '@/components/ui/SmoothScroll'
import { AnimatedCursor } from '@/components/ui/AnimatedCursor'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alex Johnson — Software Engineer',
  description:
    'Developer passionate about building modern, accessible, and well-structured digital experiences. Based in San Francisco, USA.',
  authors: [{ name: 'Alex Johnson' }],
  keywords: ['developer', 'software engineer', 'react', 'next.js', 'typescript', 'san francisco'],
  themeColor: '#FF8A1F',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Alex Johnson — Software Engineer',
    description: 'Building modern digital experiences with performance, creativity, and clean architecture.',
    siteName: 'Alex Johnson',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Johnson — Software Engineer',
    description: 'Building modern digital experiences with performance, creativity, and clean architecture.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jetbrainsMono.variable} ${inter.variable} dark`}>
      <body className={inter.className}>
        <I18nProvider>
          <SmoothScroll>
            <ScrollProgress />
            <AnimatedCursor />
            {children}
          </SmoothScroll>
        </I18nProvider>
      </body>
    </html>
  )
}
