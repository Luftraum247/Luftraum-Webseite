import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Mail } from "lucide-react"

const documents = [
  {
    title: "1_ETHIKKODEX",
    description: "Verhaltensgrundsätze und ethische Leitlinien für Luftraum247.",
    href: "/compliance/Anlage_01_ETHIKKODEX.pdf",
  },
  {
    title: "2_ANTI-KORRUPTIONS-KODEX",
    description: "Richtlinien zur Prävention von Korruption und Interessenkonflikten.",
    href: "/compliance/Anlage_02_ANTI-KORRUPTIONS-KODEX.pdf",
  },
  {
    title: "3_BUSINESS CONTINUITY PLAN",
    description: "Notfallplan zur Sicherstellung der Geschäftskontinuität.",
    href: "/compliance/Anlage_03_BUSINESS%20CONTINUITY%20PLAN.pdf",
  },
]

export const metadata: Metadata = {
  title: "Compliance | Luftraum247",
  description:
    "Transparenz und Verantwortung: Compliance-Richtlinien, Ethikkodex und Business Continuity Informationen von Luftraum247.",
  robots: "noindex, follow",
}

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Compliance</h1>
          <p className="text-xl text-gray-300">
            Verantwortungsvoll handeln – unsere Richtlinien und Notfallpläne im Überblick.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-zinc-900 rounded-lg p-8 space-y-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-blue-400">Compliance Kontakt</h2>
              </div>
              <p className="text-gray-300">
                Für Hinweise, Fragen oder Meldungen zu Compliance-Themen erreichen Sie uns unter{" "}
                <Link
                  href="mailto:compliance@luftraum247.de"
                  className="text-blue-400 hover:underline"
                >
                  compliance@luftraum247.de
                </Link>
                .
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Dokumente</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.map((doc) => (
                  <div key={doc.title} className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-blue-400" />
                      <span className="text-lg font-semibold">{doc.title}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{doc.description}</p>
                    <Link
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Dokument öffnen
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
