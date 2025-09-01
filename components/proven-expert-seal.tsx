"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    loadProSeal?: () => void
    provenExpert?: {
      proSeal: (config: any) => void
    }
  }
}

export default function ProvenExpertSeal() {
  useEffect(() => {
    // Define the loadProSeal function
    window.loadProSeal = () => {
      if (window.provenExpert) {
        window.provenExpert.proSeal({
          widgetId: "b4700771-f357-497d-83cf-529145bb8a19",
          language: "de-DE",
          usePageLanguage: false,
          bannerColor: "#097E92",
          textColor: "#FFFFFF",
          showBackPage: false,
          showReviews: true,
          hideDate: true,
          hideName: false,
          googleStars: false,
          displayReviewerLastName: false,
          embeddedSelector: "#proSealWidget",
        })
      }
    }

    // Load the ProvenExpert script
    const script = document.createElement("script")
    script.src = "https://s.provenexpert.net/seals/proseal-v2.js"
    script.onload = () => {
      if (window.loadProSeal) {
        window.loadProSeal()
      }
    }
    script.defer = true
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      // Remove script if component unmounts
      const existingScript = document.querySelector('script[src="https://s.provenexpert.net/seals/proseal-v2.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <>
      <noscript>
        <a
          href="https://www.provenexpert.com/luftraum247-de/?utm_source=seals&utm_campaign=embedded-proseal&utm_medium=profile&utm_content=b4700771-f357-497d-83cf-529145bb8a19"
          target="_blank"
          title="Kundenbewertungen & Erfahrungen zu Luftraum247.de"
          className="pe-pro-seal-more-infos"
          rel="noreferrer nofollow"
        >
          Mehr Infos
        </a>
      </noscript>
      <div id="proSealWidget"></div>
    </>
  )
}
