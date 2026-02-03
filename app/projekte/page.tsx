import Image from "next/image"
import { Button } from "@/components/ui/button"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import type { Metadata } from "next"
import { Star, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Projekte | Luftraum247 - Erfolgreich abgeschlossene Drohneninspektionen",
  description:
    "Sehen Sie sich eine Auswahl unserer erfolgreich abgeschlossenen Projekte an. Von PV-Anlagen über Industrieinspektionen bis hin zu 3D-Vermessungen – überzeugen Sie sich von unserer Expertise.",
  keywords:
    "Projekte, Fallstudien, Referenzprojekte, Drohneninspektionen, Thermografie, 3D-Vermessung, Luftraum247, Kundenprojekte",
}

// Real project data
const projects = [
  {
    title: "Bauwerksprüfung nach VDI 6200 bei VW Nutzfahrzeuge",
    category: "Industrie- & Bauinspektion",
    description: `
      <p>Im Rahmen einer umfassenden Bauwerksprüfung nach VDI 6200 bei VW Nutzfahrzeuge Hannover konnte Luftraum247 eindrucksvoll unter Beweis stellen, wie moderne Drohnentechnologie traditionelle Inspektionsverfahren revolutioniert. Das Projekt wurde in enger Zusammenarbeit mit dem renommierten Ingenieurbüro IC-L aus Langenhagen durchgeführt.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Projektumfang und technische Herausforderungen</h4>
      <p>Das Projekt umfasste die Inspektion einer beeindruckenden Hallendachflächen von 30.000 m². Für diese anspruchsvolle Aufgabe kam die hochmoderne DJI Avata 2 zum Einsatz, die speziell für Innenräume konzipiert ist und auch schwer zugängliche Bereiche präzise inspizieren kann.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Vorteile des drohnengestützten Ansatzes:</h4>
      <ul class="list-disc pl-5 space-y-1 text-gray-300">
        <li><strong>Sicherheit:</strong> Keine Gefährdung von Inspektionspersonal in großen Höhen.</li>
        <li><strong>Effizienz:</strong> Deutlich reduzierte Inspektionszeiten bei 30.000 m² Hallenfläche.</li>
        <li><strong>Präzision:</strong> Hochauflösende Dokumentation aller relevanten Bereiche.</li>
        <li><strong>Kosteneffizienz:</strong> Bis zu 70% Kostenersparnis gegenüber herkömmlichen Methoden.</li>
      </ul>
      <p class="mt-4">Die erfolgreiche Projektabwicklung im Juni 2025 demonstriert eindrucksvoll, wie Luftraum247 auch bei Großprojekten zuverlässige und professionelle Ergebnisse liefert.</p>
    `,
    image: "/vw-nutzfahrzeuge-inspektion.jpg",
    tags: ["VDI 6200", "30.000 m²", "DJI Avata 2", "IC-L Partnerschaft", "VW Nutzfahrzeuge"],
  },
  {
    title: "Solar Care Plus bei Toyota",
    category: "PV-Inspektion & Solar Care Plus",
    description: `
      <p>Für Toyota haben wir im Rahmen unseres Solar Care Plus-Services ein vollständiges PV-Servicepaket umgesetzt: Drohnen-Thermografie, visuelle Inspektion, Reinigung sowie VDE-konforme Prüfungen – inklusive technischer Dokumentation. Ziel war es, den Anlagenzustand schnell, sicher und präzise zu erfassen und eine belastbare Grundlage für Instandhaltung und Performance-Optimierung zu schaffen.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Unser Vorgehen</h4>
      <ul class="list-disc pl-5 space-y-1 text-gray-300">
        <li>Planung &amp; Abstimmung der Abläufe inkl. Sicherheitskonzept</li>
        <li>Drohnenbefliegung (Thermografie + Sichtprüfung) zur Identifikation von Auffälligkeiten</li>
        <li>Reinigung der Anlage zur Wiederherstellung optimaler Erträge</li>
        <li>VDE-konforme Prüfungen und strukturierte Ergebnisdokumentation</li>
        <li>Aufbereitung und Übergabe der Ergebnisse in kundengerechten Formaten</li>
      </ul>
      <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Mehrwert</h4>
      <ul class="list-disc pl-5 space-y-1 text-gray-300">
        <li>Hohe Detailtiefe in kurzer Zeit bei minimalem Eingriff in den Betrieb</li>
        <li>Mehr Sicherheit durch Inspektion aus der Distanz</li>
        <li>Prüf- und wartungsfähige Dokumentation als Basis für Instandhaltung und Nachweise</li>
      </ul>
      <p class="mt-4"><strong>Interesse an Solar Care Plus für Ihre PV-Anlage?</strong> Wir beraten persönlich und erstellen ein passendes Konzept für Ihren Anwendungsfall.</p>
    `,
    image: "/Toyota%20Material%20Handling%20Deutschland.jpeg",
    tags: ["Toyota", "Drohnen-Thermografie", "Visuelle Inspektion", "Reinigung", "VDE-Prüfungen", "Dokumentation"],
  },
  {
    title: "Solar Care Plus bei Bahlsen - 85% Problemreduzierung",
    category: "PV-Inspektion & Thermografie",
    description: `
      <p>Das herausragende Resultat des Bahlsen-Projekts: Der Hotspot-Faktor konnte durch die professionelle Reinigung von 100 auf 15 reduziert werden - eine Verbesserung von 85%. Diese messbare Leistungssteigerung unterstreicht den Wert des kombinierten Thermografie- und Reinigungsservice.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Umfassender Service nach höchsten Standards:</h4>
      <p>Das mehrtägige Projekt umfasste eine vollständige Betreuung der Bahlsen-Solaranlage nach neuesten technischen Standards mit VDE 0126-23-1 konformer Prüfung und detaillierter Thermografie-Inspektion.</p>
      <h4 class="text-lg font-semibold mt-4 mb-2 text-white">Messbare Ergebnisse:</h4>
      <ul class="list-disc pl-5 space-y-1 text-gray-300">
        <li><strong>85% Reduzierung</strong> der Hotspot-Probleme (von Faktor 100 auf 15)</li>
        <li><strong>60% der Probleme</strong> durch Verschmutzung verursacht</li>
        <li><strong>Verlängerte Lebensdauer</strong> der Photovoltaikmodule</li>
        <li><strong>Komplette Garantieabwicklung</strong> bei defekten Modulen</li>
      </ul>
      <p class="mt-4">Mit modernster DJI Matrice M30T Technologie und professioneller Reinigungsausrüstung konnte eine messbare Leistungssteigerung der Solaranlage erreicht werden.</p>
    `,
    image: "/ProjektBahlsen1.JPEG",
    tags: ["85% Verbesserung", "VDE 0126-23-1", "DJI Matrice M30T", "Solar Care Plus", "Bahlsen"],
  },
]

export default function ProjektePage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://luftraum247.de/" },
    { name: "Projekte", url: "https://luftraum247.de/projekte" },
  ]

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vw-nutzfahrzeuge-inspektion.jpg"
            alt="Erfolgreich abgeschlossene Drohnenprojekte von Luftraum247"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Unsere Projekte</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Ein Einblick in unsere Arbeit und die erfolgreiche Umsetzung anspruchsvoller Projekte für unsere Kunden.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg border border-zinc-700/50 transition-all duration-300 hover:border-blue-600/50 hover:shadow-blue-500/10 flex flex-col"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Projektbild für ${project.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <div
                    className="text-gray-300 mb-4 flex-grow"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-zinc-700 text-zinc-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Trust */}
      <section className="py-16 bg-blue-950/40 border-y border-blue-900/40">
        <div className="container mx-auto px-4">
          <div className="bg-zinc-900/80 border border-blue-900 rounded-xl p-8 md:p-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <p className="text-sm uppercase tracking-wide text-blue-300 mb-2">Erprobte Ergebnisse</p>
              <h2 className="text-3xl font-bold text-white mb-4">Das nächste Erfolgsprojekt könnte Ihres sein</h2>
              <p className="text-lg text-gray-300">
                Ob PV-Thermografie, VDI 6200 Prüfungen oder 3D-Aufmaß: Sie erhalten einen klaren Projektplan,
                datenschutzsichere Übergabe und messbare Verbesserungen – dokumentiert in einem verständlichen Report.
              </p>
              <ul className="text-gray-300 space-y-2 mt-4">
                <li>✔ LBA-registrierte Piloten, VDE-konforme Prüfungen</li>
                <li>✔ Vollversichert bis 5 Mio. € und DSGVO-konforme Datenhaltung</li>
                <li>✔ Verbindliche Zeitpläne und transparente Angebote</li>
              </ul>
            </div>
            <div className="space-y-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full px-6 py-3" asChild>
                <a href="/kontakt#kontaktformular">Projekt besprechen</a>
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-400 hover:bg-blue-950 w-full px-6 py-3"
                asChild
              >
                <a href="/dienstleistungen">Leistungen vergleichen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-zinc-800 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-zinc-700">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2 text-blue-400">Zufriedene Kunden sind unsere beste Referenz</h2>
              <p className="text-lg text-gray-300 mb-4">
                Lesen Sie, was unsere Kunden über die Zusammenarbeit mit uns sagen.
              </p>
              <div className="flex justify-center md:justify-start items-center gap-2">
                <span className="font-bold text-yellow-400 text-lg">5.0</span>
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <span className="text-gray-400">(Basierend auf Google Bewertungen)</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-semibold">
                <a
                  href="https://www.google.com/maps/place/LUFTRAUM247.de/@52.4336423,9.7875224,17z/data=!4m8!3m7!1s0x893f7b3f5a183107:0xcd379f7138d7d9bd!8m2!3d52.4336423!4d9.7900973!9m1!1b1!16s%2Fg%2F11tp1nsq6c?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bewertungen lesen oder schreiben
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
