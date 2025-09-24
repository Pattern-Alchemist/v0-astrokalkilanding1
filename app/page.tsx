import { Hero } from "@/components/astro/hero"
import { Pricing } from "@/components/astro/pricing"
import { AddOns } from "@/components/astro/addons"
import { FAQ } from "@/components/astro/faq"
import { Testimonials } from "@/components/astro/testimonials"
import { Button } from "@/components/ui/button"

export default function Page() {
  const finalWaText = encodeURIComponent("Hi! I’m ready to book a session with AstroKalki.")
  const finalWaLink = `https://wa.me/?text=${finalWaText}`

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-10 md:px-8">
      <Hero />

      <section className="rounded-3xl border border-border/50 bg-card/60 p-6 shadow-lg shadow-primary/10 md:p-8">
        <div className="flex flex-col gap-2 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Signature Modalities
          </span>
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Your personal cosmic operations stack</h2>
          <p className="text-pretty text-sm text-muted-foreground md:text-base">
            Navigate foundations, timing, and mystic depth with curated toolkits for every life arena.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Highlight
            title="Foundations & Self-Discovery"
            items={["Birth Blueprint (Natal Chart)", "Planetary Weather (Transits)", "Life Map (Soul Contract)"]}
          />
          <Highlight
            title="Love, Timing & Location"
            items={[
              "Magnetic Match (Synastry)",
              "Perfect Moment Finder (Electional)",
              "Destiny Compass (Astrocartography)",
            ]}
          />
          <Highlight
            title="Mysticism & Energy"
            items={["Shadow Alchemy", "Oracle + Lenormand Fusion", "Akashic Records & Chakra Scan"]}
          />
        </div>
      </section>

      <Pricing />
      <AddOns />
      <Testimonials />
      <FAQ />

      <section className="rounded-3xl border border-border/50 bg-card/60 px-6 py-12 text-center shadow-xl shadow-primary/10 md:px-10">
        <h3 className="text-balance text-2xl font-semibold md:text-3xl">
          Ready to align with your most auspicious window?
        </h3>
        <p className="mt-3 text-pretty text-sm text-muted-foreground md:text-base">
          Start with a ₹100 Quick Cosmic Clarity call or jump straight into your full masterplan — availability is
          capped to ensure high-touch follow-through.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={finalWaLink} target="_blank" rel="noopener noreferrer">
              Book on WhatsApp
            </a>
          </Button>
          <Button variant="secondary" asChild size="lg">
            <a href="#packages">See Packages</a>
          </Button>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          If slots are full, you’ll be added to a priority callback queue with first access to cancellations.
        </p>
      </section>

      <footer className="border-t border-border/40 pt-6 text-center text-xs text-muted-foreground">
        <p>AstroKalki™ — Cosmic Services Reimagined</p>
        <p className="mt-1">Clarity-first guidance. Practical steps. Timely action.</p>
      </footer>
    </main>
  )
}

function Highlight({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/40 bg-background/60 p-6 transition-transform hover:-translate-y-1 hover:border-primary/50">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 leading-relaxed">
            <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
