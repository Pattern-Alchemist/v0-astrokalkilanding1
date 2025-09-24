import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Plan = {
  name: string
  price: string
  duration: string
  bullets: string[]
  tagline: string
}

const plans: Plan[] = [
  {
    name: "Quick Cosmic Clarity",
    price: "₹100",
    duration: "7–10 min call",
    bullets: ["1 burning question", "Career OR Love focus", "Zero fluff, direct answer"],
    tagline: "One question, one answer, zero fluff.",
  },
  {
    name: "Cosmic Kickstart",
    price: "₹1000",
    duration: "25–30 min call",
    bullets: [
      "Choose 3 insights",
      "Birth Blueprint + 3-month transits",
      "Love/Marriage OR Career snapshot",
      "Tarot mini-spread (Past/Present/Future)",
    ],
    tagline: "Your mini life map — clarity in 30 minutes.",
  },
  {
    name: "Soul Strategy Session",
    price: "₹3000",
    duration: "45–55 min call",
    bullets: [
      "Full chart & life cycles",
      "Compatibility OR Past-life karma",
      "Career/business roadmap",
      "Perfect Moment Finder (muhurat dates)",
    ],
    tagline: "A 12-month action plan with timing.",
  },
  {
    name: "Destiny Designer",
    price: "₹5000",
    duration: "75–90 min + PDF",
    bullets: [
      "Birth + Transits + 3-year roadmap",
      "Career + Relationship + Location",
      "Shadow work + Remedies",
      "Custom meditation/ritual plan (6 months)",
    ],
    tagline: "Clarity you can carry forever.",
  },
]

function waHrefFor(plan: string) {
  const text = `Hi! I’d like to book: ${plan} by AstroKalki.`
  return `https://wa.me/?text=${encodeURIComponent(text)}`
}

export function Pricing() {
  return (
    <section id="packages" className="py-12 md:py-16">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-balance">Curated Packages</h2>
        <p className="text-muted-foreground text-pretty">Strong names, clear outcomes, and WhatsApp-ready booking.</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => (
          <Card key={p.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{p.name}</CardTitle>
              <div className="mt-2">
                <div className="text-2xl font-semibold">{p.price}</div>
                <div className="text-xs text-muted-foreground">{p.duration}</div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <ul className="mb-4 grid gap-2 text-sm">
                {p.bullets.map((b, i) => (
                  <li key={i} className="leading-relaxed">
                    • {b}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mb-3">{p.tagline}</p>
              <Button asChild className="mt-auto">
                <a href={waHrefFor(p.name)} target="_blank" rel="noopener noreferrer">
                  Book on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
