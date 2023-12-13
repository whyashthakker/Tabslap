import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './(marketing)/_components/google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Olly: Chrome Extension to turn your browser into a personal assistant.',
  description: 'safeGPT is a Chrome Extension that turns your browser into a personal assistant. It redacts sensitive information, generates content on the fly, and deep dives into topics. All in your browser.',
  keywords: 'safeGPT, GPT-3, OpenAI, Chrome Extension, Personal Assistant, AI, Artificial Intelligence, Redact, Generate, Deep Dive, Topics, Browser, Chrome, Extension, Chrome Extension, Chrome Extension Store, Chrome Web Store, Chrome Store, Chrome Web Store Extension, Chrome Extension Web Store, Chrome Extension Store, Chrome Extension'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics ga_id="G-HCYCJPP2Z4" />
        {children}
        </body>
    </html>
  )
}
