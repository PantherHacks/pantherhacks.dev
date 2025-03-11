import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { hackathonDateInfo } from "@/lib/dates";
import { applicationLink } from "@/lib/links";

const FaqsSection = () => {
  return (
    <div id="faqs" className="flex flex-col items-center justify-center w-full py-40">
      <h2 className="font-TangoSansBold text-6xl text-primary pb-10">FAQs</h2>
      <p className="">Got questions? We got answers.</p>
      <div className="px-10 w-full md:w-1/2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is a hackathon?</AccordionTrigger>
            <AccordionContent>A hackathon is a team-based timed coding competition.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What is PantherHacks {hackathonDateInfo.year}?</AccordionTrigger>
            <AccordionContent>
              PantherHacks {hackathonDateInfo.year} is Chapman University's inaugural hackathon. The event is by
              students and for students. Students can participate in teams of 1-4 people.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>When is PantherHacks {hackathonDateInfo.year}?</AccordionTrigger>
            <AccordionContent>
              PantherHacks {hackathonDateInfo.year} is a 48-hour hackathon that will take place the weekend of{" "}
              {hackathonDateInfo.dateString}.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How do I apply?</AccordionTrigger>
            <AccordionContent>
              You can apply to PantherHacks {hackathonDateInfo.year} by visiting{" "}
              <Link href={applicationLink} target="_blank" className="underline hover:text-primary">
                this link
              </Link>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Where is PantherHacks {hackathonDateInfo.year}?</AccordionTrigger>
            <AccordionContent>
              Sandhu Conference Center at Chapman University (590 N Shaffer St, Orange, CA 92866).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How much does it cost?</AccordionTrigger>
            <AccordionContent>
              PantherHacks is free for all attendees. We would like to thank Chapman University's Student Government
              Association for providing funding for our event.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Am I eligible to attend?</AccordionTrigger>
            <AccordionContent>
              All Chapman University students of any field of study are eligible to participate in PantherHacks{" "}
              {hackathonDateInfo.year}.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-start">
              Can I still attend even if I don't know how to code?
            </AccordionTrigger>
            <AccordionContent>
              Yes! Prior experience is not required to participate. Mentors will be available to help you if you get
              stuck.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Will there be food?</AccordionTrigger>
            <AccordionContent>Yes, meals and snacks will be provided throughout the event.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Will there be prizes?</AccordionTrigger>
            <AccordionContent>
              Yes, judges will score projects at the end of the event and prizes will be given to each member of the
              winning teams. Judges will determine the winners of each of the four tracks (Artificial Intelligence,
              Cybersecurity, Healthcare, Sustainability). Additionally, the Hacker's Choice award will be presented to
              the team that receives the most votes from fellow hackathon participants.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqsSection;
