import type React from "react"
import type { Metadata } from "next"
import { Press_Start_2P, VT323 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const pressStart2p = Press_Start_2P({ weight: "400", subsets: ["latin"] })
const vt323 = VT323({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SUJITH // AI ENGINEER - 90's Pixel Retro Portfolio",
  description:
    "Welcome to my 90's pixel-art themed portfolio! I'm Tenali Sujith Kumar, an AI Engineer specializing in Multi-Agent Systems, LLMs, Computer Vision, and Full-Stack Development.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
