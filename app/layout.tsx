import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import SchemaOrg from "@/components/schema-org"
import StickyContactBar from "@/components/sticky-contact-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luftraum247 - Professionelle Drohneninspektionen",
  description:
    "Ihr Partner für Drohneninspektionen, 3D-Vermessung, Thermografie und mehr. Deutschlandweit tätig aus Hannover, Niedersachsen.",
  keywords:
    "Drohneninspektionen, Thermografie, 3D-Vermessung, Luftbildaufnahmen, Drohnenservice, Hannover, Deutschland",
  authors: [{ name: "Luftraum247" }],
  creator: "Luftraum247",
  publisher: "Luftraum247",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <StickyContactBar />
        {children}
        <Footer />
        <ScrollToTop />
        <SchemaOrg />
      </body>
    </html>
  )
}
