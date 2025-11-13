"use client"

import { useEffect } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import { GlindentLogo } from "@/components/glindent-logo"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <GlindentLogo variant="green" className="mx-auto mb-8 h-12 w-auto" />
        
        <h1 className="mb-4 font-sans text-4xl font-light text-foreground">
          Something went wrong
        </h1>
        
        <p className="mb-8 text-foreground/70">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <MagneticButton onClick={reset} variant="primary">
            Try again
          </MagneticButton>
          <MagneticButton onClick={() => window.location.href = '/'} variant="secondary">
            Go home
          </MagneticButton>
        </div>

        {error.digest && (
          <p className="mt-8 font-mono text-xs text-foreground/40">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
