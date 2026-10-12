import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Datenschutz | Luftraum247",
  description: "Datenschutzerklärung von Luftraum247: wie wir mit Ihren Daten umgehen und welche Rechte Sie haben.",
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

function Liste({ punkte }: { punkte: ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 marker:text-blue-400">
      {punkte.map((punkt, i) => (
        <li key={i}>{punkt}</li>
      ))}
    </ul>
  )
}

function ExternerLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
      {children}
    </a>
  )
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Datenschutzerklärung</h1>
          <p className="text-xl text-gray-300">Wie wir mit Ihren Daten umgehen</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-lg p-6 md:p-8">
            <div className="space-y-10">
              <Abschnitt titel="1. Verantwortlicher">
                <p>Verantwortlich für die Datenverarbeitung auf dieser Website und in unserem Geschäftsbetrieb ist:</p>
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
                  Ein Datenschutzbeauftragter ist nicht bestellt, da hierzu keine gesetzliche Pflicht besteht. Bei Fragen
                  zum Datenschutz wenden Sie sich bitte direkt an die oben genannte Adresse.
                </p>
              </Abschnitt>

              <Abschnitt titel="2. Hosting und Server-Logfiles">
                <p>
                  Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Bilder
                  und Dateien der Website werden ebenfalls über Vercel bereitgestellt. Beim Aufruf der Website werden
                  technisch notwendige Daten verarbeitet:
                </p>
                <Liste
                  punkte={[
                    "IP-Adresse",
                    "Datum und Uhrzeit des Zugriffs",
                    "aufgerufene Seite und zuvor besuchte Seite (Referrer)",
                    "Browsertyp, Betriebssystem und Gerätetyp",
                  ]}
                />
                <p>
                  Diese Daten sind erforderlich, um die Website sicher und stabil auszuliefern. Rechtsgrundlage ist unser
                  berechtigtes Interesse an einem sicheren und funktionsfähigen Internetauftritt (Art. 6 Abs. 1 lit. f
                  DSGVO). Die Logdaten werden von Vercel nur für kurze Zeit gespeichert und anschließend gelöscht.
                </p>
                <p>
                  Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO). Vercel ist nach dem
                  EU-US Data Privacy Framework zertifiziert; die Übermittlung in die USA stützt sich auf den
                  Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO) sowie ergänzend auf
                  Standardvertragsklauseln. Weitere Informationen:{" "}
                  <ExternerLink href="https://vercel.com/legal/privacy-policy">vercel.com/legal/privacy-policy</ExternerLink>
                </p>
              </Abschnitt>

              <Abschnitt titel="3. Cookies">
                <p>
                  Wir setzen auf dieser Website keine Cookies zu Analyse-, Tracking- oder Werbezwecken ein. Soweit
                  technisch notwendige Speicherungen im Browser erfolgen, dienen diese ausschließlich der Bereitstellung
                  der Website (§ 25 Abs. 2 TDDDG).
                </p>
              </Abschnitt>

              <Abschnitt titel="4. Kontaktaufnahme">
                <p>
                  Wenn Sie uns über das Kontaktformular, per E-Mail, Telefon oder WhatsApp kontaktieren, verarbeiten wir
                  Ihre Angaben (z. B. Name, Firma, E-Mail-Adresse, Telefonnummer, Inhalt Ihrer Anfrage), um Ihre Anfrage
                  zu bearbeiten und Ihnen ein Angebot zu erstellen.
                </p>
                <p>
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage auf einen Vertragsschluss gerichtet
                  ist, und im Übrigen unser berechtigtes Interesse an der Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f
                  DSGVO). Die Angaben im Kontaktformular werden per E-Mail an uns übermittelt.
                </p>
                <p>
                  Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Daten zusätzlich von WhatsApp Ireland Limited
                  bzw. Meta Platforms verarbeitet, auch in den USA. Die Nutzung von WhatsApp ist freiwillig; Sie können
                  uns jederzeit auch per E-Mail oder Telefon erreichen.
                </p>
              </Abschnitt>

              <Abschnitt titel="5. Auftragsabwicklung und Drohneneinsätze">
                <p>
                  Zur Durchführung unserer Aufträge verarbeiten wir die Kontakt-, Vertrags- und Rechnungsdaten unserer
                  Kunden (Art. 6 Abs. 1 lit. b und c DSGVO). Soweit erforderlich, geben wir Daten weiter an:
                </p>
                <Liste
                  punkte={[
                    "Behörden, wenn dies für Aufstiegs- oder Sondergenehmigungen notwendig ist,",
                    "von uns beauftragte Subunternehmer (z. B. Piloten, Kameraoperatoren), soweit sie für den Auftrag tätig werden,",
                    "unseren Steuerberater sowie Banken und Zahlungsdienstleister zur Abrechnung.",
                  ]}
                />
                <p>
                  Bei Drohnenaufnahmen können Personen, Fahrzeuge oder Grundstücke Dritter zufällig mit erfasst werden.
                  Wir achten darauf, Unbeteiligte möglichst nicht erkennbar aufzunehmen, und machen erkennbare Personen
                  auf Wunsch unkenntlich. Rechtsgrundlage ist unser berechtigtes Interesse bzw. das unserer Auftraggeber
                  an der Durchführung des Auftrags (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </Abschnitt>

              <Abschnitt titel="6. Kundenbewertungen (ProvenExpert)">
                <p>
                  Auf unserer Website binden wir ein Bewertungssiegel von ProvenExpert ein (Expert Systems AG,
                  Quedlinburger Straße 1, 10589 Berlin). Beim Laden des Siegels wird Ihre IP-Adresse an ProvenExpert
                  übermittelt. Rechtsgrundlage ist unser berechtigtes Interesse an der Darstellung von Kundenbewertungen
                  (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen:{" "}
                  <ExternerLink href="https://www.provenexpert.com/de-de/datenschutzbestimmungen/">
                    provenexpert.com/de-de/datenschutzbestimmungen
                  </ExternerLink>
                </p>
              </Abschnitt>

              <Abschnitt titel="7. Links zu sozialen Netzwerken">
                <p>
                  Auf unserer Website verlinken wir auf unsere Profile bei Facebook, Instagram und LinkedIn. Es handelt
                  sich um einfache Links, nicht um eingebettete Plugins. Daten werden erst an den jeweiligen Anbieter
                  übertragen, wenn Sie einen Link anklicken und dessen Seite aufrufen. Dort gelten die
                  Datenschutzbestimmungen des jeweiligen Anbieters.
                </p>
              </Abschnitt>

              <Abschnitt titel="8. Speicherdauer">
                <p>
                  Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist.
                  Anfragen, aus denen kein Auftrag entsteht, löschen wir spätestens nach 12 Monaten. Vertrags- und
                  Rechnungsunterlagen bewahren wir entsprechend den gesetzlichen Aufbewahrungsfristen auf (in der Regel 6
                  Jahre für Geschäftsbriefe und 8 Jahre für Buchungsbelege und Rechnungen, § 147 AO, § 257 HGB).
                </p>
              </Abschnitt>

              <Abschnitt titel="9. Ihre Rechte">
                <p>Sie haben jederzeit das Recht auf:</p>
                <Liste
                  punkte={[
                    "Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO),",
                    "Berichtigung unrichtiger Daten (Art. 16 DSGVO),",
                    "Löschung Ihrer Daten, soweit keine gesetzliche Aufbewahrungspflicht besteht (Art. 17 DSGVO),",
                    "Einschränkung der Verarbeitung (Art. 18 DSGVO),",
                    "Datenübertragbarkeit (Art. 20 DSGVO),",
                    "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).",
                  ]}
                />
                <p className="bg-zinc-800 rounded p-4 text-gray-200">
                  <strong className="text-white">Widerspruchsrecht (Art. 21 DSGVO):</strong> Soweit wir Daten auf
                  Grundlage unseres berechtigten Interesses verarbeiten, können Sie dieser Verarbeitung aus Gründen, die
                  sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen.
                </p>
                <p>
                  Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an{" "}
                  <a href="mailto:info@luftraum247.de" className="text-blue-400 hover:underline">
                    info@luftraum247.de
                  </a>
                  .
                </p>
                <p>
                  Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77
                  DSGVO). Für uns zuständig ist: Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5,
                  30159 Hannover,{" "}
                  <ExternerLink href="https://www.lfd.niedersachsen.de">www.lfd.niedersachsen.de</ExternerLink>
                </p>
              </Abschnitt>

              <Abschnitt titel="10. Automatisierte Entscheidungen">
                <p>Wir verwenden keine automatisierte Entscheidungsfindung und kein Profiling.</p>
              </Abschnitt>

              <p className="text-sm text-gray-400 pt-4 border-t border-zinc-700">Stand: 12.10.2026</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
