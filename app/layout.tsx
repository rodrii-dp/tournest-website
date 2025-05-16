import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TourNest | Descubre tours gratuitos en todo el mundo",
  description:
    "Explora ciudades con guías locales expertos. Tours gratuitos basados en propinas en las mejores ciudades del mundo.",
  keywords: ["free tours", "tours gratuitos", "guías locales", "turismo", "viajes", "TourNest"],
  openGraph: {
    title: "TourNest | Descubre tours gratuitos en todo el mundo",
    description: "Explora ciudades con guías locales expertos. Tours gratuitos basados en propinas.",
    url: "https://tournest.com",
    siteName: "TourNest",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TourNest - Free Tours",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
