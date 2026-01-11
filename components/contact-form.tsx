"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import emailjs from "emailjs-com" 
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, AlertCircle, ChevronDown, ChevronUp } from "lucide-react"
import { FormField } from "@/components/ui/form"
import { DatePickerField } from "@/components/ui/date-picker-field"

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

type FormErrors = {
  [key: string]: string | null
}

export default function ContactForm() {
  // Update the formState type to include selectedDates
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companyType: "",
    service: "",
    message: "",
    selectedDates: [] as Date[],
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<FormErrors>({})
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())
  const [showOptionalFields, setShowOptionalFields] = useState(false)

  // Validate form whenever formState changes or a field is touched
  useEffect(() => {
    validateForm()
  }, [formState, touchedFields, showOptionalFields])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setTouchedFields(new Set(Object.keys(formState)))

    const newErrors: FormErrors = {}
    const { name, email, companyType, service, message } = formState

    if (!name.trim()) newErrors.name = "Name ist erforderlich"
    if (!email.trim()) newErrors.email = "E-Mail ist erforderlich"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Ungültige E-Mail-Adresse"
    if (!service) newErrors.service = "Bitte wählen Sie eine Dienstleistung"
    
    // Only validate optional fields if they are shown
    if (showOptionalFields) {
      if (!companyType) newErrors.companyType = "Bitte wählen Sie eine Option"
      if (!message.trim()) newErrors.message = "Nachricht ist erforderlich"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = document.querySelector('[aria-invalid="true"]')
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          company: formState.company,
          companyType: formState.companyType,
          service: formState.service,
          message: formState.message,
          selectedDates: formState.selectedDates.map((d) => d.toISOString()).join(", "),
        },
        PUBLIC_KEY
      )

      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        companyType: "",
        service: "",
        message: "",
        selectedDates: [],
      })
      setTouchedFields(new Set())
      setFormStatus("success")
    } catch (error) {
      console.error("EmailJS error:", error)
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setFormStatus("idle"), 5000)
    }
  }


  const validateForm = () => {
    const newErrors: FormErrors = {}
    const { name, email, companyType, service, message } = formState

    // Validiere nur berührte Felder oder während der Formularübermittlung
    if (touchedFields.has("name")) {
      if (!name.trim()) {
        newErrors.name = "Name ist erforderlich"
      }
    }

    if (touchedFields.has("email")) {
      if (!email.trim()) {
        newErrors.email = "E-Mail ist erforderlich"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein"
      }
    }

    if (touchedFields.has("service")) {
      if (!service) {
        newErrors.service = "Bitte wählen Sie eine Dienstleistung"
      }
    }

    // Only validate optional fields if they are shown
    if (showOptionalFields) {
      if (touchedFields.has("companyType")) {
        if (!companyType) {
          newErrors.companyType = "Bitte wählen Sie eine Option"
        }
      }

      if (touchedFields.has("message")) {
        if (!message.trim()) {
          newErrors.message = "Nachricht ist erforderlich"
        }
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    setTouchedFields((prev) => new Set(prev).add(name))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouchedFields((prev) => new Set(prev).add(name))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
    setTouchedFields((prev) => new Set(prev).add(field))
  }

  // Add a function to handle date selection
  const handleDateChange = (dates: Date[]) => {
    setFormState((prev) => ({ ...prev, selectedDates: dates }))
    setTouchedFields((prev) => new Set(prev).add("selectedDates"))
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   // Force validate all fields
  //   setTouchedFields(new Set(Object.keys(formState)))

  //   // Führe die Validierung durch und speichere das Ergebnis
  //   const newErrors: FormErrors = {}
  //   const { name, email, companyType, service, message } = formState

  //   // Validiere alle Pflichtfelder
  //   if (!name.trim()) {
  //     newErrors.name = "Name ist erforderlich"
  //   }

  //   if (!email.trim()) {
  //     newErrors.email = "E-Mail ist erforderlich"
  //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein"
  //   }

  //   if (!companyType) {
  //     newErrors.companyType = "Bitte wählen Sie eine Option"
  //   }

  //   if (!service) {
  //     newErrors.service = "Bitte wählen Sie eine Dienstleistung"
  //   }

  //   if (!message.trim()) {
  //     newErrors.message = "Nachricht ist erforderlich"
  //   }

  //   // Aktualisiere den Fehlerzustand
  //   setErrors(newErrors)

  //   // Prüfe, ob Fehler vorhanden sind
  //   if (Object.keys(newErrors).length > 0) {
  //     // Scrolle zum ersten Fehler
  //     const firstErrorField = document.querySelector('[aria-invalid="true"]')
  //     if (firstErrorField) {
  //       firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" })
  //     }
  //     return // Beende die Funktion, wenn Fehler vorhanden sind
  //   }

  //   // Nur wenn keine Fehler vorhanden sind, setze isSubmitting auf true und fahre fort
  //   setIsSubmitting(true)

  //   try {
  //     // In a real implementation, you would send the form data to your backend
  //     // For demonstration, we'll simulate a successful submission after a delay
  //     await new Promise((resolve) => setTimeout(resolve, 1500))

  //     // Reset form
  //     setFormState({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       company: "",
  //       companyType: "",
  //       service: "",
  //       message: "",
  //       selectedDates: [],
  //     })
  //     setTouchedFields(new Set())
  //     setFormStatus("success")
  //   } catch (error) {
  //     setFormStatus("error")
  //   } finally {
  //     setIsSubmitting(false)

  //     // Reset status after 5 seconds
  //     setTimeout(() => {
  //       setFormStatus("idle")
  //     }, 5000)
  //   }
  // }

  return (
    <div className="bg-zinc-800 p-6 rounded-lg">
      {formStatus === "success" && (
        <div className="mb-6 bg-green-900/30 border border-green-800 text-green-400 p-4 rounded-lg flex items-center">
          <CheckCircle2 className="h-5 w-5 mr-2 flex-shrink-0" />
          <p>Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.</p>
        </div>
      )}

      {formStatus === "error" && (
        <div className="mb-6 bg-red-900/30 border border-red-800 text-red-400 p-4 rounded-lg flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <p>
            Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per
            Telefon.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField name="name" label="Name" required={true} error={errors.name}>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.name}
              className={`bg-zinc-700 border-zinc-600 focus:border-blue-500 ${
                errors.name ? "border-red-500 focus:border-red-500" : ""
              }`}
            />
          </FormField>

          <FormField name="email" label="E-Mail" required={true} error={errors.email}>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.email}
              className={`bg-zinc-700 border-zinc-600 focus:border-blue-500 ${
                errors.email ? "border-red-500 focus:border-red-500" : ""
              }`}
            />
          </FormField>

          <FormField name="phone" label="Telefon" required={false} error={errors.phone}>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.phone}
              className="bg-zinc-700 border-zinc-600 focus:border-blue-500"
            />
          </FormField>

          <FormField name="company" label="Unternehmen" required={false} error={errors.company}>
            <Input
              id="company"
              name="company"
              value={formState.company}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.company}
              className="bg-zinc-700 border-zinc-600 focus:border-blue-500"
            />
          </FormField>
        </div>

        <FormField name="service" label="Gewünschte Dienstleistung" required={true} error={errors.service}>
          <Select value={formState.service} onValueChange={(value) => handleSelectChange("service", value)}>
            <SelectTrigger
              className={`bg-zinc-700 border-zinc-600 focus:border-blue-500 ${
                errors.service ? "border-red-500 focus:border-red-500" : ""
              }`}
            >
              <SelectValue placeholder="Bitte wählen Sie eine Dienstleistung" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3d-vermessung">3D-Vermessung und Kartierung</SelectItem>
              <SelectItem value="thermografie">Thermografie</SelectItem>
              <SelectItem value="industrie-inspektionen">Industrie Inspektionen</SelectItem>
              <SelectItem value="bau-immobilien">Bau und Immobilieninspektionen</SelectItem>
              <SelectItem value="indoor-fluge">Indoor-Flüge</SelectItem>
              <SelectItem value="sonstiges">Sonstiges</SelectItem>
            </SelectContent>
          </Select>
        </FormField>

        {/* Toggle for optional fields */}
        <div>
          <button
            type="button"
            onClick={() => setShowOptionalFields(!showOptionalFields)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors py-2"
          >
            {showOptionalFields ? (
              <>
                <ChevronUp className="h-5 w-5" />
                <span>Zusätzliche Felder ausblenden</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-5 w-5" />
                <span>Zusätzliche Felder anzeigen (optional)</span>
              </>
            )}
          </button>
        </div>

        {/* Optional fields */}
        {showOptionalFields && (
          <>
            <FormField
              name="companyType"
              label="Was beschreibt Ihr Unternehmen am besten?"
              required={false}
              error={errors.companyType}
            >
              <Select value={formState.companyType} onValueChange={(value) => handleSelectChange("companyType", value)}>
                <SelectTrigger
                  className={`bg-zinc-700 border-zinc-600 focus:border-blue-500 ${
                    errors.companyType ? "border-red-500 focus:border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Bitte wählen Sie eine Option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immobilien">Immobilien</SelectItem>
                  <SelectItem value="industrie">Industrie</SelectItem>
                  <SelectItem value="energieversorger">Energieversorger</SelectItem>
                  <SelectItem value="solarparkbetreiber">Solarparkbetreiber</SelectItem>
                  <SelectItem value="solateur">Solateur</SelectItem>
                  <SelectItem value="ingenieurdienstleistungen">Ingenieurdienstleistungen Unternehmen</SelectItem>
                  <SelectItem value="energiedienstleistungen">Energie Dienstleistungsunternehmen</SelectItem>
                  <SelectItem value="andere">Andere</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField name="message" label="Ihre Nachricht" required={false} error={errors.message}>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.message}
            rows={6}
            className={`bg-zinc-700 border-zinc-600 focus:border-blue-500 ${
              errors.message ? "border-red-500 focus:border-red-500" : ""
            }`}
          />
        </FormField>

            <FormField
              name="selectedDates"
              label="Bevorzugte Termine (optional)"
              required={false}
              error={errors.selectedDates}
            >
              <div className="mt-2">
                <DatePickerField selectedDates={formState.selectedDates} onChange={handleDateChange} maxDates={3} />
                <p className="text-xs text-gray-400 mt-2">
                  Wählen Sie bis zu 3 bevorzugte Termine für einen Beratungstermin oder die Durchführung der Dienstleistung.
                </p>
              </div>
            </FormField>
          </>
        )}

        <div className="space-y-4">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white w-full py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
          </Button>

          {Object.keys(errors).length > 0 && isSubmitting && (
            <div className="bg-red-900/30 border border-red-800 text-red-400 p-4 rounded-lg flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <p>Bitte korrigieren Sie die markierten Felder.</p>
            </div>
          )}

          <p className="text-xs text-gray-400 text-center">
            * Pflichtfelder. Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
          </p>
        </div>
      </form>
    </div>
  )
}
