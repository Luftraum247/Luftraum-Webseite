"use client"

import React from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ServiceSchema from "./service-schema"

interface ServiceAccordionProps {
  id: string
  title: string
  price: string
  shortDescription: string
  content: string
  image: string
}

const ServiceAccordion: React.FC<ServiceAccordionProps> = ({ id, title, price, shortDescription, content, image }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg border border-zinc-800 transition-all duration-300 hover:border-blue-600/50">
      <ServiceSchema
        serviceName={title}
        description={shortDescription}
        price={price}
        imageUrl={`https://luftraum247.de${image}`}
      />
      <div className="grid md:grid-cols-3 gap-4">
        {/* Image Section - Always visible */}
        <div className="relative h-64 md:h-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} - ${shortDescription}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-md inline-block mb-2">{price}</div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300">{shortDescription}</p>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-zinc-800 hover:bg-zinc-700 p-2 rounded-full transition-all duration-300"
              aria-expanded={isOpen}
              aria-controls={`content-${id}`}
            >
              <ChevronDown
                className={`h-6 w-6 text-blue-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

          {/* Expandable Content */}
          <div
            id={`content-${id}`}
            className={`overflow-hidden transition-all duration-500 ${
              isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-zinc-700 pt-4 mt-2 space-y-4">
              <div
                className="text-gray-300 service-content"
                dangerouslySetInnerHTML={{
                  __html: content
                    .replace(/<ul>/g, '<ul class="list-disc pl-5 space-y-2">')
                    .replace(/<li>/g, '<li class="text-gray-300">')
                    .replace(/<p>/g, '<p class="mb-3">')
                    .replace(/\*([^*]+)\*/g, '<span class="font-semibold text-blue-400">$1</span>'),
                }}
              />

              <div className="mt-6">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/kontakt#kontaktformular">Anfrage stellen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceAccordion
