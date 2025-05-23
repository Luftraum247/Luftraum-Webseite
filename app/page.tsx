import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReferencesCarousel from "@/components/references-carousel"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-14%20at%2015.43.33-3KtdDhV59Gizi59JyoUP1O3huMVcfq.png"
            alt="Collage von Drohneninspektionen: Thermografie von Solaranlagen, Inspektion von Stromleitungen, Industrieanlagen und Windkraftanlagen"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professionelle Drohneninspektionen für Industrie und Immobilien
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Präzise Luftaufnahmen, 3D-Vermessungen und Thermografie für Ihre Projekte
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/dienstleistungen">Unsere Dienstleistungen</Link>
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-400 hover:bg-blue-900/20 px-8 py-6 text-lg"
                asChild
              >
                <Link href="/kontakt#kontaktformular">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Unsere Dienstleistungen</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Wir bieten eine breite Palette von Drohnen-Dienstleistungen für verschiedene Branchen an
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/3d-vermessung-kartierung-02.png"
                  alt="3D-Punktwolke und Vermessung eines Gebäudes mit farblich hervorgehobenen Strukturen"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">3D-Vermessung und Kartierung</h3>
                <p className="text-gray-300 mb-4">
                  Präzise Geländemodelle und Karten für Ihre Projekte mit modernster Drohnentechnologie
                </p>
                <Link
                  href="/dienstleistungen#3d-vermessung"
                  className="flex items-center text-blue-400 font-medium group-hover:text-blue-300"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/thermografie-03.png"
                  alt="Thermografische Luftaufnahme von Gebäuden und Solaranlagen zur Wärmeverlusterkennung"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Thermografie</h3>
                <p className="text-gray-300 mb-4">
                  Wärmebildaufnahmen zur Erkennung von Wärmeverlusten, Defekten und Anomalien
                </p>
                <Link
                  href="/dienstleistungen#thermografie"
                  className="flex items-center text-blue-400 font-medium group-hover:text-blue-300"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/industrie-inspektion-04.png"
                  alt="Drohneninspektion einer Industrieanlage und detaillierte Dachanalyse mit Schadensmarkierungen"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Industrie Inspektionen</h3>
                <p className="text-gray-300 mb-4">
                  Inspektionen nach VDI Din-6200 für Industrieanlagen, Windkraftanlagen und mehr
                </p>
                <Link
                  href="/dienstleistungen#industrie-inspektionen"
                  className="flex items-center text-blue-400 font-medium group-hover:text-blue-300"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/drone-building-inspection.png"
                  alt="Drohnengestützte Inspektion eines Gebäudes zur Analyse von Dach und Fassade"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Bau und Immobilieninspektionen</h3>
                <p className="text-gray-300 mb-4">
                  Detaillierte Inspektionen von Gebäuden, Dächern und Fassaden ohne Gerüste
                </p>
                <Link
                  href="/dienstleistungen#bau-immobilien"
                  className="flex items-center text-blue-400 font-medium group-hover:text-blue-300"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/indoor-inspection-drones.webp"
                  alt="Spezialisierte Indoor-Drohne für Inspektionen in Innenräumen und schwer zugänglichen Bereichen"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Indoor-Flüge</h3>
                <p className="text-gray-300 mb-4">
                  Spezialisierte Drohnenflüge in Innenräumen für Inspektionen und Dokumentation
                </p>
                <Link
                  href="/dienstleistungen#indoor-fluge"
                  className="flex items-center text-blue-400 font-medium group-hover:text-blue-300"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="/dji-inspire-2.png"
                  alt="DJI Inspire 2 Drohne für professionelle Luftbildfotografie und Filmaufnahmen"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Luftbildfotografie</h3>
                <p className="text-gray-300 mb-4">
                  Hochwertige Luftaufnahmen für Marketing, Dokumentation und Präsentationen
                </p>
                <Link
                  href="/dienstleistungen#luftbildfotografie"
                  className="flex items-center text-blue-400 font-medium group-hover:text-blue-300"
                >
                  Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-20 bg-zinc-800" id="references">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Unsere Kunden</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Wir sind stolz auf das Vertrauen, das uns unsere Kunden entgegenbringen
            </p>
          </div>

          <ReferencesCarousel />
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Unsere Ausrüstung</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Wir setzen auf modernste Drohnentechnologie für optimale Ergebnisse
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI-Mini-3-Pro-M6pZBwoxteO2P7HfJNmTD9a7VKpChv.webp"
                alt="DJI Mini 3 Pro Drohne - Kompakte und leistungsstarke Drohne für flexible Einsätze"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-400">Hochmoderne Drohnenflotte</h3>
              <p className="text-xl text-gray-300 mb-6">
                Unsere Drohnenflotte umfasst die neuesten Modelle führender Hersteller, darunter:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">DJI Mini 3 Pro</h4>
                  <p className="text-gray-300 text-sm">Kompakte Drohne für flexible Einsätze</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">DJI Avata 2</h4>
                  <p className="text-gray-300 text-sm">FPV-Drohne für dynamische Aufnahmen</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">DJI Inspire 2</h4>
                  <p className="text-gray-300 text-sm">Professionelle Filmdrohne</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">DJI Mavic 3 Enterprise</h4>
                  <p className="text-gray-300 text-sm">Für professionelle Inspektionen</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-4 text-blue-400">Spezialisierte Industriedrohnen</h3>
              <p className="text-xl text-gray-300 mb-6">
                Für anspruchsvolle Inspektionen und spezielle Einsätze nutzen wir:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">DJI Matrice M30T</h4>
                  <p className="text-gray-300 text-sm">Industriedrohne mit Wärmebildkamera</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Matrice 210V2 RTK</h4>
                  <p className="text-gray-300 text-sm">Speziell für Brückeninspektionen</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">DJI Matrice 210 V2 RTK</h4>
                  <p className="text-gray-300 text-sm">Präzise Positionierung für Vermessungen</p>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Autel Evo Lite 640T Enterprise</h4>
                  <p className="text-gray-300 text-sm">Thermografie und hochauflösende Aufnahmen</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="/autel-evo-drone.jpeg"
                alt="Autel Evo Enterprise Drohne mit Thermografiekamera für professionelle Inspektionen"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-zinc-900" id="about">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Über Luftraum247</h2>
              <p className="text-xl text-gray-300 mb-6">
                Willkommen bei Luftraum247! Wir sind Ihr Partner aus der Vogelperspektive aus Hannover, Niedersachsen
                und für Sie deutschlandweit tätig.
              </p>
              <p className="text-xl text-gray-300 mb-6">
                Unser Unternehmen bietet eine breite Palette von Dienstleistungen für verschiedene Branchen an. Mit
                einer starken Basis in Drohnenkartierung, Bau- und Industrieinspektionen sowie Thermoinspektionen und
                Luftbildfotografie unterstützen wir Sie dabei, Ihre Projekte zu überwachen und zu dokumentieren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/dienstleistungen">Mehr über uns</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/solar-farm-inspection.webp"
                alt="Luftraum247 Drohne bei der Inspektion einer Solaranlage - Professionelle Dienstleistung aus der Vogelperspektive"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit für Ihre Drohneninspektion?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Kontaktieren Sie uns noch heute für ein unverbindliches Angebot oder eine Beratung zu Ihrem Projekt
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg" asChild>
            <Link href="/kontakt#kontaktformular">Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Phone className="h-10 w-10 text-blue-400 mr-4" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Telefon</h3>
                <p className="text-gray-300">Festnetz: +49 51199922127</p>
                <p className="text-gray-300">Mobil: +49 1631902432</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-10 w-10 text-blue-400 mr-4" />
              <div>
                <h3 className="text-lg font-semibold mb-1">E-Mail</h3>
                <p className="text-gray-300">info@luftraum247.de</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-10 w-10 text-blue-400 mr-4" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Standort</h3>
                <p className="text-gray-300">Schäfertrift 19, 30657 Hannover</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
