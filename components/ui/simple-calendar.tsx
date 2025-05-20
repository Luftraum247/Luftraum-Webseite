"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  format,
  addMonths,
  subMonths,
  isValid,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  getDay,
} from "date-fns"
import { Button } from "./button"

export interface SimpleCalendarProps {
  selected?: Date | Date[]
  onSelect?: (date: Date | undefined) => void
  disabled?: (date: Date) => boolean
  footer?: React.ReactNode
  locale?: any
}

export function SimpleCalendar({ selected, onSelect, disabled, footer, locale }: SimpleCalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date())

  // Get days in month
  const firstDayOfMonth = startOfMonth(currentMonth)
  const lastDayOfMonth = endOfMonth(currentMonth)
  const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth })

  // Get day of week of first day (0 = Sunday, 1 = Monday, etc.)
  const startDay = getDay(firstDayOfMonth)

  // Create array for calendar grid (6 rows x 7 columns)
  const calendarDays: (Date | null)[] = []

  // Add empty cells for days before the first day of month
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  calendarDays.push(...daysInMonth)

  // Add empty cells to complete the grid (if needed)
  const totalCells = 42 // 6 rows x 7 columns
  while (calendarDays.length < totalCells) {
    calendarDays.push(null)
  }

  // Handle month navigation
  const goToPreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  // Check if a date is selected
  const isDateSelected = (date: Date): boolean => {
    if (!selected) return false

    if (Array.isArray(selected)) {
      return selected.some((selectedDate) => isValid(selectedDate) && isSameDay(selectedDate, date))
    }

    return isValid(selected) && isSameDay(selected, date)
  }

  // Check if a date is disabled
  const isDateDisabled = (date: Date): boolean => {
    if (!isValid(date) || !isSameMonth(date, currentMonth)) return true
    return disabled ? disabled(date) : false
  }

  // Handle date selection
  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return
    if (onSelect) onSelect(date)
  }

  // Day names
  const dayNames = locale
    ? [...Array(7)].map((_, i) => format(new Date(2021, 0, i + 3), "EEEEEE", { locale }))
    : ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]

  return (
    <div className="w-[280px] bg-zinc-700 rounded-md p-3">
      {/* Calendar header with navigation */}
      <div className="flex justify-between items-center mb-4">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-7 w-7 bg-transparent p-0 border-zinc-600 hover:bg-zinc-700 text-white"
          onClick={goToPreviousMonth}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="text-sm font-medium">
          {isValid(currentMonth) ? format(currentMonth, "MMMM yyyy", { locale }) : ""}
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-7 w-7 bg-transparent p-0 border-zinc-600 hover:bg-zinc-700 text-white"
          onClick={goToNextMonth}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Calendar grid */}
      <div className="calendar-grid">
        {/* Day names header */}
        <div className="grid grid-cols-7 mb-1">
          {dayNames.map((day, i) => (
            <div key={i} className="h-8 flex items-center justify-center text-xs text-zinc-400 font-medium">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-0">
          {calendarDays.map((date, i) => {
            if (!date) {
              // Empty cell
              return <div key={`empty-${i}`} className="h-10 w-10" />
            }

            const isDisabled = isDateDisabled(date)
            const isSelected = isDateSelected(date)
            const isToday = isSameDay(date, new Date())

            return (
              <div key={format(date, "yyyy-MM-dd")} className="flex items-center justify-center p-0.5">
                <button
                  type="button"
                  onClick={() => handleDateClick(date)}
                  disabled={isDisabled}
                  className={`
                    w-9 h-9 rounded-full flex items-center justify-center text-sm
                    ${isSelected ? "bg-blue-600 text-white hover:bg-blue-700" : ""}
                    ${isToday && !isSelected ? "bg-zinc-600 text-white" : ""}
                    ${!isSelected && !isToday && !isDisabled ? "hover:bg-zinc-600 text-white" : ""}
                    ${isDisabled ? "text-zinc-500 opacity-30 cursor-not-allowed" : "cursor-pointer"}
                  `}
                >
                  {format(date, "d")}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      {footer && <div className="mt-2">{footer}</div>}
    </div>
  )
}
