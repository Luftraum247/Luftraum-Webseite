interface ServiceSchemaProps {
  serviceName: string
  description: string
  price: string
  imageUrl: string
}

export default function ServiceSchema({ serviceName, description, price, imageUrl }: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: {
      "@id": "https://luftraum247.de/#organization",
    },
    description: description,
    image: imageUrl,
    areaServed: "Deutschland",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        price: price.replace(/[^0-9]/g, ""),
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema),
      }}
    />
  )
}
