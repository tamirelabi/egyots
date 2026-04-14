import type { Metadata } from 'next'
import { Outfit, Cormorant_Garamond, Poppins } from 'next/font/google'
import '@/styles/globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const outfit = Outfit({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-headline' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-subheading' })
const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-body' })

export const metadata: Metadata = {
  metadataBase: new URL('https://egyots.vercel.app'),
  title: { default: 'EGYOTS | Oil & Gas Engineering Solutions', template: '%s | EGYOTS' },
  description: 'Engineering and manufacturing innovative solutions for the oil, gas, and renewable energy sectors since 2002.',
  openGraph: { siteName: 'EGYOTS - Egypt Oil Tools & Services', type: 'website', locale: 'en_US' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cormorant.variable} ${poppins.variable} font-body text-foreground bg-background flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
