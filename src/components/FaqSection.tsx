
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Who can participate in the hackathon?",
      answer: "The hackathon is open to developers, designers, and Bitcoin enthusiasts of all skill levels. Whether you're a seasoned Bitcoin developer or just starting out, you're welcome to join. Teams can consist of 1-4 people."
    },
    {
      question: "Do I need to have a team before the event?",
      answer: "No, you don't need to have a team beforehand. We'll have team formation activities at the beginning of the hackathon to help solo participants find teammates."
    },
    {
      question: "What can I build during the hackathon?",
      answer: "You can build any Bitcoin-related project, including but not limited to: Lightning Network applications, wallet solutions, privacy tools, scalability solutions, educational resources, or anything that advances the Bitcoin ecosystem."
    },
    {
      question: "Is there an application deadline?",
      answer: "Yes, applications close on May 15, 2025. We encourage you to apply early as spots are limited and we expect high demand."
    },
    {
      question: "Are there any registration fees?",
      answer: "No, participation in the hackathon is completely free for all selected participants. Meals and refreshments will be provided throughout the event."
    },
    {
      question: "Will there be hardware available?",
      answer: "You should bring your own laptop and any specific hardware needed for your project. However, we'll have some specialized Bitcoin hardware (like Lightning nodes) available for teams to use."
    },
    {
      question: "How will the projects be judged?",
      answer: "Projects will be evaluated based on innovation, technical implementation, potential impact on the Bitcoin ecosystem, user experience, and presentation quality. Our panel of judges includes Bitcoin developers, investors, and industry experts."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked <span className="text-bitcoin">Questions</span></h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Got questions about the hackathon? We've got you covered.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-dark-300 py-2"
              >
                <AccordionTrigger className="text-lg font-medium hover:text-bitcoin">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-foreground/80 mb-4">
              Still have questions? Reach out to us directly.
            </p>
            <a 
              href="mailto:info@presidiohack.com" 
              className="text-bitcoin hover:underline"
            >
              info@presidiohack.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
