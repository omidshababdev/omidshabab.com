"use client"

import { CheckCheck, TriangleAlertIcon } from "lucide-react"
import { Toaster as Sonner } from "sonner"

interface ToasterProps {
  font: string,
  others: React.ComponentProps<typeof Sonner>
}

const Toaster = ({ font, others: { ...props } }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:border-[1px] group-[.toaster]:border-green-200 group-[.toaster]:text-green-600 group-[.toaster]:bg-green-50 group-[.toaster]:shadow-none",
          description: "group-[.toast]:text-muted-foreground",
          success: "group-[.toaster]:border-[2px] group-[.toaster]:border-green-600/5 group-[.toaster]:text-green-600 group-[.toaster]:bg-green-50",
          error: "group-[.toaster]:border-[2px] group-[.toaster]:border-red-600/5 group-[.toaster]:text-red-600 group-[.toaster]:bg-red-50",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          loading: "group-[.toaster]:border-[1px] group-[.toaster]:border-yellow-200 group-[.toaster]:text-yellow-600 group-[.toaster]:bg-yellow-50"
        },
        className: font
      }}
      icons={{
        success: (
          <CheckCheck className="w-5 h-5" />
        ),
        error: (
          <TriangleAlertIcon className="w-5 h-5" />
        )
      }}
      loadingIcon={
        <div className="animate-spin w-5 h-5 rounded-full border-[2px] border-yellow-600/10 border-b-yellow-600 transition-all" />
      }
      {...props}
    />
  )
}

export { Toaster }
