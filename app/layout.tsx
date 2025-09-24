import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="relative min-h-dvh overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 -top-32 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl"
            />
            <div className="relative z-10">
              {children}
              <Analytics />
            </div>
          </div>
        </Suspense>
      </body>
    </html>
  )
}
