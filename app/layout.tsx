import type React from "react"
import type { Metadata } from "next"
import { Rajdhani, Barlow_Condensed, Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import PreLoader from "@/components/ui/preloader"
import { Suspense } from "react"

// Font definitions
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
})

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Naval Dockyard Limited | Military & Commercial Ship Repair",
  description:
    "Precision engineering, trusted by the Navy, open to the world. We provide ship repair, maintenance, and engineering services for naval and commercial vessels.",
  keywords: "shipyard, naval dockyard, ship repair, vessel maintenance, military ships, commercial vessels, dry dock",
  // Explicitly define favicon
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16",
      },
    ],
  },
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
        url: "/images/logo/dockyard-logo-2.png",
        width: 1200,
        height: 630,
        alt: "Naval Dockyard Limited",
      },
    ],
  },
  generator: "byte-codes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${rajdhani.variable} ${barlow.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-roboto">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <PreLoader />
          </Suspense>
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

