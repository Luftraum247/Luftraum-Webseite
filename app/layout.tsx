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

const SITE_URL = "https://luftraum247.de"
const OG_IMAGE = "/thermal-drone-inspection.png"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luftraum247 - Professionelle Drohneninspektionen",
    template: "%s | Luftraum247",
  },
  description:
    "Ihr Partner für Drohneninspektionen, 3D-Vermessung, Thermografie und mehr. Deutschlandweit tätig aus Hannover, Niedersachsen.",
  keywords:
    "Drohneninspektionen, Thermografie, 3D-Vermessung, Luftbildaufnahmen, Drohnenservice, Hannover, Deutschland",
  authors: [{ name: "Luftraum247" }],
  creator: "Luftraum247",
  publisher: "Luftraum247",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Luftraum247",
    title: "Luftraum247 - Professionelle Drohneninspektionen",
    description:
      "Ihr Partner für Drohneninspektionen, 3D-Vermessung, Thermografie und mehr. Deutschlandweit tätig aus Hannover, Niedersachsen.",
    images: [{ url: OG_IMAGE, width: 1024, height: 581, alt: "Luftraum247 Drohneninspektion" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luftraum247 - Professionelle Drohneninspektionen",
    description:
      "Ihr Partner für Drohneninspektionen, 3D-Vermessung, Thermografie und mehr. Deutschlandweit tätig aus Hannover, Niedersachsen.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: [{ url: "/favicon-32.png", type: "image/png", sizes: "32x32" }],
    shortcut: ["/favicon-32.png"],
  },
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
