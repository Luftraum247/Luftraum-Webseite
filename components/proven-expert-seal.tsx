"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    provenExpert?: {
      proSeal: (config: any) => void
    }
  }
}

const PROVEN_EXPERT_SCRIPT_SRC = "https://s.provenexpert.net/seals/proseal-v2.js"

// Module-level singleton so the ProvenExpert script is only ever requested
// once, even though the seal widget is mounted twice on the homepage
// (hero + footer). Every mount awaits the same promise and then renders
// into its own uniquely-id'd container.
let provenExpertScriptPromise: Promise<void> | null = null

function loadProvenExpertScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve()
  }

  if (!provenExpertScriptPromise) {
    provenExpertScriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${PROVEN_EXPERT_SCRIPT_SRC}"]`)
      if (existing) {
        existing.addEventListener("load", () => resolve())
        existing.addEventListener("error", reject)
        return
      }

      const script = document.createElement("script")
      script.src = PROVEN_EXPERT_SCRIPT_SRC
      script.defer = true
      script.onload = () => resolve()
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  return provenExpertScriptPromise
}

interface ProvenExpertSealProps {
  /** Unique DOM id for this widget instance's container. */
  widgetContainerId?: string
}

export default function ProvenExpertSeal({ widgetContainerId = "proSealWidget" }: ProvenExpertSealProps) {
  useEffect(() => {
    let cancelled = false

    loadProvenExpertScript()
      .then(() => {
        if (cancelled || !window.provenExpert) return
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
          embeddedSelector: `#${widgetContainerId}`,
        })
      })
      .catch(() => {
        // Widget script failed to load (e.g. blocked, offline) — the
        // <noscript> fallback link below still gives visitors a way through.
      })

    return () => {
      cancelled = true
    }
  }, [widgetContainerId])

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
      <div id={widgetContainerId}></div>
    </>
  )
}
