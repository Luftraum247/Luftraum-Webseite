export default function SchemaOrg() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://luftraum247.de/#organization",
    name: "Luftraum247",
    alternateName: "Luftraum247 Drohnen Services und Solutions",
    description:
      "Professionelle Drohneninspektionen, 3D-Vermessung und Thermografie aus Hannover, deutschlandweit tätig.",
    url: "https://luftraum247.de",
    logo: "https://luftraum247.de/logo.png",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dji-matrice-m30t-hochspannungsnetz-p5rp0GUZ1lfcXKsofC0u9IEqs3dIS3.webp",
    telephone: "+49 (0) 123 456789",
    email: "info@luftraum247.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Schäfertrift 19",
      addressLocality: "Hannover",
      postalCode: "30657",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.43364197979823,
      longitude: 9.787908376889761,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/luftraum247",
      "https://www.instagram.com/luftraum247",
      "https://www.linkedin.com/company/luftraum247",
    ],
    priceRange: "€€",
    areaServed: "Deutschland",
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Drohneninspektionen",
    provider: {
      "@id": "https://luftraum247.de/#organization",
    },
    areaServed: "Deutschland",
    description:
      "Professionelle Drohneninspektionen für Industrie, Immobilien und Solaranlagen mit modernster Technologie.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: 199,
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([localBusinessSchema, servicesSchema]),
      }}
    />
  )
}
