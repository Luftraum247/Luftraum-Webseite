"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cropped-logo-web-eQsIxjFY5YXLGz2AV1ztikm7VmQ69g.png"
              alt="Luftraum247 Logo"
              width={180}
              height={50}
              className="h-auto"
            />
          </Link>

          {/* Spacer to push nav and button to the right */}
          <div className="flex-grow"></div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mr-8">
            <Link
              href="/"
              className={`relative py-2 text-white hover:text-blue-400 transition-colors ${
                pathname === "/"
                  ? "text-blue-400 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400"
                  : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/ueber-uns"
              className={`relative py-2 text-white hover:text-blue-400 transition-colors ${
                pathname === "/ueber-uns"
                  ? "text-blue-400 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400"
                  : ""
              }`}
            >
              Über uns
            </Link>
            <Link
              href="/dienstleistungen"
              className={`relative py-2 text-white hover:text-blue-400 transition-colors ${
                pathname === "/dienstleistungen"
                  ? "text-blue-400 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400"
                  : ""
              }`}
            >
              Dienstleistungen
            </Link>
            <Link
              href="/projekte"
              className={`relative py-2 text-white hover:text-blue-400 transition-colors ${
                pathname === "/projekte"
                  ? "text-blue-400 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400"
                  : ""
              }`}
            >
              Projekte
            </Link>
            <Link
              href="/kontakt"
              className={`relative py-2 text-white hover:text-blue-400 transition-colors ${
                pathname === "/kontakt"
                  ? "text-blue-400 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400"
                  : ""
              }`}
            >
              Kontakt
            </Link>
          </nav>

          {/* Spacer für das Layout */}
          <div className="w-4"></div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-white hover:text-blue-400 transition-colors py-2 ${
                  pathname === "/"
                    ? "text-blue-400 font-medium bg-zinc-800 px-3 py-2 rounded-md border-l-4 border-blue-400"
                    : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/ueber-uns"
                className={`text-white hover:text-blue-400 transition-colors py-2 ${
                  pathname === "/ueber-uns"
                    ? "text-blue-400 font-medium bg-zinc-800 px-3 py-2 rounded-md border-l-4 border-blue-400"
                    : ""
                }`}
              >
                Über uns
              </Link>
              <Link
                href="/dienstleistungen"
                className={`text-white hover:text-blue-400 transition-colors py-2 ${
                  pathname === "/dienstleistungen"
                    ? "text-blue-400 font-medium bg-zinc-800 px-3 py-2 rounded-md border-l-4 border-blue-400"
                    : ""
                }`}
              >
                Dienstleistungen
              </Link>
              <Link
                href="/projekte"
                className={`text-white hover:text-blue-400 transition-colors py-2 ${
                  pathname === "/projekte"
                    ? "text-blue-400 font-medium bg-zinc-800 px-3 py-2 rounded-md border-l-4 border-blue-400"
                    : ""
                }`}
              >
                Projekte
              </Link>
              <Link
                href="/kontakt"
                className={`text-white hover:text-blue-400 transition-colors py-2 ${
                  pathname === "/kontakt"
                    ? "text-blue-400 font-medium bg-zinc-800 px-3 py-2 rounded-md border-l-4 border-blue-400"
                    : ""
                }`}
              >
                Kontakt
              </Link>
              {/* Entfernt: Überflüssiger Button */}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
