import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum | Luftraum247",
  description:
    "Impressum und rechtliche Informationen zu Luftraum247, Ihrem Partner für professionelle Drohneninspektionen.",
  robots: "noindex, follow",
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Impressum</h1>
          <p className="text-xl text-gray-300">Informationen gemäß § 5 TMG</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-lg p-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Angaben gemäß § 5 TMG:</h2>
                <p className="text-gray-300">Luftraum247.de</p>
                <p className="text-gray-300">Schäfertrift 19, 30657 Hannover</p>
                <p className="text-gray-300">Deutschland</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Vertreten durch:</h2>
                <p className="text-gray-300">Geschäftsführer: Jorge Marques</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Kontakt:</h2>
                <p className="text-gray-300">Festnetz: +4951199922127</p>
                <p className="text-gray-300">Mobil: +491631902432</p> 
                <p className="text-gray-300">E-Mail: marques.jorge@luftraum247.de</p>
                <p className="text-gray-300">Website: www.luftraum247.de</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Registereintrag:</h2>
                <p className="text-gray-300">Eintragung im Handelsregister.</p>
                <p className="text-gray-300">Registergericht: Amtsgericht Hannover</p>
                <p className="text-gray-300">Registernummer: [Handelsregisternummer]</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Versicherungen:</h2>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Gewerbeversicherung: VGH</h3>
                  <p className="text-gray-300">Nr: 0168-000.377.673</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Drohnenversicherung: GVO</h3>
                  <p className="text-gray-300">Nr: 01066290-DH-01</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Genehmigungen und Mitgliedschaften:</h2>
                <p className="text-gray-300">AUS Betreiber Nr. DEUh244os6sjrjwv Luftraum-Bundesamt</p>
                <p className="text-gray-300">Alg. Aufstiegsgenehmigung Nr. DEU-GEO_NI00VV0000486/001</p>
                <p className="text-gray-300">BVCP Bundesverband der Copterpiloten EV.</p>
                <p className="text-gray-300">Mitgliednummer: 1458</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Umsatzsteuer-ID:</h2>
                <p className="text-gray-300">
                  Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE423218119
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                </h2>
                <p className="text-gray-300">Jorge Marques</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  Hinweis gemäß Online-Streitbeilegungs-Verordnung:
                </h2>
                <p className="text-gray-300">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>{" "}
                  finden. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
