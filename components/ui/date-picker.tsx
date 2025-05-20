"use client"

import { Badge } from "@/components/ui/badge"

import * as React from "react"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { CalendarIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export interface DatePickerProps {
  selectedDates: Date[]
  onChange: (dates: Date[]) => void
  maxDates?: number
}

export function DatePicker({ selectedDates, onChange, maxDates = 3 }: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleSelect = (date: Date | undefined) => {
    if (!date) return

    // Check if the date is already selected
    const dateExists = selectedDates.some(
      (selectedDate) => format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd"),
    )

    if (dateExists) {
      // Remove the date if already selected
      onChange(
        selectedDates.filter((selectedDate) => format(selectedDate, "yyyy-MM-dd") !== format(date, "yyyy-MM-dd")),
      )
    } else if (selectedDates.length < maxDates) {
      // Add the date if not already selected and under the max limit
      onChange([...selectedDates, date])
    }
  }

  const removeDate = (dateToRemove: Date) => {
    onChange(selectedDates.filter((date) => format(date, "yyyy-MM-dd") !== format(dateToRemove, "yyyy-MM-dd")))
  }

  return (
    <div className="space-y-4">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal bg-zinc-700 border-zinc-600 hover:bg-zinc-600"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDates.length === 0 ? (
              <span>Termine auswählen (max. {maxDates})</span>
            ) : (
              <span>{selectedDates.length} Termine ausgewählt</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-zinc-800 border-zinc-700" align="start">
          <Calendar
            mode="single"
            onSelect={handleSelect}
            locale={de}
            disabled={(date) => {
              // Disable past days and weekends
              const now = new Date()
              now.setHours(0, 0, 0, 0)
              const day = date.getDay()
              return date < now || day === 0 || day === 6
            }}
            initialFocus
            className="bg-zinc-800 text-white"
          />
        </PopoverContent>
      </Popover>

      {selectedDates.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedDates.map((date, i) => (
            <div
              key={format(date, "yyyy-MM-dd")}
              className="flex items-center bg-blue-900/30 border border-blue-800 text-white px-3 py-1 rounded-full text-sm"
            >
              <span>{format(date, "EEE, dd. MMM yyyy", { locale: de })}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeDate(date)}
                className="h-5 w-5 ml-1 hover:bg-blue-800 rounded-full"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Termin entfernen</span>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export interface DatePickerFieldProps {
  selectedDates: Date[]
  onChange: (dates: Date[]) => void
  maxDates?: number
}

export function DatePickerField({ selectedDates, onChange, maxDates = 3 }: DatePickerFieldProps) {
  const handleSelect = (date: Date | undefined) => {
    if (!date) return

    // Check if the date is already selected
    const dateExists = selectedDates.some(
      (selectedDate) => format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd"),
    )

    if (dateExists) {
      // Remove the date if already selected
      onChange(
        selectedDates.filter((selectedDate) => format(selectedDate, "yyyy-MM-dd") !== format(date, "yyyy-MM-dd")),
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

    onChange(selectedDates.filter((date) => format(date, "yyyy-MM-dd") !== format(dateToRemove, "yyyy-MM-dd")))
  }

  return (
    <div className="space-y-4">
      <div className="bg-zinc-700 border border-zinc-600 rounded-md p-4">
        <div className="mx-auto" style={{ maxWidth: "280px" }}>
          <Calendar
            mode="single"
            onSelect={handleSelect}
            locale={de}
            disabled={(date) => {
              // Disable past days and weekends
              const now = new Date()
              now.setHours(0, 0, 0, 0)
              const day = date.getDay()
              return date < now || day === 0 || day === 6
            }}
            initialFocus
            selected={selectedDates}
            footer={
              <div className="mt-4 text-center text-sm text-gray-400">
                {selectedDates.length < maxDates
                  ? `Bitte wählen Sie bis zu ${maxDates} Termine aus`
                  : "Maximale Anzahl an Terminen ausgewählt"}
              </div>
            }
          />
        </div>
      </div>

      {selectedDates.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedDates.map((date) => (
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
