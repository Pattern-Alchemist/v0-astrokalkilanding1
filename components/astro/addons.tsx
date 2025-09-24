import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const addons = [
  {
    name: "Love Magnet Pack",
    price: "₹2500",
    desc: "Deep relationship & marriage guidance.",
  },
  {
    name: "Career Breakthrough Pack",
    price: "₹2200",
    desc: "Job timing and business success strategies.",
  },
  {
    name: "3-Year Life Forecast",
    price: "₹3500",
    desc: "Year-by-year roadmap for love, money, and health.",
  },
]

function waHrefFor(name: string) {
  const text = `Hi! I'd like to add: ${name} (AstroKalki Add-on).`
  return `https://wa.me/?text=${encodeURIComponent(text)}`
}

export function AddOns() {
  return (
    <section className="py-10 md:py-14">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Limited-Time Add-Ons</h2>
        <p className="text-muted-foreground text-pretty">Enhance your session and lock in deeper clarity.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {addons.map((a) => (
          <Card key={a.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{a.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </CardHeader>
            <CardContent className="mt-auto flex items-center justify-between">
              <span className="font-medium">{a.price}</span>
              <Button asChild variant="secondary">
                <a href={waHrefFor(a.name)} target="_blank" rel="noopener noreferrer">
                  Add via WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
