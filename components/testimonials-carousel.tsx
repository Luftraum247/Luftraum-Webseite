"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the testimonial type
interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    quote:
      "Die Drohneninspektionen waren revolutionär für unsere Wartungsprozesse. Wir sind begeistert von den Ergebnissen!",
    author: "Linus Arndt",
    position: "Head of Planning, Produkt & Project Management",
    company: "VW Components",
  },
  {
    quote:
      "Die Implementation des 3D Digital Twins in unseren Planungsprozess hat die Effizienz unserer Gebäudesanierung maßgeblich optimiert. Durch die zentimetergenaue digitale Bestandsaufnahme konnten wir den Planungsaufwand erheblich reduzieren und gleichzeitig die Qualität der Sanierungsplanung steigern. Die präzisen 3D-Daten ermöglichten eine detaillierte Vorplanung, was zu einer signifikanten Zeit- und Kostenersparnis im gesamten Projektablauf führte.",
    author: "Nicolas Mertzios",
    position: "CEO",
    company: "ICL Ingenieurgesellschaft",
  },
  {
    quote:
      "Die Integration des 3D Digital Twins in unsere Arbeitsprozesse bei Mull & Ohlendorf hat die Effizienz unserer Aufmaß- und Massenermittlung im GaLa-Bau revolutioniert. Die zentimetergenaue digitale Bestandsaufnahme ermöglichte uns eine präzise und zeitsparende Abrechnung aller GaLa-Bau-Leistungen. Besonders beeindruckend war die Genauigkeit der 3D-Daten, die nicht nur eine detaillierte Vorplanung ermöglichten, sondern auch zu einer erheblichen Zeit- und Kostenersparnis im gesamten Projektablauf führten. Diese innovative Technologie hat sich als wertvolle Investition für unser Unternehmen erwiesen.",
    author: "Hagen Scheele",
    position: "CEO",
    company: "Mull & Ohlendorf",
  },
  {
    quote:
      "Mit drohnengestützten Inspektionen von Solaranlagen konnten wir die Inspektionskosten um 40 % senken und die Betriebseffizienz erheblich steigern.",
    author: "Stephan Zeikau",
    position: "CEO",
    company: "Solarmodo",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-scroll effect
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(interval)
  }, [currentIndex, autoplay])

  // Pause autoplay when user interacts with carousel
  const handleManualNavigation = (callback: () => void) => {
    setAutoplay(false)
    callback()

    // Resume autoplay after 15 seconds of inactivity
    setTimeout(() => setAutoplay(true), 15000)
  }

  return (
    <div className="relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Intelligente Drohnen-Inspektionen</h2>
        <p className="text-xl text-gray-300">Unsere Ergebnisse im Überblick</p>
      </div>

      <div className="relative overflow-hidden bg-zinc-800 rounded-xl p-8 shadow-lg">
        <Quote className="absolute top-6 left-6 h-12 w-12 text-blue-400/20" />

        <div className="relative z-10">
          <div className="min-h-[280px] md:min-h-[220px] flex items-center">
            <p className="text-lg text-gray-200 italic leading-relaxed">"{testimonials[currentIndex].quote}"</p>
          </div>

          <div className="mt-6 border-t border-zinc-700 pt-6">
            <p className="font-semibold text-xl text-blue-400">{testimonials[currentIndex].author}</p>
            <p className="text-gray-300">
              {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleManualNavigation(prevSlide)}
          className="rounded-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
          aria-label="Vorheriges Testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            onClick={() => handleManualNavigation(() => setCurrentIndex(index))}
            className={`rounded-full w-3 h-3 p-0 ${
              currentIndex === index ? "bg-blue-500 border-blue-500" : "bg-zinc-700 border-zinc-700 hover:bg-zinc-600"
            }`}
            aria-label={`Gehe zu Testimonial ${index + 1}`}
            aria-current={currentIndex === index ? "true" : "false"}
          />
        ))}

        <Button
          variant="outline"
          size="icon"
          onClick={() => handleManualNavigation(nextSlide)}
          className="rounded-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
          aria-label="Nächstes Testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
