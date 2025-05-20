"use client"

import type * as React from "react"
import { format, isValid } from "date-fns"
import { de } from "date-fns/locale"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SimpleCalendar } from "./simple-calendar"

export interface DatePickerFieldProps {
  selectedDates: Date[]
  onChange: (dates: Date[]) => void
  maxDates?: number
}

export function DatePickerField({ selectedDates, onChange, maxDates = 3 }: DatePickerFieldProps) {
  const handleSelect = (date: Date | undefined) => {
    if (!date || !isValid(date)) return

    // Check if the date is already selected
    const dateExists = selectedDates.some(
      (selectedDate) => isValid(selectedDate) && format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd"),
    )

    if (dateExists) {
      // Remove the date if already selected
      onChange(
        selectedDates.filter(
          (selectedDate) => !isValid(selectedDate) || format(selectedDate, "yyyy-MM-dd") !== format(date, "yyyy-MM-dd"),
        ),
      )
    } else if (selectedDates.length < maxDates) {
      // Add the date if not already selected and under the max limit
      onChange([...selectedDates, date])
    }
  }

  const removeDate = (dateToRemove: Date, event: React.MouseEvent) => {
    // Stop propagation to prevent form submission
    event.preventDefault()
    event.stopPropagation()

    if (!isValid(dateToRemove)) return

    onChange(
      selectedDates.filter(
        (date) => !isValid(date) || format(date, "yyyy-MM-dd") !== format(dateToRemove, "yyyy-MM-dd"),
      ),
    )
  }

  // Filter out invalid dates
  const validSelectedDates = selectedDates.filter((date) => isValid(date))

  return (
    <div className="space-y-4">
      <div className="bg-zinc-700 border border-zinc-600 rounded-md p-4 flex justify-center">
        <SimpleCalendar
          locale={de}
          selected={validSelectedDates}
          onSelect={handleSelect}
          disabled={(date) => {
            if (!isValid(date)) return true

            // Disable past days and weekends
            const now = new Date()
            now.setHours(0, 0, 0, 0)
            const day = date.getDay()
            return date < now || day === 0 || day === 6
          }}
          footer={
            <div className="mt-4 text-center text-sm text-gray-400">
              {validSelectedDates.length < maxDates
                ? `Bitte wählen Sie bis zu ${maxDates} Termine aus`
                : "Maximale Anzahl an Terminen ausgewählt"}
            </div>
          }
        />
      </div>

      {validSelectedDates.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {validSelectedDates.map((date) => (
            <Badge
              key={format(date, "yyyy-MM-dd")}
              className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-1.5"
            >
              {format(date, "EEE, dd. MMM yyyy", { locale: de })}
              <button
                type="button"
                onClick={(e) => removeDate(date, e)}
                className="ml-1 rounded-full hover:bg-blue-800 p-0.5"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Termin entfernen</span>
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
