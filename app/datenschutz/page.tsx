import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz | Luftraum247",
  description:
    "Datenschutzerklärung von Luftraum247. Erfahren Sie, wie wir mit Ihren Daten umgehen und welche Rechte Sie haben.",
  robots: "noindex, follow",
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Datenschutz</h1>
          <p className="text-xl text-gray-300">Datenschutzerklärung</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-900 rounded-lg p-8">
            <div className="space-y-8">
              <div>
                <p className="text-gray-300">
                  Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen
                  Stellenwert für die Geschäftsleitung der Luftraum247 Drohnen Services und Solutions. Eine Nutzung der
                  Internetseiten der Luftraum247 Drohnen Services und Solutions ist grundsätzlich ohne jede Angabe
                  personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens
                  über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener
                  Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für
                  eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der
                  betroffenen Person ein.
                </p>
                <p className="text-gray-300 mt-4">
                  Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der Anschrift, E-Mail-Adresse
                  oder Telefonnummer einer betroffenen Person, erfolgt stets im Einklang mit der
                  Datenschutz-Grundverordnung und in Übereinstimmung mit den für die Luftraum247 Drohnen Services und
                  Solutions geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser Datenschutzerklärung
                  möchte unser Unternehmen die Öffentlichkeit über Art, Umfang und Zweck der von uns erhobenen,
                  genutzten und verarbeiteten personenbezogenen Daten informieren. Ferner werden betroffene Personen
                  mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte aufgeklärt.
                </p>
                <p className="text-gray-300 mt-4">
                  Zur Verwaltung der eingesetzten Cookies und ähnlichen Technologien (Tracking-Pixel, Web-Beacons etc.)
                  und diesbezüglicher Einwilligungen setzen wir das Consent Tool „Real Cookie Banner" ein. Details zur
                  Funktionsweise von „Real Cookie Banner" findest du unter{" "}
                  <a
                    href="https://devowl.io/de/rcb/datenverarbeitung/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    https://devowl.io/de/rcb/datenverarbeitung/
                  </a>
                  .
                </p>
                <p className="text-gray-300 mt-4">
                  Rechtsgrundlagen für die Verarbeitung von personenbezogenen Daten in diesem Zusammenhang sind Art. 6
                  Abs. 1 lit. c DS-GVO und Art. 6 Abs. 1 lit. f DS-GVO. Unser berechtigtes Interesse ist die Verwaltung
                  der eingesetzten Cookies und ähnlichen Technologien und der diesbezüglichen Einwilligungen.
                </p>
                <p className="text-gray-300 mt-4">
                  Die Bereitstellung der personenbezogenen Daten ist weder vertraglich vorgeschrieben noch für den
                  Abschluss eines Vertrages notwendig. Du bist nicht verpflichtet die personenbezogenen Daten
                  bereitzustellen. Wenn du die personenbezogenen Daten nicht bereitstellst, können wir deine
                  Einwilligungen nicht verwalten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Begriffsbestimmungen</h2>
                <p className="text-gray-300">
                  Die Datenschutzerklärung der Luftraum247 Drohnen Services und Solutions beruht auf den
                  Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der
                  Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl für die
                  Öffentlichkeit als auch für unsere Kunden und Geschäftspartner einfach lesbar und verständlich sein.
                  Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.
                </p>
                <p className="text-gray-300 mt-4">
                  Wir verwenden in dieser Datenschutzerklärung unter anderem die folgenden Begriffe:
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">a) personenbezogene Daten</h3>
                    <p className="text-gray-300">
                      Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder
                      identifizierbare natürliche Person (im Folgenden „betroffene Person") beziehen. Als
                      identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere
                      mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu
                      einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der
                      physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen
                      Identität dieser natürlichen Person sind, identifiziert werden kann.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">b) betroffene Person</h3>
                    <p className="text-gray-300">
                      Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren
                      personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">c) Verarbeitung</h3>
                    <p className="text-gray-300">
                      Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede
                      solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen,
                      die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das
                      Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form
                      der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die
                      Vernichtung.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">d) Einschränkung der Verarbeitung</h3>
                    <p className="text-gray-300">
                      Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem
                      Ziel, ihre künftige Verarbeitung einzuschränken.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">e) Profiling</h3>
                    <p className="text-gray-300">
                      Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin
                      besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte,
                      die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich
                      Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen,
                      Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu
                      analysieren oder vorherzusagen.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">f) Pseudonymisierung</h3>
                    <p className="text-gray-300">
                      Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die
                      personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen
                      betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert
                      aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten,
                      dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen
                      Person zugewiesen werden.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">
                      g) Verantwortlicher oder für die Verarbeitung Verantwortlicher
                    </h3>
                    <p className="text-gray-300">
                      Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische
                      Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die
                      Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und
                      Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so
                      kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem
                      Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">h) Auftragsverarbeiter</h3>
                    <p className="text-gray-300">
                      Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere
                      Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">i) Empfänger</h3>
                    <p className="text-gray-300">
                      Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle,
                      der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen
                      Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach
                      dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten,
                      gelten jedoch nicht als Empfänger.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">j) Dritter</h3>
                    <p className="text-gray-300">
                      Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer
                      der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter
                      der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind,
                      die personenbezogenen Daten zu verarbeiten.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">k) Einwilligung</h3>
                    <p className="text-gray-300">
                      Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in
                      informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder
                      einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen
                      gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden
                      ist.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  2. Name und Anschrift des für die Verarbeitung Verantwortlichen
                </h2>
                <p className="text-gray-300">
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der
                  Europäischen Union geltenden Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem
                  Charakter ist die:
                </p>
                <div className="mt-4">
                  <p className="text-gray-300">Luftraum247 Drohnen Services und Solutions</p>
                  <p className="text-gray-300">Schäfertrift 19</p>
                  <p className="text-gray-300">30657 Hannover</p>
                  <p className="text-gray-300">Deutschland</p>
                  <p className="text-gray-300">Tel.: +491631902432</p>
                  <p className="text-gray-300">E-Mail: Marques.jorge@luftraum247.de</p>
                  <p className="text-gray-300">Website: www.luftraum247.de</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Cookies</h2>
                <p className="text-gray-300">
                  Die Internetseiten der Luftraum247 Drohnen Services und Solutions verwenden Cookies. Cookies sind
                  Textdateien, welche über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert
                  werden.
                </p>
                <p className="text-gray-300 mt-4">
                  Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte
                  Cookie-ID. Eine Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge,
                  durch welche Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden können, in dem
                  das Cookie gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, den
                  individuellen Browser der betroffenen Person von anderen Internetbrowsern, die andere Cookies
                  enthalten, zu unterscheiden. Ein bestimmter Internetbrowser kann über die eindeutige Cookie-ID
                  wiedererkannt und identifiziert werden.
                </p>
                <p className="text-gray-300 mt-4">
                  Durch den Einsatz von Cookies kann die Luftraum247 Drohnen Services und Solutions den Nutzern dieser
                  Internetseite nutzerfreundlichere Services bereitstellen, die ohne die Cookie-Setzung nicht möglich
                  wären.
                </p>
                <p className="text-gray-300 mt-4">
                  Mittels eines Cookies können die Informationen und Angebote auf unserer Internetseite im Sinne des
                  Benutzers optimiert werden. Cookies ermöglichen uns, wie bereits erwähnt, die Benutzer unserer
                  Internetseite wiederzuerkennen. Zweck dieser Wiedererkennung ist es, den Nutzern die Verwendung
                  unserer Internetseite zu erleichtern. Der Benutzer einer Internetseite, die Cookies verwendet, muss
                  beispielsweise nicht bei jedem Besuch der Internetseite erneut seine Zugangsdaten eingeben, weil dies
                  von der Internetseite und dem auf dem Computersystem des Benutzers abgelegten Cookie übernommen wird.
                  Ein weiteres Beispiel ist das Cookie eines Warenkorbes im Online-Shop. Der Online-Shop merkt sich die
                  Artikel, die ein Kunde in den virtuellen Warenkorb gelegt hat, über ein Cookie.
                </p>
                <p className="text-gray-300 mt-4">
                  Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit mittels einer
                  entsprechenden Einstellung des genutzten Internetbrowsers verhindern und damit der Setzung von Cookies
                  dauerhaft widersprechen. Ferner können bereits gesetzte Cookies jederzeit über einen Internetbrowser
                  oder andere Softwareprogramme gelöscht werden. Dies ist in allen gängigen Internetbrowsern möglich.
                  Deaktiviert die betroffene Person die Setzung von Cookies in dem genutzten Internetbrowser, sind unter
                  Umständen nicht alle Funktionen unserer Internetseite vollumfänglich nutzbar.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  4. Erfassung von allgemeinen Daten und Informationen
                </h2>
                <p className="text-gray-300">
                  Die Internetseite der Luftraum247 Drohnen Services und Solutions erfasst mit jedem Aufruf der
                  Internetseite durch eine betroffene Person oder ein automatisiertes System eine Reihe von allgemeinen
                  Daten und Informationen. Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers
                  gespeichert. Erfasst werden können die (1) verwendeten Browsertypen und Versionen, (2) das vom
                  zugreifenden System verwendete Betriebssystem, (3) die Internetseite, von welcher ein zugreifendes
                  System auf unsere Internetseite gelangt (sogenannte Referrer), (4) die Unterwebseiten, welche über ein
                  zugreifendes System auf unserer Internetseite angesteuert werden, (5) das Datum und die Uhrzeit eines
                  Zugriffs auf die Internetseite, (6) eine Internet-Protokoll-Adresse (IP-Adresse), (7) der
                  Internet-Service-Provider des zugreifenden Systems und (8) sonstige ähnliche Daten und Informationen,
                  die der Gefahrenabwehr im Falle von Angriffen auf unsere informationstechnologischen Systeme dienen.
                </p>
                <p className="text-gray-300 mt-4">
                  Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die Luftraum247 Drohnen Services und
                  Solutions keine Rückschlüsse auf die betroffene Person. Diese Informationen werden vielmehr benötigt,
                  um (1) die Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte unserer Internetseite
                  sowie die Werbung für diese zu optimieren, (3) die dauerhafte Funktionsfähigkeit unserer
                  informationstechnologischen Systeme und der Technik unserer Internetseite zu gewährleisten sowie (4)
                  um Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen
                  Informationen bereitzustellen. Diese anonym erhobenen Daten und Informationen werden durch die
                  Luftraum247 Drohnen Services und Solutions daher einerseits statistisch und ferner mit dem Ziel
                  ausgewertet, den Datenschutz und die Datensicherheit in unserem Unternehmen zu erhöhen, um letztlich
                  ein optimales Schutzniveau für die von uns verarbeiteten personenbezogenen Daten sicherzustellen. Die
                  anonymen Daten der Server-Logfiles werden getrennt von allen durch eine betroffene Person angegebenen
                  personenbezogenen Daten gespeichert.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Kontaktmöglichkeit über die Internetseite</h2>
                <p className="text-gray-300">
                  Die Internetseite der Luftraum247 Drohnen Services und Solutions enthält aufgrund von gesetzlichen
                  Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie
                  eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der
                  sogenannten elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail
                  oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt,
                  werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert.
                  Solche auf freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung
                  Verantwortlichen übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der
                  Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser
                  personenbezogenen Daten an Dritte.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  6. Routinemäßige Löschung und Sperrung von personenbezogenen Daten
                </h2>
                <p className="text-gray-300">
                  Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der
                  betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist
                  oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen
                  Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche
                  unterliegt, vorgesehen wurde.
                </p>
                <p className="text-gray-300 mt-4">
                  Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder
                  einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen
                  Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Rechte der betroffenen Person</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">a) Recht auf Bestätigung</h3>
                    <p className="text-gray-300">
                      Jede betroffene Person hat das vom Europäischen Richtlinien- und Verordnungsgeber eingeräumte
                      Recht, von dem für die Verarbeitung Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie
                      betreffende personenbezogene Daten verarbeitet werden. Möchte eine betroffene Person dieses
                      Bestätigungsrecht in Anspruch nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für
                      die Verarbeitung Verantwortlichen wenden.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">b) Recht auf Auskunft</h3>
                    <p className="text-gray-300">
                      Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                      Richtlinien- und Verordnungsgeber gewährte Recht, jederzeit von dem für die Verarbeitung
                      Verantwortlichen unentgeltliche Auskunft über die zu seiner Person gespeicherten personenbezogenen
                      Daten und eine Kopie dieser Auskunft zu erhalten.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">c) Recht auf Berichtigung</h3>
                    <p className="text-gray-300">
                      Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                      Richtlinien- und Verordnungsgeber gewährte Recht, die unverzügliche Berichtigung sie betreffender
                      unrichtiger personenbezogener Daten zu verlangen.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">
                      d) Recht auf Löschung (Recht auf Vergessen werden)
                    </h3>
                    <p className="text-gray-300">
                      Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                      Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen zu verlangen, dass die
                      sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der folgenden
                      Gründe zutrifft und soweit die Verarbeitung nicht erforderlich ist.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">e) Recht auf Einschränkung der Verarbeitung</h3>
                    <p className="text-gray-300">
                      Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                      Richtlinien- und Verordnungsgeber gewährte Recht, von dem Verantwortlichen die Einschränkung der
                      Verarbeitung zu verlangen.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">f) Recht auf Datenübertragbarkeit</h3>
                    <p className="text-gray-300">
                      Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                      Richtlinien- und Verordnungsgeber gewährte Recht, die sie betreffenden personenbezogenen Daten,
                      welche durch die betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem
                      strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">g) Recht auf Widerspruch</h3>
                    <p className="text-gray-300">
                      Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                      Richtlinien- und Verordnungsgeber gewährte Recht, aus Gründen, die sich aus ihrer besonderen
                      Situation ergeben, j Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben,
                      jederzeit gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Art. 6
                      Abs. 1 Buchstaben e oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf
                      diese Bestimmungen gestütztes Profiling.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">
                      h) Automatisierte Entscheidungen im Einzelfall einschließlich Profiling
                    </h3>
                    <p className="text-gray-300">
                      Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                      Richtlinien- und Verordnungsgeber gewährte Recht, nicht einer ausschließlich auf einer
                      automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu
                      werden, die ihr gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich
                      beeinträchtigt.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">
                      i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung
                    </h3>
                    <p className="text-gray-300">
                      Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen
                      Richtlinien- und Verordnungsgeber gewährte Recht, eine Einwilligung zur Verarbeitung
                      personenbezogener Daten jederzeit zu widerrufen.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Rechtsgrundlage der Verarbeitung</h2>
                <p className="text-gray-300">
                  Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, bei
                  denen wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung
                  personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist,
                  erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung
                  von Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht
                  die Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt für solche Verarbeitungsvorgänge die zur
                  Durchführung vorvertraglicher Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren
                  Produkten oder Leistungen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  9. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten
                  verfolgt werden
                </h2>
                <p className="text-gray-300">
                  Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes
                  Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer
                  Mitarbeiter und unserer Anteilseigner.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  10. Dauer, für die die personenbezogenen Daten gespeichert werden
                </h2>
                <p className="text-gray-300">
                  Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche
                  Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht,
                  sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  11. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten;
                  Erforderlichkeit für den Vertragsabschluss; Verpflichtung der betroffenen Person, die
                  personenbezogenen Daten bereitzustellen; mögliche Folgen der Nichtbereitstellung
                </h2>
                <p className="text-gray-300">
                  Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich
                  vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen (z.B. Angaben
                  zum Vertragspartner) ergeben kann. Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass
                  eine betroffene Person uns personenbezogene Daten zur Verfügung stellt, die in der Folge durch uns
                  verarbeitet werden müssen. Die betroffene Person ist beispielsweise verpflichtet uns personenbezogene
                  Daten bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag abschließt. Eine
                  Nichtbereitstellung der personenbezogenen Daten hätte zur Folge, dass der Vertrag mit dem Betroffenen
                  nicht geschlossen werden könnte.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  12. Bestehen einer automatisierten Entscheidungsfindung
                </h2>
                <p className="text-gray-300">
                  Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder
                  ein Profiling.
                </p>
                <p className="text-gray-300 mt-4">
                  Diese Datenschutzerklärung wurde durch den Datenschutzerklärungs-Generator der DGD Deutsche
                  Gesellschaft für Datenschutz GmbH, die als Externer Datenschutzbeauftragter Ingolstadt tätig ist, in
                  Kooperation mit dem IT- und Datenschutzrecht Anwalt Christian Solmecke erstellt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
