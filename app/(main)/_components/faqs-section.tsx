import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqsSection = () => {
  return (
    <div id="faqs" className="flex flex-col items-center justify-center w-full py-40">
      <h2 className="font-TangoSansBold text-6xl text-primary pb-10">FAQs</h2>
      <p>Got questions? We got answers.</p>
      <div className="w-1/2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is your name?</AccordionTrigger>
            <AccordionContent>Pete. Pete the Panther.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Are you really a panther?</AccordionTrigger>
            <AccordionContent>What kind of question is that?</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>No but for real, are you a panther?</AccordionTrigger>
            <AccordionContent>Yes.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqsSection;
