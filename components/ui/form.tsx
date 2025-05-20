import * as React from "react"
import { cn } from "@/lib/utils"

export interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  error?: boolean
}

const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, error = true, ...props }, ref) => {
    if (!children) {
      return null
    }

    return (
      <p
        ref={ref}
        className={cn("text-sm font-medium", error ? "text-red-500" : "text-green-500", className)}
        {...props}
      >
        {children}
      </p>
    )
  },
)
FormMessage.displayName = "FormMessage"

export interface FormFieldProps {
  name: string
  label: string
  required?: boolean
  error?: string | null
  children: React.ReactNode
}

function FormField({ name, label, required, error, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
      {children}
      {error && <FormMessage>{error}</FormMessage>}
    </div>
  )
}

export { FormMessage, FormField }
