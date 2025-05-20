import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AGB | Luftraum247",
  description:
    "Allgemeine Geschäftsbedingungen von Luftraum247. Informieren Sie sich über unsere Vertragsbedingungen für Drohneninspektionen und weitere Dienstleistungen.",
  robots: "noindex, follow",
}

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
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-lg p-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Anwendungsbereich</h2>
                <p className="text-gray-300">
                  Diese AGB gelten für Aufträge zur Durchführung von Luftaufnahmen (Fotos, Videos,
                  Drohnendienstleistungen) und Bearbeitung, die schriftlich oder mündlich vom Auftraggeber erteilt
                  werden. Wir bevorzugen die Schriftform, da eventuelle Übermittlungsfehler zu Lasten des Auftraggebers
                  gehen. Abweichungen und Sonderabsprachen bedürfen der schriftlichen Vereinbarung.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Wichtiger Hinweis zu Luftaufnahmen</h2>
                <p className="text-gray-300">
                  Die Sicherheit von Personen und des Luftraums sowie die Sicherheit der eingesetzten Geräte haben immer
                  Vorrang vor der Vertragserfüllung. Die Entscheidungsgewalt liegt ausschließlich beim Piloten vor Ort
                  oder den zuständigen Behörden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Fluggenehmigungen und Zusammenarbeit</h2>
                <p className="text-gray-300">
                  Wir kümmern uns um die erforderlichen Aufstiegsgenehmigungen für das entsprechende Bundesland, die
                  Stadt oder Gemeinde. Dies ist in der Regel kostenlos für den Auftraggeber. Bei Sondergenehmigungen für
                  Flüge in Naturschutzgebieten, über Wasserstraßen, an Drehorten von Dritten usw. arbeitet der
                  Auftraggeber mit uns und den Behörden zusammen und trägt gegebenenfalls anfallende Kosten für
                  Drehgenehmigungen oder Sondernutzungen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Sorgfalt und Änderungen</h2>
                <p className="text-gray-300">
                  Der Pilot und/oder Kameraoperator sorgt stets im besten Interesse des Kunden für optimale Aufnahmen.
                  Vor Ort können Sonderwünsche und Verbesserungsvorschläge des Auftraggebers berücksichtigt werden. Wenn
                  dem Auftraggeber das Bildmaterial nach Abschluss des Auftrags nicht gefällt, gilt dies nicht als
                  Mangel. Bei gewähltem Videoschnitt oder Bildbearbeitung gewähren wir eine kostenfreie Änderungsrunde,
                  sofern die Bedingungen gewahrt bleiben. Weitere Änderungsrunden können zusätzliche Kosten verursachen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Ausfallkosten und Rücktritt</h2>
                <p className="text-gray-300">
                  Unsere Drohnen können bei Regen, Schneefall, Gewitter und starkem Wind entweder gar nicht oder nur
                  eingeschränkt eingesetzt werden. In diesem Fall bieten wir dem Auftraggeber nach Absprache einen
                  Rabatt für einen Folgeauftrag an. Eventuell anfallende Kosten für Anfahrt, Übernachtung,
                  Sondergenehmigungen usw. werden erneut in Rechnung gestellt. Wenn sich vor Ort herausstellt, dass der
                  Auftraggeber falsche oder ungenaue Angaben gemacht hat, die die Aufnahmen beeinträchtigen, verhindern
                  oder unmöglich machen, trägt er die Verantwortung dafür.
                </p>
                <p className="text-gray-300 mt-4">
                  Der Auftraggeber kann jederzeit von seinem Vertrag zurücktreten. Bei Rücktritt ab verbindlicher
                  Auftragserteilung bis eine Woche vor Durchführung sind 25% zzgl. eventueller Reisetage zu zahlen. Ab
                  einer Woche vor Durchführung bis drei Tage vorher sind es 50% zzgl. eventueller Reisetage. Ab drei
                  Tage vorher bis 24 Stunden vorher sind es 75% zzgl. eventueller Reisetage. Innerhalb von 24 Stunden
                  vorher sind es 100% zzgl. eventueller Reisetage. Tritt das Unternehmen von einem Auftrag zurück,
                  können keine Ansprüche gegen uns geltend gemacht werden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Nicht erlaubte Nutzung einer Drohne</h2>
                <p className="text-gray-300">
                  Aus rechtlichen Gründen dürfen Drohnen an bestimmten Orten nicht eingesetzt werden. In der Regel ist
                  die Nutzung über Justizvollzugsanstalten, Energiegewinnungsanlagen, militärischen Anlagen und
                  Unfallorten sowie über Menschenmengen, stark befahrenen Straßen oder zu Spionage- oder
                  Paparazzi-Zwecken verboten. Ausnahmen sind nur möglich, wenn der örtlich Verantwortliche dem Überflug
                  ausdrücklich zustimmt. Die Fluggeräte dürfen ohne Sondergenehmigung nur zwischen Sonnenaufgang und
                  Sonnenuntergang betrieben und müssen in Sichtweite des Piloten geflogen werden.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Markenrecht, Schutz Dritter, Haftung</h2>
                <p className="text-gray-300">
                  Der Auftraggeber versichert, dass durch seinen Auftrag, die Durchführung und die eventuelle
                  Veröffentlichung keine Rechte Dritter verletzt werden. Sollte der Pilot während der Durchführung des
                  Auftrags Kenntnis davon erlangen, dass der Auftrag gegen Recht und Gesetz verstößt, kann er den
                  Auftrag umgehend zu Lasten des Auftraggebers abbrechen und das Bildmaterial einbehalten und
                  vernichten. Der Auftraggeber erklärt sich bereit, uns von eventuellen Schadensersatzansprüchen Dritter
                  freizustellen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Preise, Zahlung, Einsatzdauer, Nutzungsrechte</h2>
                <p className="text-gray-300">
                  Alle Preise sind nach der Klein Unternehmen Regelung, Gemäß § 19 Abs. 1 UStG wird keine Umsatzsteuer
                  ausgewiesen. Die Zahlungsfrist beträgt 14 Tage nach Erhalt der Rechnung und ist ohne Abzüge zu
                  begleichen. Bei Zahlung innerhalb von 7 Tagen gewähren wir 3% Skonto. Nach Ablauf der gesetzlichen
                  Zahlungsfrist behalten wir uns rechtliche Schritte vor, ohne vorherige Ankündigung. Das Bildrecht geht
                  erst nach vollständiger Zahlung auf den Auftraggeber über. Wir behalten uns das Recht vor, Teile des
                  erstellten Materials für eigene Werbezwecke zu nutzen.
                </p>
                <p className="text-gray-300 mt-4">
                  Ein Einsatztag umfasst acht Stunden ab Ankunft (Anfahrt wird gesondert vergütet). Ein halber
                  Einsatztag umfasst vier Stunden ab Ankunft (Anfahrt wird gesondert vergütet) oder nach Absprache.
                </p>
                <p className="text-gray-300 mt-4">
                  Fahrtkosten betragen 1€ pro Kilometer oder nach Absprache. Überstunden ab der ersten Stunde werden mit
                  15% Zuschlag berechnet, ab der dritten Stunde mit 20% Zuschlag. Bei größeren Entfernungen muss
                  gegebenenfalls ein An- und/oder Abreisetag einkalkuliert werden. Die Kosten betragen 250€ pro Person
                  oder 500€ bei Einsatz von zwei Personen, zuzüglich landesüblicher Spesen und Übernachtungskosten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Weitergabe von Aufträgen</h2>
                <p className="text-gray-300">
                  Wir behalten uns das Recht vor, Aufträge an von uns geprüfte Dritte weiterzugeben. Wenn diese sich
                  grob- oder leichtfahrlässig verhalten, haften sie in vollem Umfang.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Haftung</h2>
                <p className="text-gray-300">
                  Alle unsere Flüge sind durch eine Luftfahrthaftpflichtversicherung abgesichert. Wir haften lediglich
                  für grob fahrlässige oder vorsätzlich verursachte Schäden innerhalb der gesetzlichen Bestimmungen.
                  Eine Haftung für leichte Fahrlässigkeit ist ausgeschlossen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Gerichtsstand</h2>
                <p className="text-gray-300">
                  Es gilt das Recht der Bundesrepublik Deutschland. Für alle Rechtsstreitigkeiten ist Köln der
                  ausschließliche Gerichtsstand.
                </p>
                <p className="text-gray-300 mt-4">Stand: 01.01.2021</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Datenschutz</h2>
                <p className="text-gray-300">
                  Wenn Sie uns kontaktieren, erteilen Sie uns die Erlaubnis, Ihnen auf Ihre Anfrage zu antworten. Sobald
                  eine Konversation beendet ist, werden wir Sie nicht mehr kontaktieren und alle E-Mails zeitnah
                  löschen. Eine Konversation gilt als beendet, wenn der Auftrag abgeschlossen ist oder von einer Seite
                  abgesagt wurde. Wir geben Ihre Daten nicht an Dritte weiter, es sei denn, dies ist zwingend
                  erforderlich, um Aufstiegsgenehmigungen von Behörden zu erhalten. Telefongespräche werden nicht
                  aufgezeichnet.
                </p>
                <p className="text-gray-300 mt-4">
                  Diese Website verwendet Google Analytics, einen Webanalysedienst der Google Inc. („Google"). Google
                  Analytics verwendet Cookies, Textdateien, die auf Ihrem Computer gespeichert werden und eine Analyse
                  der Benutzung der Website ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre
                  Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort
                  gespeichert. Falls die IP-Anonymisierung auf dieser Website aktiviert ist, wird Ihre IP-Adresse von
                  Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des
                  Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle
                  IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des
                  Betreibers dieser Website wird Google diese Informationen nutzen, um Ihre Nutzung der Website
                  auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der
                  Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu
                  erbringen.
                </p>
                <p className="text-gray-300 mt-4">
                  Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen
                  Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende
                  Einstellung Ihrer Browser-Software verhindern. Wir weisen jedoch darauf hin, dass Sie in diesem Fall
                  gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich nutzen können. Sie können
                  darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen
                  Daten (inklusive Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google
                  verhindern, indem Sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und
                  installieren:{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout?hl=de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    www.tools.google.com/dlpage/gaoptout?hl=de
                  </a>
                  . Weitere Informationen zu Google Analytics und dem Datenschutz finden Sie unter{" "}
                  <a
                    href="https://www.google.com/intl/de/analytics/learn/privacy.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    www.google.com/intl/de/analytics/learn/privacy.html
                  </a>{" "}
                  und{" "}
                  <a
                    href="https://www.datenschutzbeauftragter-info.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    www.datenschutzbeauftragter-info.de
                  </a>
                  .
                </p>
                <p className="text-gray-300 mt-4">Vielen Dank für Ihr Verständnis und Ihre Kooperation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
