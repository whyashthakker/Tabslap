import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './(marketing)/_components/google-analytics'
import FacebookPixelScript from './(marketing)/_components/fb-pixel-script'
import SmartlookScript from './(marketing)/_components/smartlook-script'
import localFont from "next/font/local";
// const inter = Inter({ subsets: ['latin'] })
import { PostHogProvider } from './web/providers/PostHogProvider'
import { Suspense } from "react";
import PostHogPageView from './(marketing)/_components/posthog-page-view'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});
const calFont = localFont({
  src: "../styles/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  "metadataBase": new URL("https://tabslap.me"),
  "title": "TabSlap: Your Ultimate Chrome Tab Productivity Extension",
  "description": "TabSlap is a powerful Chrome tab productivity extension designed to help users stay focused on their tasks by monitoring their open tabs and providing timely reminders. With its intuitive design and robust functionality, TabSlap is your go-to tool for enhancing productivity and maintaining focus.",
  "keywords": "TabSlap, Chrome Extension, Productivity, Tab Monitoring, Reminders, Focus, Task Prioritization, Efficiency, Developers, Students, Professionals",
  "appLinks": {
    web: {
      url: "https://tabslap.me",
      should_fallback: false,
    },
  },
  "generator": "TabSlap",
  "referrer": "no-referrer-when-downgrade",
  "authors": [
    {
      name: "TabSlap Team",
      url: "https://tabslap.me/team",
    }
  ],
  "creator": 'TabSlap',
  "publisher": "TabSlap",
  "openGraph": {
    title: "TabSlap: Your Ultimate Chrome Tab Productivity Extension",
    description: "TabSlap is a powerful Chrome tab productivity extension designed to help users stay focused on their tasks by monitoring their open tabs and providing timely reminders. With its intuitive design and robust functionality, TabSlap is your go-to tool for enhancing productivity and maintaining focus.",
    url: "https://tabslap.me",
    siteName: "TabSlap - Boost Your Productivity",
    images: [
      {
        url: "https://tabslap.me/images/og-image.png",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  "icons": {
    icon: "/icon.png"
  },
  "category": "Productivity",
 }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='h-full'>

      {/* <CrazyEggScript /> */}

      {/* {process.env.NODE_ENV === 'production' && <SmartlookScript />} */}

      <FacebookPixelScript />
      <PostHogProvider>

      <body
        className={`h-full ${inter.variable} ${calFont.variable} font-sans antialiased`}
      >
        <Suspense>
        <PostHogPageView />        
        <GoogleAnalytics ga_id="G-1551CR6XGX" />
          {children}
        </Suspense>
        </body>
        </PostHogProvider>
    </html>
  )
}
