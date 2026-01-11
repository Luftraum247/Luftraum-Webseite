import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import ProvenExpertSeal from "./proven-expert-seal"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-logo-web-eQsIxjFY5YXLGz2AV1ztikm7VmQ69g.png"
                alt="Luftraum247 Logo"
                width={180}
                height={50}
                className="h-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Ihr Partner für professionelle Drohneninspektionen, 3D-Vermessung und Thermografie aus Hannover,
              deutschlandweit tätig.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61556600731032"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/luftraum247.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jorge-marques-7564b2278/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Dienstleistungen</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/dienstleistungen#3d-vermessung"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  3D-Vermessung und Kartierung
                </Link>
              </li>
              <li>
                <Link
                  href="/dienstleistungen#thermografie"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Thermografie
                </Link>
              </li>
              <li>
                <Link
                  href="/dienstleistungen#industrie-inspektionen"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Industrie Inspektionen
                </Link>
              </li>
              <li>
                <Link
                  href="/dienstleistungen#bau-immobilien"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Bau und Immobilieninspektionen
                </Link>
              </li>
              <li>
                <Link
                  href="/dienstleistungen#indoor-fluge"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Indoor-Flüge
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Schnelllinks</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/ueber-uns" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/#references" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link href="/projekte" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projekte
                </Link>
              </li>
              <li>
                <Link href="/kontakt#faq" className="text-gray-400 hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/kontakt#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Bewertungen
                </Link>
              </li>
              <li>
                <Link href="/kontakt#kontaktformular" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Trust Signals */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt & Bewertungen</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Schäfertrift 19, 30657 Hannover</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Festnetz: +49 51199922127</span>
                <span className="text-gray-400">Mobil: +49 1631902432</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@luftraum247.de</span>
              </li>
            </ul>

            {/* ProvenExpert Seal in Footer */}
            <div className="mt-6">
              <ProvenExpertSeal />
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Luftraum247. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6">
            <Link href="/impressum" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              AGB
            </Link>
            <Link href="/compliance" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
