import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { applicationDateInfo, hackathonDateInfo } from "@/lib/dates";
import { applicationLink } from "@/lib/links";

const FaqsSection = () => {
  return (
    <div id="faqs" className="flex flex-col items-center justify-center w-full py-40 relative overflow-x-clip">
      <Image
        src="/images/oranges/orange-branch-1.svg"
        alt="An orange branch."
        width={100}
        height={100}
        className="hidden md:block w-96 h-96 absolute -left-2 top-0 -translate-y-1/2 select-none"
        draggable={false}
      />
      <Image
        src="/images/oranges/orange-branch-mobile-divider.svg"
        alt="An orange branch divider."
        width={100}
        height={100}
        className="block md:hidden w-64 h-64 sm:w-96 sm:h-96 absolute top-0 -translate-y-1/2 select-none"
        draggable={false}
      />
      <SectionTitle color1="#FE5501" color2="#4d1900" color3="#EE5000" color4="#ff6d12" textShadowColor="#FFE300">
        FAQS
      </SectionTitle>
      <p className="font-UbuntuMono">Got questions? We got answers.</p>
      <div className="px-10 pt-8 w-full md:w-1/2">
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
              . Applications are due {applicationDateInfo.dateString}.
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
            <AccordionTrigger>Can I still attend even if I don't know how to code?</AccordionTrigger>
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
