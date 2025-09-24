import { Card, CardContent, CardHeader } from "@/components/ui/card"

const testimonials = [
  {
    name: "Aarav • Mumbai",
    quote: "The Soul Strategy session gave me a clear 12‑month roadmap. I finally knew when to move and when to wait.",
  },
  {
    name: "Mira • Bengaluru",
    quote:
      "Quick Cosmic Clarity was exactly that — fast and precise. I made a decision the same day and it worked out.",
  },
  {
    name: "Ishaan • Dubai",
    quote: "Destiny Designer felt like a life audit. The PDF summary keeps me aligned week after week.",
  },
]

export function Testimonials() {
  return (
    <section className="py-10 md:py-14">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Loved by Clients</h2>
        <p className="text-muted-foreground text-pretty">Real stories of clarity, timing, and momentum.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <img src="/professional-client-avatar.png" alt="" className="h-10 w-10 rounded-full" />
                <div className="text-sm font-medium">{t.name}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">“{t.quote}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
