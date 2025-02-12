import type React from "react"
import { FileUpload } from "./FileUpload"

interface ConverterLayoutProps {
  title: string
  description: string
  children?: React.ReactNode
}

export function ConverterLayout({ title, description, children }: ConverterLayoutProps) {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--dark-red))] to-[hsl(var(--light-red))]">
        {title}
      </h1>
      <p className="text-xl mb-8 text-muted-foreground">{description}</p>
      <FileUpload className="mb-8" />
      {children}
    </div>
  )
}

