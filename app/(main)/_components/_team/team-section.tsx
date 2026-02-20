import Image from "next/image";

import { SectionTitle } from "@/components/section-title";
import { hackathonDateInfo } from "@/lib/dates";
import TeamMember from "./team-member";

const TeamSection = () => {
  return (
    <div id="team" className="flex flex-col items-center justify-center w-full pt-40 relative overflow-x-clip">
      <Image
        src="/images/oranges/orange-branch-2.svg"
        alt="An orange branch."
        width={100}
        height={100}
        className="hidden md:block w-96 h-96 absolute -right-2 top-0 -translate-y-1/2 select-none"
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
      <SectionTitle color1="#02dbf7" color2="#0E3C40" color3="#08c9a9" color4="#00EEFF" textShadowColor="#99ffff">
        Team
      </SectionTitle>
      <p className="mx-8 font-UbuntuMono text-lg sm:mx-20 md:mx-24 text-center">
        Meet the people who made PantherHacks {hackathonDateInfo.year} possible.
      </p>
      <div className="pt-8 pb-4 flex flex-row flex-wrap gap-3 md:gap-6 px-4 sm:px-8 md:px-16 max-w-[60rem] justify-center items-center">
        <TeamMember
          name="Nataniel Farzan"
          teamRole="Executive Team"
          linkedinLink="https://www.linkedin.com/in/natanielfarzan/"
        />
        <TeamMember
          name="Kalin Richardson"
          teamRole="Executive Team"
          linkedinLink="https://www.linkedin.com/in/kalin-richardson/"
        />
        <TeamMember
          name="Owen Agbayani"
          teamRole="Executive Team"
          linkedinLink="https://www.linkedin.com/in/agbayani/"
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
        <TeamMember
          name="Daniel Tsivkovski"
          teamRole="Software Team"
          linkedinLink="https://www.linkedin.com/in/danieltsivkovski/"
        />
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
    </div>
  );
};

export default TeamSection;
