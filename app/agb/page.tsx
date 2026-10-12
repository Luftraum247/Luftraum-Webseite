import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AGB | Luftraum247",
  description:
    "Allgemeine Geschäftsbedingungen von Luftraum247 für Luftaufnahmen, Drohneninspektionen und weitere Drohnendienstleistungen.",
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

function Liste({ punkte, start }: { punkte: ReactNode[]; start?: number }) {
  return (
    <ol start={start} className="list-decimal pl-6 space-y-2 marker:text-blue-400">
      {punkte.map((punkt, i) => (
        <li key={i}>{punkt}</li>
      ))}
    </ol>
  )
}

const stornoStaffel = [
  { zeitpunkt: "bis 7 Tage vor dem Termin", pauschale: "25 %" },
  { zeitpunkt: "7 bis 3 Tage vor dem Termin", pauschale: "50 %" },
  { zeitpunkt: "3 Tage bis 24 Stunden vor dem Termin", pauschale: "75 %" },
  { zeitpunkt: "weniger als 24 Stunden vor dem Termin", pauschale: "90 %" },
]

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-xl text-gray-300">Bedingungen für unsere Dienstleistungen</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-lg p-6 md:p-8">
            <div className="space-y-10">
              <Abschnitt titel="§ 1 Geltungsbereich">
                <Liste
                  punkte={[
                    <>
                      Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Luftraum247.de,
                      Inhaber Jorge Marques, Schäfertrift 19, 30657 Hannover (nachfolgend „Auftragnehmer“), und dem
                      Auftraggeber über Luftaufnahmen (Fotos, Videos), sonstige Drohnendienstleistungen sowie deren
                      Bearbeitung.
                    </>,
                    "Sie gelten gegenüber Verbrauchern (§ 13 BGB) und Unternehmern (§ 14 BGB). Wo einzelne Regelungen nur für eine Gruppe gelten, ist dies ausdrücklich angegeben.",
                    "Abweichende oder ergänzende Bedingungen des Auftraggebers werden nur Vertragsbestandteil, wenn der Auftragnehmer ihnen ausdrücklich in Textform zustimmt. Individuelle Vereinbarungen im Einzelfall haben stets Vorrang vor diesen AGB.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 2 Vertragsschluss und Angebote">
                <Liste
                  punkte={[
                    "Angebote des Auftragnehmers sind freibleibend und gelten bis zu dem im Angebot genannten Datum.",
                    "Der Vertrag kommt durch die Annahme des Angebots durch den Auftraggeber und die Auftragsbestätigung des Auftragnehmers in Textform (z. B. E-Mail) zustande.",
                    "Mündlich erteilte Aufträge und Absprachen bestätigt der Auftragnehmer in Textform. Maßgeblich für den Leistungsumfang ist das Angebot bzw. die Auftragsbestätigung.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 3 Sicherheit und Entscheidungsgewalt des Piloten">
                <Liste
                  punkte={[
                    "Die Sicherheit von Personen, Sachen und des Luftraums hat stets Vorrang vor der Vertragserfüllung.",
                    "Ob, wann, wo und wie geflogen wird, entscheidet ausschließlich der verantwortliche Fernpilot vor Ort, vorbehaltlich behördlicher Anordnungen. Er kann einen Flug jederzeit ablehnen, unterbrechen oder abbrechen, wenn die Sicherheit gefährdet ist.",
                    "Alle Flüge werden nach den jeweils geltenden luftrechtlichen Vorschriften durchgeführt, insbesondere der Durchführungsverordnung (EU) 2019/947 und der Luftverkehrs-Ordnung (LuftVO). Flüge über Orten, an denen der Betrieb untersagt oder genehmigungspflichtig ist (z. B. Menschenansammlungen, Justizvollzugsanstalten, Industrie- und Energieanlagen, militärische Anlagen, Unfallorte, bestimmte Verkehrswege und Naturschutzgebiete), finden nur statt, soweit die erforderlichen Genehmigungen oder Zustimmungen vorliegen.",
                    "Aufnahmen zu Zwecken, die Persönlichkeitsrechte verletzen (z. B. heimliches Ausspähen von Personen), werden nicht durchgeführt.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 4 Genehmigungen und Mitwirkungspflichten">
                <Liste
                  punkte={[
                    "Der Auftragnehmer kümmert sich um die für den Flugbetrieb erforderlichen Genehmigungen. Dies ist in der Regel im Angebotspreis enthalten.",
                    "Gebühren für Sondergenehmigungen (z. B. Naturschutzgebiete, Wasserstraßen, Sondernutzungen, Drehgenehmigungen Dritter) trägt der Auftraggeber, sofern im Angebot nichts anderes vereinbart ist. Der Auftragnehmer weist vorab auf absehbare Kosten hin.",
                    "Der Auftraggeber unterstützt den Auftragnehmer dabei, insbesondere durch rechtzeitige Angaben zu Ort, Zeit, Zugang und gewünschten Motiven sowie durch die Einholung der Zustimmung von Grundstückseigentümern und abgebildeten Personen, soweit diese erforderlich ist.",
                    "Beruhen Verzögerungen oder Mehraufwand auf falschen oder unvollständigen Angaben des Auftraggebers oder fehlender Mitwirkung, kann der Auftragnehmer den nachgewiesenen Mehraufwand gesondert berechnen.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 5 Durchführung, Gestaltungsspielraum, Korrekturschleifen">
                <Liste
                  punkte={[
                    "Der Auftragnehmer führt den Auftrag mit der gebotenen Sorgfalt und im Interesse des Auftraggebers durch. Wünsche des Auftraggebers vor Ort werden berücksichtigt, soweit sie sicher und rechtlich zulässig umsetzbar sind.",
                    "Bei der Bildgestaltung (Perspektive, Licht, Schnitt, Farbgebung) hat der Auftragnehmer einen künstlerischen Gestaltungsspielraum. Reine Geschmacksfragen begründen keinen Mangel. Gesetzliche Gewährleistungsrechte bei tatsächlichen Mängeln bleiben unberührt.",
                    "Bei gebuchtem Videoschnitt oder Bildbearbeitung ist eine Korrekturrunde im Preis enthalten. Weitere Korrekturrunden oder Änderungen, die über den vereinbarten Umfang hinausgehen, werden nach Aufwand gemäß den im Angebot genannten Stundensätzen berechnet und vorher angekündigt.",
                    "Der Auftraggeber prüft das gelieferte Material innerhalb von 14 Tagen und teilt etwaige Mängel oder Korrekturwünsche in Textform mit.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 6 Wetter und Ersatztermine">
                <Liste
                  punkte={[
                    "Bei Regen, Schneefall, Nebel, Gewitter, starkem Wind oder vergleichbaren Bedingungen sind Drohnenflüge nicht oder nur eingeschränkt möglich. Ob ein Flug wetterbedingt stattfinden kann, entscheidet der Pilot nach § 3.",
                    "Ist absehbar, dass der Termin wetterbedingt nicht stattfinden kann, informiert der Auftragnehmer den Auftraggeber so früh wie möglich. Beide Seiten vereinbaren dann einen Ersatztermin; die Verschiebung ist für den Auftraggeber kostenfrei.",
                    "Fällt der Flug erst vor Ort wetterbedingt aus, werden nur die tatsächlich angefallenen Kosten (Anfahrt, ggf. Übernachtung, bereits bezahlte Genehmigungen) berechnet. Für den Ersatztermin erhält der Auftraggeber nach Absprache einen Nachlass auf das Honorar.",
                    "Kommt innerhalb von 3 Monaten kein Ersatztermin zustande, können beide Seiten den Vertrag kostenfrei beenden; bereits geleistete Anzahlungen werden abzüglich der nach Absatz 3 angefallenen Kosten erstattet.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 7 Stornierung durch den Auftraggeber">
                <Liste
                  punkte={[
                    "Der Auftraggeber kann den Auftrag jederzeit in Textform stornieren. Das gesetzliche Widerrufsrecht für Verbraucher (§ 16) bleibt davon unberührt.",
                    <>
                      Bei einer Stornierung nach verbindlicher Auftragserteilung kann der Auftragnehmer folgende
                      Pauschalen auf das vereinbarte Honorar verlangen:
                      <div className="mt-3 overflow-x-auto">
                        <table className="w-full text-left border border-zinc-700 rounded">
                          <thead className="bg-zinc-800 text-white">
                            <tr>
                              <th className="px-4 py-2 font-semibold">Zeitpunkt der Stornierung</th>
                              <th className="px-4 py-2 font-semibold">Pauschale</th>
                            </tr>
                          </thead>
                          <tbody>
                            {stornoStaffel.map((zeile) => (
                              <tr key={zeile.zeitpunkt} className="border-t border-zinc-700">
                                <td className="px-4 py-2">{zeile.zeitpunkt}</td>
                                <td className="px-4 py-2">{zeile.pauschale}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </>,
                    "Zusätzlich werden bereits angefallene, nicht mehr stornierbare Kosten (z. B. Genehmigungsgebühren, Übernachtungen, bereits angetretene Anreise) berechnet.",
                    "Dem Auftraggeber bleibt der Nachweis gestattet, dass dem Auftragnehmer kein oder ein wesentlich geringerer Schaden entstanden ist. Dem Auftragnehmer bleibt der Nachweis eines höheren Schadens vorbehalten.",
                    "Eine geleistete Anzahlung wird mit der Pauschale verrechnet.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 8 Rücktritt durch den Auftragnehmer">
                <Liste
                  punkte={[
                    <>
                      Der Auftragnehmer kann vom Vertrag zurücktreten oder einen laufenden Auftrag abbrechen, wenn
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                          die Durchführung aus Sicherheitsgründen, behördlichen Gründen oder höherer Gewalt nicht
                          möglich ist,
                        </li>
                        <li>erforderliche Genehmigungen nicht erteilt werden,</li>
                        <li>der Auftrag erkennbar gegen Gesetze oder Rechte Dritter verstößt (§ 9) oder</li>
                        <li>der Auftraggeber die Anzahlung trotz Mahnung nicht leistet.</li>
                      </ul>
                    </>,
                    "In den Fällen der ersten beiden Spiegelstriche erstattet der Auftragnehmer bereits geleistete Zahlungen für nicht erbrachte Leistungen; weitergehende Ansprüche bestehen nur nach § 15.",
                    "Liegt der Grund für den Rücktritt in der Sphäre des Auftraggebers (Spiegelstriche drei und vier), gilt § 7 entsprechend.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 9 Rechte Dritter und Freistellung">
                <Liste
                  punkte={[
                    "Der Auftraggeber versichert, dass Auftrag, Durchführung und die von ihm beabsichtigte Veröffentlichung keine Rechte Dritter verletzen (z. B. Persönlichkeits-, Marken-, Eigentums- oder Urheberrechte), soweit er dies beeinflussen oder erkennen kann.",
                    "Erlangt der Pilot während der Durchführung Kenntnis davon, dass der Auftrag gegen geltendes Recht verstößt, kann er den Auftrag abbrechen (§ 8). Rechtswidrig entstandenes Material darf er löschen.",
                    "Der Auftraggeber stellt den Auftragnehmer von Ansprüchen Dritter frei, die auf einer schuldhaften Verletzung der Pflicht nach Absatz 1 beruhen, einschließlich angemessener Kosten der Rechtsverteidigung.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 10 Preise, Einsatzzeiten, Reisekosten">
                <Liste
                  punkte={[
                    "Es gelten die im Angebot genannten Preise. Gegenüber Unternehmern verstehen sich alle Preise zuzüglich der gesetzlichen Umsatzsteuer. Gegenüber Verbrauchern sind die genannten Preise Endpreise einschließlich der gesetzlichen Umsatzsteuer.",
                    "Ein Einsatztag umfasst 8 Stunden, ein halber Einsatztag 4 Stunden, jeweils ab Ankunft am Einsatzort, sofern nichts anderes vereinbart ist.",
                    "Überstunden werden auf Basis des anteiligen Stundensatzes berechnet: die 1. und 2. Überstunde mit 15 % Zuschlag, ab der 3. Überstunde mit 20 % Zuschlag. Überstunden fallen nur an, wenn der Auftraggeber sie wünscht oder verursacht.",
                    "Fahrtkosten werden mit 1,00 € pro gefahrenem Kilometer (Hin- und Rückfahrt) berechnet, sofern nichts anderes vereinbart ist.",
                    "Bei größeren Entfernungen kann ein An- und/oder Abreisetag erforderlich sein. Dieser wird mit 250 € pro Person (500 € bei zwei Personen) zuzüglich angemessener Übernachtungs- und Verpflegungskosten berechnet. Der Auftragnehmer weist im Angebot darauf hin.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 11 Zahlungsbedingungen und Anzahlung">
                <Liste
                  punkte={[
                    "Nach Auftragsbestätigung stellt der Auftragnehmer eine Anzahlung von 30 % des Auftragswerts in Rechnung, zahlbar innerhalb von 7 Tagen. Der Termin ist erst nach Eingang der Anzahlung verbindlich reserviert.",
                    "Bei Projekten mit vereinbarten Meilensteinen werden Teilbeträge gemäß Angebot fällig.",
                    "Der Restbetrag wird nach Fertigstellung bzw. Lieferung in Rechnung gestellt und ist innerhalb von 14 Tagen nach Rechnungserhalt ohne Abzug zu zahlen.",
                    "Nach Ablauf der Zahlungsfrist gerät der Auftraggeber ohne weitere Mahnung in Verzug (§ 286 BGB). Verbraucher kommen in Verzug, wenn auf diese Folge in der Rechnung besonders hingewiesen wurde. Der Auftragnehmer kann dann Verzugszinsen in gesetzlicher Höhe verlangen und weitere rechtliche Schritte einleiten.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 12 Nutzungsrechte und Eigenwerbung">
                <Liste
                  punkte={[
                    "Das Urheberrecht an den Aufnahmen verbleibt beim Auftragnehmer. Der Auftraggeber erhält die im Angebot vereinbarten Nutzungsrechte. Ist nichts anderes vereinbart, erhält er ein einfaches, zeitlich und räumlich unbeschränktes Nutzungsrecht für eigene Zwecke (Website, Social Media, Print, Präsentationen).",
                    "Die Nutzungsrechte gehen erst mit vollständiger Bezahlung über. Bis dahin ist eine Nutzung nur mit Zustimmung des Auftragnehmers gestattet.",
                    "Die Weitergabe von Nutzungsrechten an Dritte, Bearbeitungen über übliche Zuschnitte hinaus oder eine ausschließliche Nutzung bedürfen einer gesonderten Vereinbarung.",
                    "Der Auftragnehmer ist bei Veröffentlichungen als Urheber zu nennen, sofern im Angebot nichts anderes vereinbart ist.",
                    "Der Auftragnehmer darf ausgewählte Aufnahmen für die eigene Werbung (Website, Portfolio, Social Media) verwenden. Der Auftraggeber kann dem jederzeit in Textform widersprechen, insbesondere bei vertraulichen Projekten oder erkennbaren Personen und Privatgrundstücken.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 13 Datenlieferung und Archivierung">
                <Liste
                  punkte={[
                    "Das fertige Material wird digital per Download-Link geliefert, in der Regel innerhalb von 10 Werktagen nach dem Aufnahmetermin bzw. nach Freigabe der Korrekturen.",
                    "Rohdaten werden nur geliefert, wenn dies im Angebot vereinbart ist.",
                    "Der Auftraggeber ist für die Sicherung des gelieferten Materials selbst verantwortlich. Der Auftragnehmer bewahrt die Daten 6 Monate nach Lieferung auf; eine darüber hinausgehende Archivierungspflicht besteht nicht.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 14 Subunternehmer">
                <p>
                  Der Auftragnehmer darf zur Durchführung qualifizierte und versicherte Subunternehmer (z. B. Piloten,
                  Kameraoperatoren, Cutter) einsetzen. Die Verantwortung gegenüber dem Auftraggeber bleibt beim
                  Auftragnehmer.
                </p>
              </Abschnitt>

              <Abschnitt titel="§ 15 Haftung">
                <Liste
                  punkte={[
                    "Alle Flüge sind durch eine Luftfahrt-Haftpflichtversicherung abgesichert.",
                    "Der Auftragnehmer haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder Gesundheit sowie nach dem Produkthaftungsgesetz und den zwingenden Vorschriften des Luftverkehrsgesetzes.",
                    "Bei leicht fahrlässiger Verletzung einer wesentlichen Vertragspflicht (einer Pflicht, deren Erfüllung die Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber vertrauen darf) ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.",
                    "Im Übrigen ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.",
                    "Diese Regelungen gelten auch für Erfüllungsgehilfen und Subunternehmer des Auftragnehmers.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 16 Widerrufsrecht für Verbraucher">
                <Liste
                  punkte={[
                    "Verbrauchern steht bei Verträgen, die ausschließlich über Fernkommunikationsmittel (z. B. E-Mail, Telefon, Online-Formular) geschlossen werden, ein gesetzliches Widerrufsrecht von 14 Tagen zu. Die Einzelheiten ergeben sich aus der gesonderten Widerrufsbelehrung, die dem Auftraggeber vor Vertragsschluss zur Verfügung gestellt wird.",
                    "Wünscht der Verbraucher, dass die Leistung vor Ablauf der Widerrufsfrist beginnt, muss er dies ausdrücklich verlangen. Widerruft er danach, hat er einen angemessenen Betrag für die bis dahin erbrachten Leistungen zu zahlen. Das Widerrufsrecht erlischt, wenn die Leistung vollständig erbracht wurde.",
                  ]}
                />
              </Abschnitt>

              <Abschnitt titel="§ 17 Schlussbestimmungen">
                <Liste
                  punkte={[
                    "Es gilt das Recht der Bundesrepublik Deutschland. Gegenüber Verbrauchern gilt diese Rechtswahl nur, soweit dadurch nicht zwingende Schutzvorschriften des Staates ihres gewöhnlichen Aufenthalts entzogen werden.",
                    "Ist der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist Hannover ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag.",
                    "Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.",
                    "Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle ist der Auftragnehmer nicht verpflichtet und nicht bereit.",
                  ]}
                />
              </Abschnitt>

              <p className="text-sm text-gray-400 pt-4 border-t border-zinc-700">Stand: 12.10.2026</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
