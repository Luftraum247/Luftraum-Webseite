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

// Die Website läuft unter www. – diese Adresse muss überall gleich sein.
const SITE_URL = "https://www.luftraum247.de"
const OG_IMAGE = "/thermal-drone-inspection.png"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Luftraum247 - Professionelle Drohneninspektionen",
    // Die Seitentitel enthalten "| Luftraum247" bereits selbst,
    // deshalb wird hier nichts mehr angehängt (sonst steht der Name doppelt).
    template: "%s",
  },
  description:
    "Ihr Partner für Drohneninspektionen, 3D-Vermessung, Thermografie und mehr. Deutschlandweit tätig aus Hannover, Niedersachsen.",
  authors: [{ name: "Luftraum247" }],
  creator: "Luftraum247",
  publisher: "Luftraum247",
  // Kein gemeinsamer Canonical-Link mehr: Vorher zeigte jede Unterseite auf die
  // Startseite, wodurch Google die Unterseiten als Kopien der Startseite behandelt hat.
  openGraph: {
    type: "website",
    locale: "de_DE",
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
  // Bestätigung für die Google Search Console
  verification: {
    google: "cVaMghDGB6GdIqG5aubPkpqGcIhPkHH0pK7Sgv_hOJI",
  },
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
