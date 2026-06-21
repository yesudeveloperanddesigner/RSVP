import { Playfair_Display, Cormorant_Garamond, Great_Vibes } from 'next/font/google'
import React from 'react'

import './styles.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata = {
  description: 'You are cordially invited to celebrate the wedding of Cheley & Denz.',
  title: 'Cheley & Denz | Wedding Invitation',
  openGraph: {
    title: 'Cheley & Denz | Wedding Invitation',
    description: 'You are cordially invited to celebrate the wedding of Cheley & Denz.',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${greatVibes.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration='manual';window.scrollTo(0,0);document.body.style.overflow='hidden'`,
          }}
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
