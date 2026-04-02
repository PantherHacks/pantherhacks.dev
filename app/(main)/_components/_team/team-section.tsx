import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import SpecialButton from "@/components/ui/special-button";
import { hackathonDateInfo } from "@/lib/dates";
import TeamMember from "./team-member";

const TeamSection = () => {
  return (
    <div
      id="team"
      className="md:pt-30 relative flex w-full flex-col items-center justify-center overflow-x-clip pb-20 pt-40"
    >
      <Image
        src="/images/artifacts/martini.svg"
        alt="A cyberpunk-style martini glass."
        width={100}
        height={100}
        className="absolute top-0 hidden h-40 w-40 -translate-y-1/2 -rotate-6 select-none drop-shadow-[0_0_10px_#FE5501] transition-all hover:-rotate-12 md:block md:-translate-x-[12rem] lg:-translate-x-[16rem]"
        draggable={false}
      />
      <Image
        src="/images/artifacts/coffee.svg"
        alt="An orange branch."
        width={100}
        height={100}
        className="absolute top-0 hidden h-40 w-40 -translate-y-1/2 select-none drop-shadow-[0_0_10px_#FE5501] transition-all hover:rotate-12 md:block md:translate-x-[12rem] lg:translate-x-[16rem]"
        draggable={false}
      />
      <Image
        src="/images/dividers/mobile-divider.svg"
        alt="An circuit wire divider."
        width={100}
        height={100}
        className="absolute top-0 block h-64 w-64 -translate-y-1/2 select-none sm:h-96 sm:w-96 md:hidden"
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
      <p className="mx-8 text-center font-UbuntuMono sm:mx-20 md:mx-24">
        Meet the people who made PantherHacks {hackathonDateInfo.year} possible.
      </p>
      <div className="grid max-w-[60rem] grid-cols-2 items-center justify-center gap-6 px-4 pb-10 pt-8 sm:flex sm:flex-row sm:flex-wrap sm:px-8 md:px-16">
        <TeamMember name="Nataniel Farzan" teamRole="Executive Team" url="https://natanielfarzan.com" />
        <TeamMember name="Jeffrey Bok" teamRole="Executive Team" url="https://www.linkedin.com/in/jeffreybok/" />
        <TeamMember
          name="Kalin Richardson"
          teamRole="Executive Team"
          url="https://www.linkedin.com/in/kalin-richardson/"
        />
        <TeamMember
          name="Joel Escobar"
          teamRole="Executive Team"
          url="https://www.linkedin.com/in/joel-escobar-6059a4214/"
        />
        <TeamMember name="Dylan Ravel" teamRole="Software Team" url="https://dylanravel.com" />
        <TeamMember name="Daniel Tsivkovski" teamRole="Software Team" url="https://tsiv.dev" />
        <TeamMember name="Sam Fago" teamRole="Design Team" url="https://design.fago.us/" />
        <TeamMember
          name="Daniel Min"
          teamRole="Operations Team"
          url="https://www.linkedin.com/in/daniel-min-9758812b3/"
        />
      </div>
      <p className="mx-8 my-4 text-center font-UbuntuMono sm:mx-20 md:mx-24">
        Want to be a part of making PantherHacks possible? Sign up to be a volunteer below!
      </p>
      <Link href="/volunteer" target="_blank" rel="noopener noreferrer">
        <SpecialButton className="font-Xirod text-xl">VOLUNTEER</SpecialButton>
      </Link>
    </div>
  );
};

export default TeamSection;
