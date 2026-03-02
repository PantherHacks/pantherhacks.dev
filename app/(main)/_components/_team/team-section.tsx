import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import SpecialButton from "@/components/ui/special-button";
import { hackathonDateInfo } from "@/lib/dates";
import TeamMember from "./team-member";

const TeamSection = () => {
  return (
    <div id="team" className="flex flex-col items-center justify-center w-full pt-40 relative overflow-x-clip pb-12">
      <Image
        src="/images/oranges/orange-branch-2.svg"
        alt="An orange branch."
        width={100}
        height={100}
        className="hidden md:block w-96 h-96 absolute -right-2 top-0 -translate-y-1/2 select-none"
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
        color1="#61D7FF"
        color2="#0b89e3"
        color3="#61D7FF"
        color4="#a3e8ff"
        textShadowColor="#6FB3FE"
        flickerIndices={[0, 1]}
      >
        Team
      </SectionTitle>
      <p className="mx-8 font-UbuntuMono sm:mx-20 md:mx-24 text-center">
        Meet the people who made PantherHacks {hackathonDateInfo.year} possible.
      </p>
      <div className="pt-8 pb-10 grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap gap-6 px-4 sm:px-8 md:px-16 max-w-[60rem] justify-center items-center">
        <TeamMember
          name="Nataniel Farzan"
          teamRole="Executive Team"
          linkedinLink="https://www.linkedin.com/in/natanielfarzan/"
        />
        <TeamMember
          name="Jeffrey Bok"
          teamRole="Executive Team"
          linkedinLink="https://www.linkedin.com/in/jeffreybok/"
        />
        <TeamMember
          name="Kalin Richardson"
          teamRole="Executive Team"
          linkedinLink="https://www.linkedin.com/in/kalin-richardson/"
        />
        <TeamMember
          name="Joel Escobar"
          teamRole="Executive Team"
          linkedinLink="https://www.linkedin.com/in/joel-escobar-6059a4214/"
        />
        <TeamMember
          name="Dylan Ravel"
          teamRole="Software Team"
          linkedinLink="https://www.linkedin.com/in/dylanravel/"
        />
        <TeamMember name="Daniel Tsivkovski" teamRole="Software Team" linkedinLink="https://tsiv.dev/" />
        <TeamMember
          name="Sam Fago"
          teamRole="Design Team"
          linkedinLink="https://www.linkedin.com/in/samantha-fago-08b4072ab/"
        />
        <TeamMember
          name="Daniel Min"
          teamRole="Operations Team"
          linkedinLink="https://www.linkedin.com/in/daniel-min-9758812b3/"
        />
      </div>
      <p className="mx-8 font-UbuntuMono sm:mx-20 md:mx-24 text-center my-4">
        Want to be a part of making PantherHacks possible? Sign up to be a volunteer below!
      </p>
      <Link href="/volunteer" target="_blank" rel="noopener noreferrer">
        <SpecialButton className="font-Xirod text-xl">VOLUNTEER</SpecialButton>
      </Link>
    </div>
  );
};

export default TeamSection;
