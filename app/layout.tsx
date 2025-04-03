import type React from "react"
import type { Metadata } from "next"
import { Rajdhani, Barlow_Condensed, Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import PreLoader from "@/components/ui/preloader"

// Font definitions
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani"
})

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow"
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto"
})

export const metadata: Metadata = {
  title: "Naval Dockyard Limited | Military & Commercial Ship Repair",
  description:
    "Precision engineering, trusted by the Navy, open to the world. We provide ship repair, maintenance, and engineering services for naval and commercial vessels.",
  keywords: "shipyard, naval dockyard, ship repair, vessel maintenance, military ships, commercial vessels, dry dock",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://navaldockyard.com",
    title: "Naval Dockyard Limited | Military & Commercial Ship Repair",
    description:
      "Precision engineering, trusted by the Navy, open to the world. We provide ship repair, maintenance, and engineering services for naval and commercial vessels.",
    siteName: "Naval Dockyard Limited",
    images: [
      {
        url: "/dockyard-logo.png",
        width: 1200,
        height: 630,
        alt: "Naval Dockyard Limited",
      },
    ],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${rajdhani.variable} ${barlow.variable} ${roboto.variable}`}>
      <body className="font-roboto">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <PreLoader />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}