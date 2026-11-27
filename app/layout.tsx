import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Onest, Russo_One } from 'next/font/google'
import './globals.css'

const onest = Onest({ subsets: ['latin', 'cyrillic'], variable: '--font-onest' })
const russo = Russo_One({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-russo',
})

export const metadata: Metadata = {
  title: 'DAU MOTORS — автозапчасти: двигатели, кузовные детали, пороги',
  description:
    'DAU MOTORS: двигатели на Kia, Hyundai, Chevrolet; кузовные детали на Jetour X70, X70 Plus, X90; пороги на Jetour. Заказ через WhatsApp.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#262628',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${onest.variable} ${russo.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
