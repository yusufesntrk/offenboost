import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  faqs: { question: string; answer: string }[];
}

const RestaurantsFAQ = ({ faqs }: Props) => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-4">FAQ</p>
          <h2 className="section-heading mb-4">
            Häufig gestellte <span className="gradient-text">Fragen</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 shadow-sm data-[state=open]:shadow-card data-[state=open]:border-primary/30 transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default RestaurantsFAQ;
