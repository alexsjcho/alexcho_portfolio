import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const isProduction = process.env.NODE_ENV === 'production'
const repository = 'alexcho_portfolio'
const basePath = isProduction ? `/${repository}` : ''
const siteUrl = isProduction 
  ? `https://alexsjcho.github.io${basePath}` 
  : 'http://localhost:3000'
const imageUrl = `${siteUrl}${basePath}/img/muirwood.jpg`

export const metadata: Metadata = {
  title: 'Alex Cho Portfolio',
  description: 'Alex Cho Portfolio',
  icons: {
    icon: 'img/about.png',
  },
  openGraph: {
    title: 'Alex Cho Portfolio',
    description: 'Alex Cho Portfolio',
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: 'Alex Cho Portfolio',
      },
    ],
    url: siteUrl,
    type: 'website',
    siteName: 'Alex Cho Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Cho Portfolio',
    description: 'Alex Cho Portfolio',
    images: [imageUrl],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
