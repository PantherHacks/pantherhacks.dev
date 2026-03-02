import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { applicationDateInfo, hackathonDateInfo } from "@/lib/dates";

const FaqsSection = () => {
  return (
    <div
      id="faqs"
      className="flex flex-col items-center justify-center w-full pb-40 pt-40 md:pt-30 relative overflow-x-clip"
    >
      <Image
        src="/images/artifacts/headphones.svg"
        alt="An orange branch."
        width={100}
        height={100}
        className="hidden md:block w-40 h-40 absolute md:-translate-x-[16rem] lg:-translate-x-[20rem] top-0 -translate-y-1/2 select-none drop-shadow-[0_0_10px_#FE5501] hover:-rotate-12 transition-all"
        draggable={false}
      />
      <Image
        src="/images/artifacts/laptop.svg"
        alt="An orange branch."
        width={100}
        height={100}
        className="hidden md:block w-52 h-52 absolute md:translate-x-[16rem] lg:translate-x-[20rem] top-0 -translate-y-1/2 select-none drop-shadow-[0_0_10px_#FE5501] hover:rotate-12 transition-all"
        draggable={false}
      />
      <Image
        src="/images/dividers/mobile-divider.svg"
        alt="An circuit wire divider."
        width={100}
        height={100}
        className="block md:hidden w-64 h-64 sm:w-96 sm:h-96 absolute top-0 -translate-y-1/2 select-none"
        draggable={false}
      />
      <SectionTitle
        color1="#22CC00"
        color2="#1ca600"
        color3="#5fe002"
        color4="#E9FF26"
        textShadowColor="#E9FF26"
        flickerIndices={[0, 1, 2, 3]}
      >
        FAQS
      </SectionTitle>
      <p className="font-UbuntuMono">Got questions? We got answers.</p>
      <div className="px-10 pt-8 w-full max-w-2xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is PantherHacks {hackathonDateInfo.year}?</AccordionTrigger>
            <AccordionContent>
              PantherHacks {hackathonDateInfo.year} is Chapman University’s second annual student-run hackathon, hosted
              by Computer Science Club.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>When is PantherHacks {hackathonDateInfo.year}?</AccordionTrigger>
            <AccordionContent>
              PantherHacks {hackathonDateInfo.year} is a 48-hour hackathon that will take place the weekend of{" "}
              {hackathonDateInfo.dateString}.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I apply?</AccordionTrigger>
            <AccordionContent>
              You can apply to PantherHacks {hackathonDateInfo.year}{" "}
              <Link href="/apply" target="_blank" className="underline hover:text-primary">
                this link
              </Link>
              . Applications are due {applicationDateInfo.dateString}.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Who is eligible to attend?</AccordionTrigger>
            <AccordionContent>
              All undergraduate students from any school of any major are eligible to participate in PantherHacks{" "}
              {hackathonDateInfo.year}.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What if I don’t know how to code?</AccordionTrigger>
            <AccordionContent>
              No worries at all! You don’t need prior coding experience to participate. Hackathons are all about
              learning, experimenting, and trying new things. We’ll have mentors available throughout the event to help
              you if you get stuck, and we encourage you to team up with others!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Will there be prizes?</AccordionTrigger>
            <AccordionContent>
              Yes, over $2,000 in prizes are up for grabs! Judges will score projects at the end of the event and prizes
              will be given to each member of the winning teams. Judges will determine the winners of each of the four
              tracks (Entertainment, Cybersecurity, Healthcare, Sustainability). Additionally, the Hacker's Choice Award
              will be presented to the team that receives the most votes from fellow hackathon participants.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Who is eligible to volunteer for PantherHacks {hackathonDateInfo.year}?</AccordionTrigger>
            <AccordionContent>
              Volunteer positions are open exclusively to currently enrolled Chapman University students. Individuals
              who are not current Chapman students are not eligible to apply for volunteer roles.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Can I volunteer and also participate as a hacker?</AccordionTrigger>
            <AccordionContent>
              No. Individuals who apply and are selected to serve as volunteers may not also compete as participants in
              PantherHacks {hackathonDateInfo.year}. Volunteers play an essential role in supporting the event and
              therefore are not permitted to participate as hackers during the same event.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqsSection;
