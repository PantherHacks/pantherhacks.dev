import Image from "next/image";

import { hackathonDateInfo } from "@/lib/dates";
import TeamMember from "./team-member";

const TeamSection = () => {
  return (
    <div id="team" className="flex flex-col items-center justify-center w-full py-40 relative overflow-x-clip">
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
        className="block md:hidden w-80 h-80 sm:w-96 sm:h-96 absolute top-0 -translate-y-1/2 select-none"
        draggable={false}
      />
      <h2 className="font-TangoSansBold text-6xl text-primary pb-10">Team</h2>
      <p className="mx-8 sm:mx-20 md:mx-24 text-center">
        Meet the people who made PantherHacks {hackathonDateInfo.year} possible.
      </p>
      <div className="pt-8 pb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <TeamMember name="Nataniel Farzan" teamRole="Executive Team" linkedinLink="https://www.linkedin.com" />
        <TeamMember name="Kalin Richardson" teamRole="Executive Team" linkedinLink="https://www.linkedin.com" />
        <TeamMember name="Owen Lucas" teamRole="Executive Team" linkedinLink="https://www.linkedin.com" />
        <TeamMember name="Dylan Ravel" teamRole="Software Team" linkedinLink="https://www.linkedin.com" />
        <TeamMember name="Daniel Tsivkovski" teamRole="Software Team" linkedinLink="https://www.linkedin.com" />
        <TeamMember name="Sam Fago" teamRole="Design Team" linkedinLink="https://www.linkedin.com" />
        <TeamMember name="First Last" teamRole="Team Member" linkedinLink="https://www.linkedin.com" />
        <TeamMember name="First Last" teamRole="Team Member" linkedinLink="https://www.linkedin.com" />
        <TeamMember name="First Last" teamRole="Team Member" linkedinLink="https://www.linkedin.com" />
        <TeamMember name="First Last" teamRole="Team Member" linkedinLink="https://www.linkedin.com" />
        <TeamMember name="First Last" teamRole="Team Member" linkedinLink="https://www.linkedin.com" />
        <TeamMember name="First Last" teamRole="Team Member" linkedinLink="https://www.linkedin.com" />
      </div>
    </div>
  );
};

export default TeamSection;
