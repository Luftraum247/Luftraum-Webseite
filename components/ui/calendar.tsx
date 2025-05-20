"use client"

import type * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { de } from "date-fns/locale"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <div className="calendar-container w-full max-w-[280px] mx-auto">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        locale={de}
        classNames={{
          months: "flex flex-col space-y-4",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-white border-zinc-600",
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell: "text-zinc-400 rounded-md w-9 font-normal text-[0.8rem] text-center",
          row: "flex w-full mt-2",
          cell: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-white hover:bg-zinc-600",
          ),
          day_selected: "bg-blue-600 text-white hover:bg-blue-700 hover:text-white focus:bg-blue-700 focus:text-white",
          day_today: "bg-zinc-600 text-white",
          day_outside: "text-zinc-500 opacity-50",
          day_disabled: "text-zinc-500 opacity-30 hover:bg-transparent",
          day_range_middle: "aria-selected:bg-zinc-600 aria-selected:text-white",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: () => <ChevronLeft className="h-4 w-4" />,
          IconRight: () => <ChevronRight className="h-4 w-4" />,
        }}
        {...props}
      />
    </div>
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
