"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
      <h1 className="text-3xl font-bold uppercase">Something went wrong</h1>
      <p className="max-w-xl text-muted-foreground">
        We hit a snag while loading this page. Please try again.
      </p>
      <Button onClick={() => reset()} className="transition-all duration-200 hover:scale-105">
        Try Again
      </Button>
    </main>
  )
}
