import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Shield, MapPin } from "lucide-react"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Über uns | Luftraum247 - Ihre Partner aus der Vogelperspektive",
  description:
    "Lernen Sie Jorge Marques und das Team von Luftraum247 kennen. Erfahren Sie mehr über unsere Geschichte, Mission und wie wir zu Ihrem zuverlässigen Partner für Drohneninspektionen wurden.",
  keywords:
    "Über uns, Jorge Marques, Luftraum247, Drohnenpilot, Bau-Techniker, VDE-zertifiziert, Hannover, Firmengeschichte",
}

export default function UeberUnsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://luftraum247.de/" },
    { name: "Über uns", url: "https://luftraum247.de/ueber-uns" },
  ]

  const droneFleet = [
    "DJI Mavic 3 Enterprise",
    "DJI M300 RTK (Reinigung von Fassaden und PV-Anlagen)",
    "DJI Inspire 2 (Foto und Videographie)",
    "DJI Flip (Foto und Videographie Vlogs)",
    "DJI Neo (Foto und Videographie Vlogs)",
    "DJI Avata 2 (speziell für Indoor-Einsätze und FPV Aufnahmen)",
    "DJI Matrice M30T (Thermografie)",
    "Autel Evo Lite 640T Enterprise (Thermografie)",
  ]

  const services = [
    {
      title: "PV-Anlagen Inspektionen",
      description: "Bis zu 30% mehr Ertrag durch professionelle Drohnen-Inspektion und Professionelle Reinigung",
    },
    {
      title: "Thermografische Analysen",
      description: "Präzise Erkennung von Schwachstellen und Defekten",
    },
    {
      title: "3D-Modellierung & Vermessung",
      description: "Digitale Zwillinge für Bau, Immobilien und Landschaftsplanung",
    },
    {
      title: "Indoor-Inspektionen",
      description: "Industriehallen, Rauchmelder-Prüfungen und enge Räume",
    },
    {
      title: "Foto & Video Dokumentation",
      description: "Professionelle Luftaufnahmen für jeden Zweck",
    },
  ]

  const whyChooseUs = [
    { icon: Award, title: "Zertifizierte Expertise", description: "VDE-zertifiziert und LBA-registriert" },
    { icon: Shield, title: "Vollversichert", description: "Bis zu 5 Millionen Euro Deckung" },
    { icon: CheckCircle, title: "DSGVO-konform", description: "Sichere Datenspeicherung und -übertragung" },
    { icon: MapPin, title: "Deutschlandweit", description: "Kostenfreie Anfahrt bis 30 km" },
    { icon: Users, title: "Bewährte Qualität", description: "Über 150 erfolgreiche Projekte" },
  ]

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI-Mini-3-Pro-M6pZBwoxteO2P7HfJNmTD9a7VKpChv.webp"
            alt="Jorge Marques und das Luftraum247 Team - Ihre Partner aus der Vogelperspektive"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Über uns</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-400">
              Ihre Partner aus der Vogelperspektive
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Willkommen bei Luftraum247 – Ihrem zuverlässigen Partner für professionelle Drohnendienstleistungen in
              ganz Deutschland. Mit unserem Hauptsitz in Hannover, Niedersachsen, bringen wir modernste
              Drohnentechnologie direkt zu Ihnen, wo immer Sie uns brauchen.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases & Trust CTA */}
      <section className="py-12 bg-blue-950/40 border-y border-blue-900/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Wo wir Sie konkret unterstützen</h3>
              <p className="text-lg text-gray-300 mb-6">
                Wir verbinden zertifizierte Flugpraxis mit Bau-Expertise. Drei typische Anwendungsfälle, bei denen Kunden
                auf uns vertrauen:
              </p>
              <div className="space-y-3">
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4">
                  <p className="text-white font-semibold">PV-Anlagen – mehr Ertrag, weniger Risiko</p>
                  <p className="text-gray-300 text-sm">
                    Thermografie + Reinigung nach VDE 0126-23-1, messbar bessere Performance und Garantie-Compliance.
                  </p>
                </div>
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4">
                  <p className="text-white font-semibold">Industrie & Logistik – Stillstand vermeiden</p>
                  <p className="text-gray-300 text-sm">
                    Wiederkehrende Inspektionen mit dokumentierten Befunden, 24/48h Reaktionszeit bei kritischen Funden.
                  </p>
                </div>
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4">
                  <p className="text-white font-semibold">Bau & Immobilien – sichere Entscheidungen</p>
                  <p className="text-gray-300 text-sm">
                    VDI 6200-konforme Prüfungen und 3D-Aufmaße für Abnahmen, Finanzierung und Sanierungsplanung.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900/80 border border-blue-900 rounded-xl p-6">
              <p className="text-sm uppercase tracking-wide text-blue-300 mb-2">Sicherheit & Verlässlichkeit</p>
              <h4 className="text-2xl font-bold text-white mb-4">Kostenlose Erstberatung mit klarer Empfehlung</h4>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>✔ VDE-zertifiziert, LBA-registriert, vollversichert bis 5 Mio. €</li>
                <li>✔ Datenschutzkonform (DSGVO), sichere Datenwege</li>
                <li>✔ Verbindliche Zeitpläne und transparente Angebote</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-6 py-3" asChild>
                  <Link href="/kontakt#kontaktformular">Kostenloses Erstgespräch buchen</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-400 hover:bg-blue-950 w-full sm:w-auto px-6 py-3"
                  asChild
                >
                  <Link href="/projekte">Referenzen ansehen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">Unser Gründer</h2>
              <p className="text-xl text-gray-300 mb-6">
                Jorge Marques, unser Gründer und selbst Pilot, vereint jahrelange Erfahrung als Bau-Techniker mit seiner
                Leidenschaft für innovative Drohnentechnologie. Als zertifizierter Drohnenpilot mit LBA-Registrierung
                sowie europäischer A2-STS Lizenz garantieren wir höchste Sicherheits- und Qualitätsstandards bei jedem
                Projekt.
              </p>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Qualifikationen</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    VDE 0126-23-1 Zertifizierung für PV-Inspektionen
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    LBA-Registrierung als gewerblicher Pilot
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    Europäische A2-STS Lizenz
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    Jahrelange Erfahrung als Bau-Techniker
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/LuftraumÜberUns.jpeg"
                alt="Jorge Marques, Gründer von Luftraum247, mit professioneller Drohne"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-400">
              Wie alles begonnen hat - Die Geschichte von Luftraum247
            </h2>
            <h3 className="text-2xl font-semibold mb-6 text-center">Von der Vision zur Realität</h3>

            <div className="space-y-8">
              <div className="bg-zinc-900 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Der Startpunkt</h4>
                <p className="text-gray-300">
                  Mit einer klaren Vision startete Luftraum247 vor wenigen Jahren in Hannover: Traditionelle,
                  kostspielige und zeitaufwendige Inspektionsmethoden durch präzise, effiziente Drohnenlösungen zu
                  ersetzen. Was mit einem einzelnen Drohnenpiloten begann, entwickelte sich schnell zu einem umfassenden
                  Serviceanbieter.
                </p>
              </div>

              <div className="bg-zinc-900 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Wachstum durch Vertrauen</h4>
                <p className="text-gray-300">
                  Heute blicken wir stolz auf über 150 erfolgreich abgeschlossene Projekte und mehr als 80 zufriedene
                  Kunden zurück. Von der ersten Photovoltaik-Inspektion bis hin zu komplexen 3D-Vermessungen für
                  Industriekunden - jedes Projekt hat uns gelehrt und gestärkt.
                </p>
              </div>

              <div className="bg-zinc-900 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Innovation im Fokus</h4>
                <p className="text-gray-300">
                  Unser Weg führte uns von einfachen Luftaufnahmen zu hochspezialisierten Dienstleistungen:
                  Thermografie-Inspektionen, präzise Katastervermessungen, Indoor-Drohneninspektionen und sogar
                  Rehkitzrettung mit Wärmebildtechnik. Unsere Flotte wuchs von einem einzelnen Gerät zu einer
                  professionellen Ausstattung.
                </p>
              </div>

              <div className="bg-zinc-900 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Unsere Mission heute</h4>
                <p className="text-gray-300">
                  "Ihre Partner aus der Vogelperspektive" - dieser Leitspruch begleitet uns täglich. Wir bieten nicht
                  nur Dienstleistungen, sondern echte Partnerschaften. Mit bis zu 90% Kosteneinsparung gegenüber
                  traditionellen Methoden und unserem Motto "Schneller, günstiger, präziser: Drohneninspektion statt
                  Gerüst" revolutionieren wir Inspektions- und Vermessungsprozesse.
                </p>
              </div>

              <div className="bg-zinc-900 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Die Zukunft im Blick</h4>
                <p className="text-gray-300">
                  Von Hannover aus bedienen wir heute ganz Deutschland. Unser Ziel: Weiter wachsen, neue Technologien
                  integrieren und unseren Kunden stets einen Schritt voraus sein. Denn Zeit ist Geld – und Drohnen sind
                  beides wert!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">Unsere Expertise</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto">
            Mit über 150 erfolgreich abgeschlossenen Projekten und mehr als 80 zufriedenen Kunden haben wir uns als
            vertrauensvoller Partner in verschiedenen Branchen etabliert:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">Modernste Technologie</h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Unsere Drohnenflotte umfasst neueste Technologie von DJI und Autel:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {droneFleet.map((drone, index) => (
              <div key={index} className="bg-zinc-900 p-4 rounded-lg flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{drone}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-400">Warum Luftraum247?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg text-center">
                <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-400">
              Wie es entstanden ist: Es begann mit einer Leidenschaft
            </h2>

            <div className="bg-zinc-900 p-8 rounded-lg">
              <p className="text-lg text-gray-300 mb-6">
                Hallo, ich bin Jorge Marques, der Gründer von Luftraum247. Meine Geschichte beginnt eigentlich auf der
                Baustelle – als Bau-Techniker habe ich jahrelang die alltäglichen Herausforderungen unserer Branche
                hautnah miterlebt. Gerüste aufbauen für eine einfache Dachinspektion, stundenlange Vermessungen, teure
                und zeitaufwändige Fassadenprüfungen – das alles kannte ich nur zu gut.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                Aber dann entdeckte ich die Welt der Drohnen. Was anfangs nur ein Hobby war, wurde schnell zu einer
                echten Leidenschaft. Ich erkannte das unglaubliche Potenzial dieser Technologie und dachte mir: "Das
                kann doch alles viel einfacher, schneller und günstiger gehen!"
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Der Moment der Erkenntnis</h3>
              <p className="text-lg text-gray-300 mb-6">
                Der Wendepunkt kam, als ich bei einem Projekt zusah, wie ein ganzes Team einen Tag lang brauchte, um ein
                Dach zu inspizieren – mit Gerüst, Sicherheitsausrüstung, dem ganzen Aufwand. Ich wusste: Mit einer
                Drohne hätte ich das in einer Stunde geschafft, präziser und für einen Bruchteil der Kosten.
              </p>

              <p className="text-lg text-gray-300 mb-6">Da war mir klar: Ich muss das professionell machen.</p>

              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Heute: Über 150 Projekte später</h3>
              <p className="text-lg text-gray-300 mb-6">
                Wenn ich heute zurückblicke, bin ich stolz auf das, was wir erreicht haben. Über 150 erfolgreich
                abgeschlossene Projekte, mehr als 80 zufriedene Kunden – vom kleinen Einfamilienhaus bis zur großen
                Industrieanlage. Jedes Projekt bestätigt mich in meiner Überzeugung: Drohnentechnologie ist die Zukunft.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Was mich antreibt</h3>
              <p className="text-lg text-gray-300">
                Was mich jeden Morgen motiviert? Die Gewissheit, dass ich mit meiner Arbeit echten Mehrwert schaffe.
                Wenn ein Kunde mir sagt, dass wir ihm Zeit, Geld und Nerven gespart haben, dann weiß ich: Das ist genau
                der Grund, warum ich Luftraum247 gegründet habe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400">Unser Versprechen</h2>
            <p className="text-2xl font-semibold mb-6 text-white">
              Schneller, günstiger, präziser – das ist unser Anspruch.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Wir verwandeln komplexe Herausforderungen in effiziente Lösungen und unterstützen Sie dabei, Ihre Ziele zu
              erreichen. Ob Wartung, Inspektion oder Dokumentation – wir liefern präzise Ergebnisse aus der
              Vogelperspektive.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
              <Link href="/kontakt#kontaktformular">Kostenloses Erstgespräch sichern</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
