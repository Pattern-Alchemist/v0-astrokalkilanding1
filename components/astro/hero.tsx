import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Hero() {
  const waText = encodeURIComponent("Hi! I’d like a Quick Cosmic Clarity call (₹100).")
  const waLink = `https://wa.me/?text=${waText}`

  return (
    <header className="w-full">
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span aria-hidden className="h-6 w-6 rounded bg-primary" />
          <span className="font-semibold tracking-tight">AstroKalki</span>
          <span className="sr-only">AstroKalki — Cosmic Services Reimagined</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <Link href="#packages" className="text-sm underline underline-offset-4">
            See Packages
          </Link>
          <Button asChild>
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              Book on WhatsApp
            </a>
          </Button>
        </div>
      </nav>

      <section className="grid gap-6 md:grid-cols-2 md:items-center md:gap-10 py-8">
        <div className="space-y-5">
          <h1 className={cn("text-3xl md:text-5xl font-semibold text-balance")}>
            AstroKalki — Cosmic Services Reimagined
          </h1>
          <p className="text-pretty text-muted-foreground">
            Decode your cosmic DNA, align your timing, and act with clarity. Birth charts, love compatibility, perfect
            moments, career strategy, and deep spiritual guidance — all in one place.
          </p>

          <ul className="text-sm grid gap-2">
            <li>
              <span className="font-medium">⚡ Quick Cosmic Clarity (₹100):</span> One question, one answer, zero fluff.
            </li>
            <li>
              <span className="font-medium">🔑 Soul Strategy:</span> Turn confusion into a 12-month action plan.
            </li>
            <li>
              <span className="font-medium">👑 Destiny Designer:</span> 90 minutes to master your life’s blueprint.
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button size="lg" asChild>
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                Book WhatsApp Call
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#packages">See Packages & Pricing</Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Limited weekly slots. Clear guidance, practical steps, no jargon.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden border">
          <video
            className="w-full h-auto"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Whisk_ygn1imzzcjzyimnm1ynmvdotidnwqtlhzdzy0yn-zgnHxnxXAnM77NRNGRN4pv45SWa9MZ.mp4"
            controls
            preload="metadata"
            aria-label="AstroKalki service intro"
            poster={"/astrology-intro-video-poster.jpg"}
          />
        </div>
      </section>
    </header>
  )
}
