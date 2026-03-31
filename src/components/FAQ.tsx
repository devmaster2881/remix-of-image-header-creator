import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does Accelerates growth technology strategy work even if I have a current technology platform in place?",
    a: "Lorem ipsum dolor sit amet consectetur. Pharetra sit eget nec convallis. Sed at tellus eu pellentesque malesuada. Praesent vel scelerisque sapien. Donec efficitur risus vel urna scelerisque, vitae iaculis quam dignissim.",
  },
  {
    q: "Everyone is talking about AI and its impact on business. What's the scoop here?",
    a: "AI is transforming industries by automating processes, providing deeper insights through data analysis, and enabling personalized customer experiences at scale.",
  },
  {
    q: "How long does it typically take to see results from training programs?",
    a: "Results vary depending on the program scope and implementation, but most organizations begin seeing measurable improvements within 3-6 months.",
  },
  {
    q: "Can the training be customized for our specific industry?",
    a: "Absolutely. We tailor all our programs to align with your industry's unique challenges, regulatory requirements, and competitive landscape.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="max-w-[948px] mx-auto px-6">
        <h2 className="font-black text-foreground mb-8 text-[40px] md:text-[54px] leading-none">
          Frequently Asked Question (FAQ)
        </h2>

        <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-[10px] max-w-[822px] mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl p-5 bg-muted border-none"
            >
              <AccordionTrigger className="font-medium text-xl text-foreground hover:no-underline p-0">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pt-4 border-t border-border mt-4 text-base text-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
