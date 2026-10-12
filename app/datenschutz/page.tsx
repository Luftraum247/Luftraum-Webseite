import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Widerrufsbelehrung | Luftraum247",
  description: "Widerrufsbelehrung und Muster-Widerrufsformular für Verbraucher bei Luftraum247.",
  robots: "noindex, follow",
}

function Abschnitt({ titel, children }: { titel: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">{titel}</h2>
      <div className="space-y-3 text-gray-300 leading-relaxed">{children}</div>
    </div>
  )
}

export default function WiderrufPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Widerrufsbelehrung</h1>
          <p className="text-xl text-gray-300">Für Verbraucher im Sinne von § 13 BGB</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-lg p-6 md:p-8">
            <div className="space-y-10">
              <p className="text-gray-300 leading-relaxed">
                Das folgende Widerrufsrecht gilt nur für Verbraucher, also natürliche Personen, die den Vertrag
                überwiegend zu privaten Zwecken abschließen. Für Unternehmer besteht kein Widerrufsrecht.
              </p>

              <Abschnitt titel="Widerrufsrecht">
                <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
                <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
                <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>
                <address className="not-italic bg-zinc-800 rounded p-4 text-gray-200">
                  Luftraum247.de, Inhaber Jorge Marques
                  <br />
                  Schäfertrift 19, 30657 Hannover
                  <br />
                  Telefon: +49 511 99922127
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:info@luftraum247.de" className="text-blue-400 hover:underline">
                    info@luftraum247.de
                  </a>
                </address>
                <p>
                  mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren
                  Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das unten stehende
                  Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
                </p>
                <p>
                  Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
                  Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
                </p>
              </Abschnitt>

              <Abschnitt titel="Folgen des Widerrufs">
                <p>
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben,
                  einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass
                  Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt
                  haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die
                  Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden
                  wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn,
                  mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser
                  Rückzahlung Entgelte berechnet.
                </p>
                <p>
                  Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie
                  uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von
                  der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten
                  Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
                </p>
              </Abschnitt>

              <Abschnitt titel="Muster-Widerrufsformular">
                <p>
                  Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es
                  zurück.
                </p>
                <div className="bg-zinc-800 rounded p-4 space-y-3 text-gray-200">
                  <p>
                    An: Luftraum247.de, Inhaber Jorge Marques, Schäfertrift 19, 30657 Hannover, E-Mail:
                    info@luftraum247.de
                  </p>
                  <p>
                    Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der
                    folgenden Dienstleistung:
                  </p>
                  <p>_______________________________________________</p>
                  <p>Bestellt am: ____________________</p>
                  <p>Name des/der Verbraucher(s): ____________________</p>
                  <p>Anschrift des/der Verbraucher(s): ____________________</p>
                  <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): ____________________</p>
                  <p>Datum: ____________________</p>
                  <p className="text-sm text-gray-400">(*) Unzutreffendes streichen.</p>
                </div>
              </Abschnitt>

              <p className="text-sm text-gray-400 pt-4 border-t border-zinc-700">Stand: 12.10.2026</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
