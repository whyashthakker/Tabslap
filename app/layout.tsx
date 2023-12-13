import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './(marketing)/_components/google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  "title": "Olly: AI-Driven Social Media Assistant & Virality Enhancer Chrome Extension",
  "description": "Olly redefines social media engagement by not only creating compelling comments but also assessing virality scores and generating similar posts. This Chrome Extension serves as your personal AI assistant, optimizing your presence on platforms like LinkedIn, Twitter, Reddit, and Facebook. With Olly, you get personalized interactions, time-saving commenting, and insights into what makes content viral. It's designed to grow your following by strategically enhancing engagement and providing content ideas that resonate with your audience.",
  "keywords": "Olly, AI Social Media Assistant, Virality Score, Content Generation, Chrome Extension, Social Media Engagement, AI, Artificial Intelligence, Smart Commenting, LinkedIn, Twitter, Reddit, Facebook, Viral Content, Online Presence, Audience Growth, Personalized Interactions, Browser Extension, Engagement Analytics, Post Generation, Trend Analysis"
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
