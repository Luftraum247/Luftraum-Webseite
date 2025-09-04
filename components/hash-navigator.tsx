"use client"

import { useEffect } from "react"

export default function HashNavigator() {
  useEffect(() => {
    // Handle hash navigation on page load
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1)
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }, 100)
      }
    }
  }, [])

  return null
}