import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { generalFaqs, type FAQItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

interface FaqSectionProps {
  items?: FAQItem[];
  title?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
}

export function FaqSection({
  items = generalFaqs,
  title = "Frequently Asked Questions",
  eyebrow = "Have questions?",
  description = "Straightforward answers about booking, guides, local conditions, and our Himalayas trips.",
  className,
}: FaqSectionProps) {
  return (
    <section className={cn("py-16 sm:py-20", className)} aria-labelledby="home-faqs-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {items.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-heading text-sm font-bold uppercase tracking-wide text-foreground hover:no-underline hover:text-brand">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
