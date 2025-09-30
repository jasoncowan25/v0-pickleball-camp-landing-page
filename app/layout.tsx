import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"], // SemiBold
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://breakawaycamps.ca"),
  title: "Toronto Intermediate Pickleball Camp — Jan 9–10, 2026 (3.0–3.5)",
  description:
    "Two days of pro training in Toronto for 3.0–3.5 players. Small group, only 16 spots. $800 CAD (no tax). Lunch included, filtered water available.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Toronto Intermediate Pickleball Camp — Jan 9–10, 2026",
    description:
      "Two days of pro training in Toronto for 3.0–3.5 players. Small group, only 16 spots. $800 CAD (no tax). Lunch included, filtered water available.",
    url: "/2-day-jan-2026",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-07%20at%2010.08.32%E2%80%AFAM-cklXpkJgRVAtZWxMmHVwUNPN6QBUyS.png",
        width: 1200,
        height: 630,
        alt: "Pickleball player in action at Toronto camp",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
