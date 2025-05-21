import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import type { Metadata } from "next"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
// Am Anfang der Komponente nach den Imports
import FAQSchema from "@/components/faq-schema"

export const metadata: Metadata = {
  title: "Kontakt | Luftraum247 - Professionelle Drohneninspektionen",
  description:
    "Kontaktieren Sie Luftraum247 für Ihre Drohneninspektionen. Wir beraten Sie gerne zu unseren Dienstleistungen und erstellen Ihnen ein individuelles Angebot.",
  keywords: "Kontakt, Drohneninspektionen, Anfrage, Beratung, Angebot, Hannover, Deutschland",
}

export default function KontaktPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://luftraum247.de/" },
    { name: "Kontakt", url: "https://luftraum247.de/kontakt" },
  ]

  // Innerhalb der Komponente, vor dem return-Statement
  const faqItems = [
    {
      question: "Wie schnell können Sie einen Auftrag ausführen?",
      answer:
        "Je nach Auftragslage und Wetterbedingungen können wir in der Regel innerhalb von 1-2 Wochen einen Termin anbieten. Bei dringenden Anfragen bemühen wir uns um eine schnellere Bearbeitung.",
    },
    {
      question: "Welche Wetterbedingungen sind für Drohnenflüge erforderlich?",
      answer:
        "Für optimale Ergebnisse benötigen wir trockenes Wetter mit wenig Wind (unter 8ms. Bei Regen, Schnee oder starkem Wind können nur bestimmte Flüge durchgeführt werden mit der Dji Matrice Serie. (Dji M30T IP55 und Matrice 210 V2 RTK IP43)Hier können Rettungsflüge und andere Szenarien Durchgeführt werden.",
    },
    {
      question: "Benötigen Sie spezielle Genehmigungen für Drohnenflüge?",
      answer:
        "Wir verfügen über alle notwendigen Genehmigungen und Versicherungen für kommerzielle Drohnenflüge. Bei besonderen Einsatzorten (z.B. Flughafennähe) kümmern wir uns um die erforderlichen Sondergenehmigungen.",
    },
    {
      question: "In welchem Format erhalte ich die Ergebnisse?",
      answer:
        "Je nach Auftrag liefern wir die Daten in verschiedenen Formaten: Bilder als JPG/PNG, Videos als MP4, 3D-Modelle als OBJ/FBX und Karten als GeoTIFF oder PDF. Spezielle Formate sind auf Anfrage möglich.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI-Mini-3-Pro-M6pZBwoxteO2P7HfJNmTD9a7VKpChv.webp"
            alt="DJI Mini 3 Pro Drohne im Einsatz - Kontaktieren Sie Luftraum247 für Ihre Drohneninspektion"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Kontaktieren Sie uns</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Haben Sie Fragen zu unseren Dienstleistungen oder möchten Sie ein Angebot erhalten? Wir freuen uns auf
              Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-400">Kontaktinformationen</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Adresse</h3>
                    <p className="text-gray-300">Schäfertrift 19, 30657 Hannover</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                    <p className="text-gray-300">Festnetz: +49 51199922127</p>
                    <p className="text-gray-300">Mobil: +49 1631902432</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">E-Mail</h3>
                    <p className="text-gray-300">info@luftraum247.de</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Geschäftszeiten</h3>
                    <p className="text-gray-300">Montag - Freitag: 9:00 - 17:00 Uhr</p>
                    <p className="text-gray-300">Wochenende: Nach Vereinbarung</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Standort</h3>
                <div className="rounded-lg overflow-hidden h-[400px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.4380261541396!2d9.787908376889761!3d52.43364197979823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00c1b3d88b4c9%3A0x4b3d44fc3477c26e!2sSch%C3%A4fertrift%2019%2C%2030657%20Hannover%2C%20Germany!5e0!3m2!1sen!2sus!4v1715180000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Luftraum247 Standort"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="kontaktformular">
              <h2 className="text-3xl font-bold mb-8 text-blue-400">Anfrage senden</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Innerhalb des return-Statements, vor der FAQ-Sektion */}
      <FAQSchema items={faqItems} />

      {/* FAQ Section */}
      <section className="py-20 bg-black" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Häufig gestellte Fragen</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Wie schnell können Sie einen Auftrag ausführen?
              </h3>
              <p className="text-gray-300">
                Je nach Auftragslage und Wetterbedingungen können wir in der Regel innerhalb von 1-2 Wochen einen Termin
                anbieten. Bei dringenden Anfragen bemühen wir uns um eine schnellere Bearbeitung.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Welche Wetterbedingungen sind für Drohnenflüge erforderlich?
              </h3>
              <p className="text-gray-300">
                Für optimale Ergebnisse benötigen wir trockenes Wetter mit wenig Wind (unter 8ms. Bei Regen, Schnee oder
                starkem Wind können nur bestimmte Flüge durchgeführt werden mit der Dji Matrice Serie. (Dji M30T IP55
                und Matrice 210 V2 RTK IP43)Hier können Rettungsflüge und andere Szenarien Durchgeführt werden.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Benötigen Sie spezielle Genehmigungen für Drohnenflüge?
              </h3>
              <p className="text-gray-300">
                Wir verfügen über alle notwendigen Genehmigungen und Versicherungen für kommerzielle Drohnenflüge. Bei
                besonderen Einsatzorten (z.B. Flughafennähe) kümmern wir uns um die erforderlichen Sondergenehmigungen.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                In welchem Format erhalte ich die Ergebnisse?
              </h3>
              <p className="text-gray-300">
                Je nach Auftrag liefern wir die Daten in verschiedenen Formaten: Bilder als JPG/PNG, Videos als MP4,
                3D-Modelle als OBJ/FBX und Karten als GeoTIFF oder PDF. Spezielle Formate sind auf Anfrage möglich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zinc-900" id="testimonials">
        <div className="container mx-auto px-4">
          <TestimonialsCarousel />
        </div>
      </section>
    </main>
  )
}
