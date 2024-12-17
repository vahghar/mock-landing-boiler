import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }
  
  const FAQList: FAQProps[] = [
    {
      question: "Is this template really free to use?",
      answer: "Absolutely! You can use this Next.js template without any charges.",
      value: "item-1",
    },
    {
      question: "Can I customize the design to suit my needs?",
      answer:
        "Yes, this template is highly customizable. You can modify the styles and structure as per your requirements.",
      value: "item-2",
    },
    {
      question: "Do I need coding experience to use this template?",
      answer:
        "Basic knowledge of Next.js and React is helpful, but we've kept the template beginner-friendly!",
      value: "item-3",
    },
    {
      question: "Is this template optimized for SEO?",
      answer:
        "Yes, the template is designed with SEO best practices in mind to help improve visibility in search engines.",
      value: "item-4",
    },
    {
      question: "Will I get support for using this template?",
      answer:
        "While we don’t offer direct support, comprehensive documentation and resources are available.",
      value: "item-5",
    },
  ];
  
  
  export const FAQSection = () => {
    return (
      <section id="faq" className="container md:w-[700px] mx-auto py-24 sm:py-32 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            FAQS
          </h2>
  
          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Common Questions
          </h2>
        </div>
  
        <Accordion type="single" collapsible className="AccordionRoot">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
  
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  };
  