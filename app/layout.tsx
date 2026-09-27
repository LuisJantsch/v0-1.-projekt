import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premium Fahrzeugaufbereitung | Stefan Detailing',
  description: 'Professionelle Fahrzeugaufbereitung mit 3 Jahren Keramikversiegelung-Garantie. Leasingrückgabe-vorbereitung, Lackkorrektur und mehr. Jetzt buchen.',
  generator: 'v0.app',
  keywords: ['Fahrzeugaufbereitung', 'Keramikversiegelung', 'Leasingrückgabe', 'Lackkorrektur', 'Premium Detailing'],
  openGraph: {
    title: 'Premium Fahrzeugaufbereitung | Stefan Detailing',
    description: 'Professionelle Fahrzeugaufbereitung mit garantierter Qualität für Ihre Leasingrückgabe.',
    type: 'website',
    locale: 'de_DE',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#e6ff00' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
