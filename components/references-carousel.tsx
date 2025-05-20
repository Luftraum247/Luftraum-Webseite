"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const references = [
  {
    name: "Solar Modo",
    logo: "/logos/solar-modo-logo.webp",
    alt: "Solar Modo Logo",
  },
  {
    name: "Grünplan",
    logo: "/logos/gruenplan-logo.webp",
    alt: "Grünplan - Planungsbüro für Garten- & Landschaftsbau Logo",
  },
  {
    name: "Bundesverband Copter Piloten",
    logo: "/logos/bundesverband-copter-piloten.webp",
    alt: "Bundesverband Copter Piloten e.V. Logo",
  },
  {
    name: "ICL",
    logo: "/logos/icl-logo.webp",
    alt: "ICL Ingenieur Consulting Langenhagen Logo",
  },
  {
    name: "Muntebau",
    logo: "/logos/muntebau-logo.webp",
    alt: "Muntebau Logo",
  },
  {
    name: "Volkswagen",
    logo: "/logos/volkswagen-logo.webp",
    alt: "Volkswagen Logo",
  },
  {
    name: "Burghardt Dach",
    logo: "/logos/burghardt-dach-logo.webp",
    alt: "Burghardt Dach Logo",
  },
  {
    name: "Honemann",
    logo: "/logos/honemann-logo.webp",
    alt: "Honemann Bedachungs GmbH Logo",
  },
  {
    name: "Skyzr",
    logo: "/logos/skyzr-logo.webp",
    alt: "Skyzr Logo",
  },
  {
    name: "Mul & Ohlendorf",
    logo: "/logos/mul-ohlendorf-logo.webp",
    alt: "Mul & Ohlendorf - Performance im Galabau Logo",
  },
]

export default function ReferencesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleLogos, setVisibleLogos] = useState(5)

  const updateVisibleLogos = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        setVisibleLogos(1)
      } else if (window.innerWidth < 768) {
        setVisibleLogos(2)
      } else if (window.innerWidth < 1024) {
        setVisibleLogos(3)
      } else if (window.innerWidth < 1280) {
        setVisibleLogos(4)
      } else {
        setVisibleLogos(5)
      }
    }
  }, [])

  useEffect(() => {
    updateVisibleLogos()
    window.addEventListener("resize", updateVisibleLogos)
    return () => window.removeEventListener("resize", updateVisibleLogos)
  }, [updateVisibleLogos])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleLogos >= references.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? Math.max(0, references.length - visibleLogos) : prevIndex - 1))
  }

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [currentIndex, visibleLogos])

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">Unsere Referenzen</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Vorherige</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Nächste</span>
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleLogos)}%)` }}
        >
          {references.map((reference, index) => (
            <div key={index} className="flex-shrink-0 px-4" style={{ width: `${100 / visibleLogos}%` }}>
              <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={reference.logo || "/placeholder.svg"}
                    alt={reference.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
