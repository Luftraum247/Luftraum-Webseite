import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceAccordion from "@/components/service-accordion"
import type { Metadata } from "next"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import HashNavigator from "@/components/hash-navigator"

export const metadata: Metadata = {
  title: "Dienstleistungen | Luftraum247 - Professionelle Drohneninspektionen",
  description:
    "Entdecken Sie unser umfassendes Angebot an Drohnen-Dienstleistungen: 3D-Vermessung, Thermografie, Industrie-Inspektionen, Bau-Inspektionen, Indoor-Flüge und Luftbildfotografie.",
  keywords:
    "3D-Vermessung, Thermografie, Industrie-Inspektionen, Bau-Inspektionen, Indoor-Flüge, Luftbildfotografie, Drohneninspektionen",
}

export default function DienstleistungenPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://luftraum247.de/" },
    { name: "Dienstleistungen", url: "https://luftraum247.de/dienstleistungen" },
  ]

  // 3D Vermessung und Kartierung
  const vermessungServices = [
    {
      id: "2d-paket",
      title: "2D Paket",
      price: "Ab €399,-*",
      shortDescription: "2D Orthomosaik-Erstellung mit RTK-Technologie",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2D%20Paket.jpg-1UdPJLVlI5OVBPShVBAecIBFw7DSuE.jpeg",
      content: `
        <p>2D Orthomosaik-Erstellung mit modernster RTK-Technologie für präzise Vermessungen. Aufgrund unterschiedlicher Projektgrößen und Anforderungen erstellen wir individuelle Angebote.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Leistungsumfang:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Preisstaffelung nach Flächengröße verfügbar</li>
          <li>RTK-Technologie mit ±2 cm Genauigkeit</li>
          <li>Vermessung von Passpunkten (GCP's) enthalten</li>
          <li>Cloud-Zugang für eigenständige Flächenauswertung</li>
          <li>Erfassung von Baugrenzen und Störflächen mit Modellintegration</li>
        </ul>
        <p class="mt-4">Zentimetergenaue 2D-Orthomosaike für Ihre Projekte mit modernster Drohnentechnologie.</p>
      `,
    },
    {
      id: "3d-paket",
      title: "3D Paket",
      price: "Ab €499,-*",
      shortDescription: "Erstellen von 3D-Modellen mit RTK-Technologie",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D%20Paket.jpg-OxhykYxVYTAXR4DcewPlb3Grt59enb.jpeg",
      content: `
        <p>Erstellen von detaillierten 3D-Modellen mit modernster RTK-Technologie. Aufgrund unterschiedlicher Anwendungsgebiete und Projektgrößen erstellen wir individuelle Angebote.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Erweiterte Leistungen:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Preisstaffelung nach Flächen-/Gebäudegröße verfügbar</li>
          <li>RTK-Technologie mit ±2 cm Genauigkeit</li>
          <li>Vermessung von Passpunkten (GCP's) enthalten</li>
          <li>Cloud-Zugang für eigenständige 3D-Modell-Betrachtung und -Bearbeitung</li>
          <li>Erfassung von Baugrenzen und Störflächen mit Modellintegration</li>
        </ul>
        <p class="mt-4">Hochpräzise 3D-Modelle für umfassende Projektdokumentation und -analyse.</p>
      `,
    },
    {
      id: "3d-digitales-aufmass",
      title: "3D Digitales Aufmaß",
      price: "Auf Anfrage,-*",
      shortDescription: "Flächen- und Volumenberechnung | DEM",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D_Vermessung_3D%20Digitales%20Aufma%C3%9F.jpg-oupg7iL3xeTZ7VZYHFrlC4BAvfKOR3.jpeg",
      content: `
        <p>Flächen und Volumen- so wie Füllmengenberechnung | DEM. Aufgrund unterschiedlicher Anwendungsgebiete und Projektgrößen erstellen wir individuelle Angebote.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Spezialisierte Messungen:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Preisgestaltung entsprechend den Inspektionsintervallen</li>
          <li>RTK-Technologie mit ±2 cm Genauigkeit</li>
          <li>Vermessung von Passpunkten (GCP's) enthalten</li>
          <li>Cloud-Zugang für eigenständige Volumenbestimmung</li>
          <li>Erfassung von Baugrenzen und Störflächen mit Modellintegration</li>
        </ul>
        <p class="mt-4">Präzise Volumen- und Flächenberechnungen für Bauprojekte und Materialmanagement.</p>
      `,
    },
  ]

  // Thermografie Services
  const thermografieServices = [
    {
      id: "pv-thermografie-basis",
      title: "PV-Thermografie Basis",
      price: "Ab 199€ (Privat) / Ab 299€ (Gewerblich)",
      shortDescription: "Für Einfamilienhäuser und Kleingewerbe mit 0-20kWp",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DJI-M30-Profi-Drohne-im-Test-13.jpg-JhAu9YaJULprA1Ue3Ok4GtZCr6C8Ec.jpeg",
      content: `
        <p>Basis Paket für Einfamilienhäuser und Kleingewerbe mit 0-20kWp nach DIN VDE V 0126-23-3 (Thermografie). Preise abhängig von der Anzahl an kWp der PV-Anlage.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Leistungsumfang:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Thermografische Inspektion der kompletten Anlage</li>
          <li>Nachbearbeitung der Wärmebildaufnahmen</li>
          <li>Mehrseitiges PDF-Übergabeprotokoll</li>
          <li>Hotspot-Identifikation</li>
          <li>Handlungsempfehlungen</li>
        </ul>
      `,
    },
    {
      id: "gebaude-thermografie",
      title: "Gebäude-Thermografie",
      price: "Ab 499€",
      shortDescription: "Energieeffizienz-Analyse für Gebäude bis 5000m²",
      image: "/thermal-drone-inspection.png",
      content: `
        <p>Professionelle Gebäude-Thermografie zur Identifikation von Wärmeverlusten und Energieeffizienz-Optimierung.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Anwendungsbereiche:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Energieeffizienz-Analyse</li>
          <li>Bauabnahme</li>
          <li>Sanierungsplanung</li>
          <li>Schadensprävention</li>
          <li>Immobilienbewertung</li>
          <li>EnEV-Nachweise</li>
        </ul>
        <p class="mt-4">Bis zu 15% Heizkosten-Reduzierung durch professionelle Wärmebildanalyse.</p>
      `,
    },
    {
      id: "solar-care-plus",
      title: "Solar Care Plus",
      price: "Preis nach Anfrage",
      shortDescription: "Rundum-Sorglos-Paket für PV-Anlagen",
      image: "/solar-thermal-inspection.webp",
      content: `
        <p>Solar Care Plus - Ihr Rundum-Sorglos-Paket für PV-Anlagen mit modernster Drohnentechnologie.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Komplettpaket beinhaltet:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Drohnengestützte Thermografie-Inspektion</li>
          <li>Hochauflösende Wärmebildaufnahmen mit DJI Matrice M30T</li>
          <li>3D-Thermografie-Modell Ihrer Anlage</li>
          <li>Professionelle Wartung und Reinigung</li>
          <li>Elektrotechnische Prüfung durch zertifizierte Partner</li>
          <li>Flexible Wartungsverträge</li>
        </ul>
      `,
    },
  ]

  // Industrie Inspektion Services
  const industrieServices = [
    {
      id: "industrycheck-medium",
      title: "IndustryCheck Medium",
      price: "Ab 599€",
      shortDescription: "Monatliche Inspektion für Industrieanlagen bis 15.000m²",
      image: "/wind-turbine-inspection.jpeg",
      content: `
        <p>Grundpaket für regelmäßige Industrieanlagen-Inspektionen mit modernster Drohnentechnologie.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Inspektionsschwerpunkte:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Dachinspektion</li>
          <li>Fassadeninspektion</li>
          <li>Schornstein-/Abluftsysteme</li>
          <li>Rohrleitungen</li>
          <li>KI-gestützte Anomalie-Erkennung</li>
          <li>24/48h Reaktionszeit bei kritischen Befunden</li>
        </ul>
      `,
    },
    {
      id: "powergrid-check",
      title: "PowerGrid Check",
      price: "Ab 99€ pro Mast",
      shortDescription: "Hochspannungsmasten-Inspektionspaket",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dji-matrice-m30t-hochspannungsnetz-p5rp0GUZ1lfcXKsofC0u9IEqs3dIS3.webp",
      content: `
        <p>Spezialisierte Inspektion von Hochspannungsmasten und Energieinfrastruktur.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Inspektionstechnologien:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Hochauflösende 4K/8K Aufnahmen</li>
          <li>Thermografische Analyse</li>
          <li>Isolatoren-Prüfung</li>
          <li>Korrosionsanalyse</li>
          <li>Vegetation-Check im Trassenbereich</li>
          <li>Digitaler Masten-Zwilling</li>
        </ul>
      `,
    },
    {
      id: "windcheck-premium",
      title: "WindCheck Premium",
      price: "Ab 599€ pro WEA",
      shortDescription: "Rotorblatt-Inspektionspaket für Windenergieanlagen",
      image: "/wind-turbine-inspection.jpeg",
      content: `
        <p>Detaillierte Inspektion von Windenergieanlagen mit automatisierter Schadenserfassung.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Schadenserkennung:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Leading Edge Erosion</li>
          <li>Blitzschäden</li>
          <li>Strukturelle Schäden</li>
          <li>Oberflächenbeschädigungen</li>
          <li>Delaminierung</li>
          <li>Digitaler Rotorblatt-Zwilling</li>
        </ul>
      `,
    },
  ]

  // Bau und Immobilieninspektionen Services
  const bauServices = [
    {
      id: "bauwerkspruefung-vdi6200",
      title: "Bauwerksprüfung nach VDI 6200",
      price: "Ab 449€",
      shortDescription: "Revolution in der Bauwerksprüfung durch Drohnentechnologie",
      image: "/drone-building-inspection.png",
      content: `
        <p>VDI 6200-konforme Inspektionen mit höchster Präzision bei maximaler Kosteneffizienz.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">VDI 6200 Leistungen:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Systematische Überprüfung der Standsicherheit</li>
          <li>Bewertung der Verkehrssicherheit</li>
          <li>Analyse der Dauerhaftigkeit baulicher Anlagen</li>
          <li>Detaillierte 3D-Modellierung kritischer Bereiche</li>
          <li>Bis zu 99% Kosteneinsparung</li>
          <li>VDI 6200-konforme Dokumentation</li>
        </ul>
      `,
    },
    {
      id: "infracheck-complete",
      title: "InfraCheck Complete",
      price: "Ab 799€",
      shortDescription: "Umfassendes Infrastruktur-Inspektionspaket",
      image: "/aerial-industrial-view.webp",
      content: `
        <p>Umfassende Inspektion von Infrastrukturbauwerken mit modernster Drohnentechnologie.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Inspektionsobjekte:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Brücken & Viadukte</li>
          <li>Tunnel & Unterführungen</li>
          <li>Stützmauern & Lärmschutzwände</li>
          <li>Bahninfrastruktur</li>
          <li>Parkhäuser & Tiefgaragen</li>
          <li>DIN 1076-konforme Dokumentation</li>
        </ul>
      `,
    },
    {
      id: "immobilien-inspektion",
      title: "Immobilien-Inspektion",
      price: "Ab 299€",
      shortDescription: "Detaillierte Gebäudeinspektionen ohne Gerüste",
      image: "/drone-building-inspection.png",
      content: `
        <p>Professionelle Immobilieninspektionen für Bewertungen, Kaufentscheidungen und Schadensbegutachtung.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Anwendungsbereiche:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Immobilienbewertungen</li>
          <li>Baufortschrittsdokumentation</li>
          <li>Schadensbegutachtung</li>
          <li>Dach- und Fassadeninspektion</li>
          <li>Versicherungsdokumentation</li>
          <li>Kaufberatung</li>
        </ul>
      `,
    },
  ]

  // Indoor-Flüge Services
  const indoorServices = [
    {
      id: "indoor-inspektion-basic",
      title: "Indoor-Inspektion Basic",
      price: "Ab 399€",
      shortDescription: "Grundpaket für Innenraum-Inspektionen",
      image: "/indoor-inspection-drones.webp",
      content: `
        <p>Spezialisierte Drohnenflüge in Innenräumen für Inspektionen und Dokumentation schwer zugänglicher Bereiche.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Einsatzgebiete:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Industriehallen</li>
          <li>Lager und Logistikzentren</li>
          <li>Schwer zugängliche Bereiche</li>
          <li>Bestandsaufnahmen</li>
          <li>Sicherheitsinspektionen</li>
          <li>Dokumentation für Versicherungen</li>
        </ul>
      `,
    },
    {
      id: "rauchmelder-pruefung",
      title: "Rauchmelderprüfung nach DIN 14676",
      price: "Ab 299€",
      shortDescription: "Innovative Hybrid-Lösung für Großbetriebe",
      image: "/indoor-smoke-detector.webp",
      content: `
        <p>Revolutionäre Hybrid-Lösung für die normgerechte Prüfung von Rauchwarnmeldern mit minimaler Betriebsstörung.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Hybrid-Inspektionsmodell:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Drohnengestützte Ersterfassung</li>
          <li>Digitales Melderkataster</li>
          <li>Gezielte manuelle Prüfung</li>
          <li>DIN 14676-konforme Dokumentation</li>
          <li>Sofortige Mängelbehebung</li>
          <li>Wartungsempfehlungen</li>
        </ul>
      `,
    },
  ]

  // Luftbildfotografie Services
  const luftbildServices = [
    {
      id: "luftbild-basic",
      title: "Luftbildfotografie Basic",
      price: "Ab 199€",
      shortDescription: "Hochwertige Luftaufnahmen für Marketing und Dokumentation",
      image: "/dji-inspire-2.png",
      content: `
        <p>Professionelle Luftaufnahmen für Marketing, Immobilienpräsentationen und Dokumentation.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Leistungsumfang:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Hochauflösende 4K/8K Aufnahmen</li>
          <li>Professionelle Bildbearbeitung</li>
          <li>Verschiedene Perspektiven und Winkel</li>
          <li>Optimiert für Web und Print</li>
          <li>Schnelle Lieferung (24-48h)</li>
          <li>Kommerzielle Nutzungsrechte</li>
        </ul>
      `,
    },
    {
      id: "luftbild-video",
      title: "Luftbild-Video Premium",
      price: "Ab 499€",
      shortDescription: "Professionelle Luftvideos mit Nachbearbeitung",
      image: "/dji-inspire-2.png",
      content: `
        <p>Hochwertige Luftvideos für Unternehmenspräsentationen, Immobilienmarketing und Events.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Video-Leistungen:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>4K/8K Videoaufnahmen</li>
          <li>Professioneller Videoschnitt</li>
          <li>Farbkorrektur und Grading</li>
          <li>Musik und Sounddesign</li>
          <li>Verschiedene Ausgabeformate</li>
          <li>Social Media optimiert</li>
        </ul>
      `,
    },
    {
      id: "event-dokumentation",
      title: "Event-Dokumentation",
      price: "Ab 799€",
      shortDescription: "Umfassende Luftbild-Dokumentation für Veranstaltungen",
      image: "/autel-evo-drone.jpeg",
      content: `
        <p>Professionelle Luftbild-Dokumentation für Events, Festivals und Veranstaltungen.</p>
        <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Event-Services:</h4>
        <ul class="list-disc pl-5 space-y-1 text-gray-300">
          <li>Live-Streaming möglich</li>
          <li>Mehrere Kameraperspektiven</li>
          <li>Zeitraffer-Aufnahmen</li>
          <li>Highlight-Reel Erstellung</li>
          <li>Social Media Content</li>
          <li>Schnelle Lieferung für Marketing</li>
        </ul>
      `,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <HashNavigator />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dji-matrice-m30t-hochspannungsnetz-p5rp0GUZ1lfcXKsofC0u9IEqs3dIS3.webp"
            alt="Professionelle Drohneninspektion mit DJI Matrice M30T - Übersicht unserer Dienstleistungen"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Unsere Dienstleistungen</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Entdecken Sie unser umfassendes Angebot an Drohnen-Dienstleistungen für verschiedene Branchen und
              Anwendungsbereiche
            </p>
          </div>
        </div>
      </section>

      {/* 3D Vermessung und Kartierung Section */}
      <section className="py-16 bg-black" id="vermessung-3d">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">3D Vermessung und Kartierung</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Präzise Geländemodelle, Volumenberechnungen und detaillierte Karten für Bauprojekte, Landschaftsplanung und
            Dokumentation mit zentimetergenauer Genauigkeit.
          </p>

          <div className="grid gap-8">
            {vermessungServices.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Thermografie Section */}
      <section className="py-16 bg-zinc-900" id="thermografie">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Thermografie</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Hochauflösende Wärmebildaufnahmen zur Erkennung von Wärmeverlusten, Defekten und Anomalien in Gebäuden,
            Solaranlagen und industriellen Anlagen.
          </p>

          <div className="grid gap-8">
            {thermografieServices.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industrie Inspektion Section */}
      <section className="py-16 bg-black" id="industrie-inspektionen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Industrie Inspektion</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Frühzeitige Schadenserkennung, Vermeidung von Produktionsausfällen, Optimierung der Wartungsplanung und
            Kostenreduktion durch präventive Wartung.
          </p>

          <div className="grid gap-8">
            {industrieServices.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bau und Immobilieninspektionen Section */}
      <section className="py-16 bg-zinc-900" id="bau-immobilien">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Bau und Immobilieninspektionen</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Detaillierte Inspektionen von Gebäuden, Dächern und Fassaden ohne Gerüste für Immobilienbewertungen,
            Baufortschrittsdokumentation und Schadensbegutachtung.
          </p>

          <div className="grid gap-8">
            {bauServices.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Indoor-Flüge Section */}
      <section className="py-16 bg-black" id="indoor-fluge">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Indoor-Flüge</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Spezialisierte Drohnenflüge in Innenräumen für Inspektionen, Dokumentation und Bestandsaufnahmen in
            Industriehallen, Lagern und schwer zugänglichen Bereichen.
          </p>

          <div className="grid gap-8">
            {indoorServices.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Luftbildfotografie Section */}
      <section className="py-16 bg-zinc-900" id="luftbildfotografie">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Luftbildfotografie</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Hochwertige Luftaufnahmen für Marketing, Immobilienpräsentationen, Veranstaltungen und Dokumentation mit
            professioneller Bildbearbeitung und Nachbearbeitung.
          </p>

          <div className="grid gap-8">
            {luftbildServices.map((service) => (
              <ServiceAccordion
                key={service.id}
                id={service.id}
                title={service.title}
                price={service.price}
                shortDescription={service.shortDescription}
                content={service.content}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Weitere Dienstleistungen Section */}
      <section className="py-20 bg-black" id="weitere-dienstleistungen">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Weitere Dienstleistungen</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Innovative Lösungen und spezialisierte Services für besondere Anforderungen
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Freiwillige Katastrophenhilfe */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Notfall-%20und%20Katastrophenmanagement%20%281%29-bfprVNp2wldUkRgdFxZIZjt4gtP08G.png"
                  alt="Freiwillige Katastrophenhilfe mit Drohnentechnologie für Notfallmanagement und Rettungseinsätze"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-md text-sm font-medium">
                  Ehrenamtlich
                </div>
                <h3 className="text-xl font-bold mb-3 text-red-400">Freiwillige Katastrophenhilfe</h3>
                <p className="text-gray-300 mb-4">
                  Professionelle Drohnenunterstützung für Rettungskräfte und Behörden bei Notfällen, Katastrophen und
                  Such- und Rettungseinsätzen - kostenlos für gemeinnützige Zwecke.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-red-400 font-semibold">24/7 Notfall-Hotline</span>
                  <Link
                    href="/kontakt#kontaktformular"
                    className="text-red-400 hover:text-red-300 font-medium transition-colors"
                  >
                    Mehr herausfinden →
                  </Link>
                </div>
              </div>
            </div>

            {/* Coming Soon - Baustellen Kamera */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-3U73id1OWAALKkJfeClucDTBfxBgH6.png"
                  alt="Coming Soon: Professionelle Baustellen-Kameras für 24/7 Baufortschrittsdokumentation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-md text-sm font-medium">
                  Coming Soon
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Baustellen-Kamera</h3>
                <p className="text-gray-300 mb-4">
                  Intelligente Zeitraffer-Kameras für lückenlose Baufortschrittsdokumentation. 4K-Qualität rund um die
                  Uhr mit Cloud-Zugriff und automatischer Zeitraffer-Erstellung.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">Verfügbar Q4 2025</span>
                  <Link
                    href="/kontakt#kontaktformular"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Mehr herausfinden →
                  </Link>
                </div>
              </div>
            </div>

            {/* Coming Soon - Riss Monitoring */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%284%29-LMvh6fPpL5tmGLaYYY6MiuUbWoekiW.png"
                  alt="Coming Soon: Professionelles Riss-Monitoring für Gebäude und Bauwerke mit Drohnentechnologie"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-md text-sm font-medium">
                  Coming Soon
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Riss-Monitoring mit Drohne</h3>
                <p className="text-gray-300 mb-4">
                  Kontinuierliche Überwachung struktureller Integrität von Bauwerken. Millimeterpräzise Messungen und
                  Frühwarnsystem für kritische Veränderungen an schwer zugänglichen Stellen.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">Verfügbar Q1 2026</span>
                  <Link
                    href="/kontakt#kontaktformular"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Mehr herausfinden →
                  </Link>
                </div>
              </div>
            </div>

            {/* Coming Soon - Reinigungsdrohne */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] group">
            <div className="h-64 relative overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/595bf4ce-760f-4f06-8f2c-85ae4837bb09-2.jpg-bjnrCPMXq4pbahk3LQyHtBFRR5F945.jpeg"
                alt="Coming Soon: Revolutionäre Reinigungsdrohne für Fassaden und Hochbauten"
                fill
                className="object-cover object-top md:object-[50%_35%] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
            </div>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-md text-sm font-medium">
                  Coming Soon
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Reinigungsdrohne</h3>
                <p className="text-gray-300 mb-4">
                  Revolutionäre DJI M300 RTK Reinigungsdrohne für Fassaden und Hochbauten. Bis zu 90% Kostenersparnis
                  gegenüber herkömmlichen Gerüst- und Kletterlösungen.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">Verfügbar Q4 2025</span>
                  <Link
                    href="/kontakt#kontaktformular"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Mehr herausfinden →
                  </Link>
                </div>
              </div>
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
    </main>
  )
}
