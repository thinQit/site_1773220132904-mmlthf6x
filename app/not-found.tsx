import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center text-foreground">
      <h1 className="text-5xl font-bold uppercase">404</h1>
      <p className="text-muted-foreground">Page not found. Let’s get you back to training.</p>
      <Button asChild className="transition-all duration-200 hover:scale-105">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}
