"use client"

import Link from "next/link"
import { FileText, Mail, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

const EMAIL = "info@luftraum247.de"
const WHATSAPP_NUMBER_INTL = "491631902432"
const OFFER_HREF = "/kontakt#kontaktformular"

export default function StickyContactBar() {
  return (
    <>
      {/* Desktop: right-side sticky bar */}
      <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        <Button
          asChild
          variant="outline"
          className="border-zinc-700 bg-zinc-900/70 text-white shadow-lg backdrop-blur hover:bg-zinc-800/70"
        >
          <a href={`mailto:${EMAIL}`} aria-label="E-Mail senden">
            <Mail />
            E-Mail
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
          className="border-zinc-700 bg-zinc-900/70 text-white shadow-lg backdrop-blur hover:bg-zinc-800/70"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER_INTL}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat öffnen"
          >
            <MessageCircle />
            WhatsApp
          </a>
        </Button>

        <Button asChild className="bg-blue-600 text-white shadow-lg hover:bg-blue-700">
          <Link href={OFFER_HREF} aria-label="Angebot anfordern">
            <FileText />
            Angebot anfordern
          </Link>
        </Button>
      </div>

      {/* Mobile: bottom bar */}
      <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 p-2 shadow-lg backdrop-blur md:hidden">
        <Button asChild size="icon" variant="outline" className="border-zinc-700 bg-transparent text-white">
          <a href={`mailto:${EMAIL}`} aria-label="E-Mail senden">
            <Mail />
          </a>
        </Button>

        <Button asChild size="icon" variant="outline" className="border-zinc-700 bg-transparent text-white">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER_INTL}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat öffnen"
          >
            <MessageCircle />
          </a>
        </Button>

        <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
          <Link href={OFFER_HREF} aria-label="Angebot anfordern">
            <FileText />
            Angebot
          </Link>
        </Button>
      </div>
    </>
  )
}

