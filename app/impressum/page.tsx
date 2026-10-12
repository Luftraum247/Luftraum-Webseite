import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Impressum | Luftraum247",
  description:
    "Impressum und rechtliche Informationen zu Luftraum247, Ihrem Partner für professionelle Drohneninspektionen.",
  robots: "noindex, follow",
}

function Abschnitt({ titel, children }: { titel: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">{titel}</h2>
      <div className="space-y-1 text-gray-300 leading-relaxed">{children}</div>
    </div>
  )
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Impressum</h1>
          <p className="text-xl text-gray-300">Angaben gemäß § 5 DDG</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-lg p-6 md:p-8">
            <div className="space-y-10">
              <Abschnitt titel="Anbieter">
                <p>Luftraum247.de</p>
                <p>Inhaber: Jorge Marques</p>
                <p>Schäfertrift 19</p>
                <p>30657 Hannover</p>
                <p>Deutschland</p>
              </Abschnitt>

              <Abschnitt titel="Kontakt">
                <p>Festnetz: +49 511 99922127</p>
                <p>Mobil: +49 163 1902432</p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:marques.jorge@luftraum247.de" className="text-blue-400 hover:underline">
                    marques.jorge@luftraum247.de
                  </a>
                </p>
                <p>Website: www.luftraum247.de</p>
              </Abschnitt>

              <Abschnitt titel="Umsatzsteuer-ID">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE423218119</p>
              </Abschnitt>

              <Abschnitt titel="Versicherungen">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Betriebshaftpflichtversicherung</h3>
                    <p>VGH Versicherungen, Hannover</p>
                    <p>Vertragsnummer: 0168-000.377.673</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Luftfahrt-Haftpflichtversicherung (Drohnen)</h3>
                    <p>GVO Versicherung</p>
                    <p>Vertragsnummer: 01066290-DH-01</p>
                  </div>
                </div>
              </Abschnitt>

              <Abschnitt titel="Registrierung und Genehmigungen">
                <p>UAS-Betreiber-Nr.: DEUh244os6sjrjwv (registriert beim Luftfahrt-Bundesamt)</p>
                <p>Allgemeine Aufstiegsgenehmigung Nr.: DEU-GEO_NI00VV0000486/001</p>
              </Abschnitt>

              <Abschnitt titel="Mitgliedschaft">
                <p>BVCP Bundesverband der Copterpiloten e. V., Mitgliedsnummer: 1458</p>
              </Abschnitt>

              <Abschnitt titel="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
                <p>Jorge Marques, Schäfertrift 19, 30657 Hannover</p>
              </Abschnitt>

              <Abschnitt titel="Verbraucherstreitbeilegung">
                <p>
                  Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </Abschnitt>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
