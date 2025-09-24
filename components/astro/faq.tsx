import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-10 md:py-14">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-pretty">Short, clear answers to help you book with confidence.</p>
      </div>

      <div className="mt-8 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-to-prepare">
            <AccordionTrigger>What should I prepare before the session?</AccordionTrigger>
            <AccordionContent>
              Your birth date, time, and place. Bring 1–3 key questions you want clarity on.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="recording">
            <AccordionTrigger>Do I get notes or a recording?</AccordionTrigger>
            <AccordionContent>
              Destiny Designer includes a PDF summary. For other tiers, you’re welcome to take notes or record for
              personal use.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="reschedule">
            <AccordionTrigger>Can I reschedule if needed?</AccordionTrigger>
            <AccordionContent>
              Yes — let us know 24 hours in advance and we’ll find a new slot for you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="refunds">
            <AccordionTrigger>What about refunds?</AccordionTrigger>
            <AccordionContent>
              If we can’t deliver the session due to unforeseen issues, we’ll reschedule or refund. Your clarity
              matters.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
